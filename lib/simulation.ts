export interface VenueZone {
  id: string;
  name: string;
  capacityMax: number;
  currentCount: number;
  densityPerSqm: number;
  riskScore: number;
  status: "safe" | "caution" | "danger" | "critical";
  flowRateMps: number;
  rerouteActive: boolean;
}

export const BASE_ZONES: Omit<VenueZone, "currentCount" | "densityPerSqm" | "riskScore" | "status" | "flowRateMps" | "rerouteActive">[] = [
  { id: "zone-1", name: "Sector A · Main Gate", capacityMax: 45000 },
  { id: "zone-2", name: "Sector B · Central Plaza", capacityMax: 70000 },
  { id: "zone-3", name: "Sector C · North Concourse", capacityMax: 35000 },
  { id: "zone-4", name: "Sector D · Transit Link", capacityMax: 50000 },
  { id: "zone-5", name: "Sector E · South Egress", capacityMax: 60000 },
  { id: "zone-6", name: "Sector F · Amphitheater", capacityMax: 40000 },
];

export function computeZoneTelemetry(totalAttendees: number, incidentTriggered = false): {
  zones: VenueZone[];
  totalAlerts: number;
  reroutesCount: number;
  avgMitigationSec: number;
  highestRiskScore: number;
} {
  const scale = totalAttendees / 300000;
  let reroutesCount = 0;
  let highestRisk = 0;

  const zones: VenueZone[] = BASE_ZONES.map((bz, index) => {
    // Distribute crowd with variance
    const weight = [0.22, 0.32, 0.16, 0.12, 0.10, 0.08][index];
    let count = Math.round(totalAttendees * weight * (0.9 + (index % 3) * 0.1));
    
    // If incident triggered, choke Sector C
    if (incidentTriggered && bz.id === "zone-3") {
      count = Math.round(count * 1.6);
    }

    const ratio = count / bz.capacityMax;
    let risk = Math.min(99, Math.round(ratio * 75 + (index === 2 ? 15 : 0)));
    if (incidentTriggered && bz.id === "zone-3") risk = 94;

    let status: VenueZone["status"] = "safe";
    if (risk >= 85) status = "critical";
    else if (risk >= 68) status = "danger";
    else if (risk >= 48) status = "caution";

    const rerouteActive = risk >= 75;
    if (rerouteActive) reroutesCount++;
    if (risk > highestRisk) highestRisk = risk;

    const densityPerSqm = Number((risk / 22).toFixed(2));
    const flowRateMps = Number(Math.max(0.15, 1.4 - (risk / 100) * 1.2).toFixed(2));

    return {
      ...bz,
      currentCount: count,
      densityPerSqm,
      riskScore: risk,
      status,
      flowRateMps,
      rerouteActive,
    };
  });

  const totalAlerts = Math.max(1, Math.round(scale * 12 + reroutesCount * 3));
  const avgMitigationSec = Math.max(45, Math.round(180 - reroutesCount * 18));

  return {
    zones,
    totalAlerts,
    reroutesCount,
    avgMitigationSec,
    highestRiskScore: highestRisk,
  };
}

