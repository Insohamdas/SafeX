import { NextResponse } from "next/server";
import { pilotRequestSchema } from "@/lib/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = pilotRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, organization, workEmail, eventType, expectedAttendance, message } = result.data;

    // TODO(founder): replace this console dispatch with your production CRM (HubSpot, Salesforce) or email alert (Resend, SendGrid)
    console.log("[SafeX Pilot Ingestion] New Pilot Request Received:", {
      fullName,
      organization,
      workEmail,
      eventType,
      expectedAttendance,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Pilot request registered. Operations liaison assigned within 4 hours.",
      referenceId: `SFX-${Math.floor(100000 + Math.random() * 900000)}`,
    });
  } catch (error) {
    console.error("[SafeX Pilot Ingestion Error]:", error);
    return NextResponse.json(
      { success: false, message: "Internal submission error. Please try again or email ops@safex.internal." },
      { status: 500 }
    );
  }
}

