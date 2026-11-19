# SafeX: Real-Time Crowd Safety & Crisis Management Platform

SafeX is an intelligent, role-based crowd safety ecosystem engineered to bridge the communication and situational awareness gap between event visitors and response authorities during large gatherings, religious congregations, festivals, transit hubs, and sports events.

By combining real-time geo-targeted communication, computer vision crowd analysis, and dynamic navigation, SafeX prevents crowd surges, manages emergency responses, and keeps citizens safe.

---

## 🌟 Key Features

### 1. Dual Role-Based Experience
* **Visitor Mobile App**: Built for citizens and attendees to access safe paths, check zone congestion, report local issues, and receive urgent localized alerts in their preferred language.
* **Authority Command Center**: Dedicated operational portal for police, event organizers, and medical staff to monitor real-time crowd heatmaps, triage citizen reports, and dispatch teams.

### 2. AI-Driven Crowd Risk Analysis
* **Density Estimation**: Automated crowd density estimation from camera streams and high-resolution sector feeds.
* **Choke Point & Surge Detection**: Anomaly detection algorithms identify flow stagnation and bottleneck build-ups before dangerous stampede conditions develop.
* **Risk Scoring**: Real-time safety indices computed across monitored geographic zones.

### 3. Dynamic Safe-Route Guidance
* **Evasion Routing**: Reroutes pedestrians away from overcrowded sectors, blocked corridors, or reported hazard areas.
* **Corridor Prioritization**: Automatically steers crowds toward designated exit corridors and open safety hubs.

### 4. Multilingual Real-Time Alerts
* **Geo-Fenced Broadcasting**: Authorities can draw geofenced polygons to transmit urgent notices exclusively to affected zones.
* **Automatic Translation**: Broadcasts automatically adapt to the user's selected native language (e.g., English, Spanish, Hindi, French, Arabic).

### 5. Emergency SOS Beacon
* **One-Tap Trigger**: Immediate distress signaling transmitting precise user coordinates and device telemetry to the nearest field responder unit.
* **Continuous Responder Tracking**: Two-way status updates connecting the distressed citizen with active response personnel.

### 6. Crowdsourced Incident Reporting
* **Citizen Triage**: Allows attendees to flag medical emergencies, structural damage, unattended items, or lost individuals with attached photos and geotags.
* **Verification Pipeline**: Authority dashboard allows fast triage, verification, and automated task assignment to on-ground patrols.

---

## 🏗️ System Architecture

```
                    +----------------------------------------------------+
                    |                    SafeX Mobile                    |
                    |             (React Native / TypeScript)            |
                    |   Visitors: SOS, Routing   |   Authorities: Patrol |
                    +-------------------+----------------+---------------+
                                        |                |
                          REST & Geolocation        WebSockets
                                        |                |
                                        v                v
+-----------------------+       +----------------------------------------+
|  Authority Dashboard  | ----> |       Node.js Core API & Gateway       |
|  (React / TypeScript) | <---- |   (Express, Socket.io, TypeScript)     |
+-----------------------+       +-------------------+--------------------+
                                                    |
                         +--------------------------+--------------------------+
                         |                                                     |
                         v                                                     v
         +-------------------------------+                     +-------------------------------+
         |     FastAPI AI Risk Engine    |                     |       Data & Cache Layer      |
         | (Python, PyTorch, CV Streams) |                     |  - PostgreSQL + PostGIS (Geo) |
         |  - Crowd Density Estimation   |                     |  - Redis (Pub/Sub & Sessions) |
         |  - Surge & Choke Point Alerts |                     +-------------------------------+
         +-------------------------------+
```

---

## 📁 Repository Structure

```
SafeX/
├── apps/
│   ├── mobile/                    # React Native mobile client for visitors and field units
│   │   ├── src/
│   │   │   ├── components/        # Reusable UI components (SOS button, Map layers, Banners)
│   │   │   ├── screens/           # Role-segregated screens (visitor/ vs authority/)
│   │   │   ├── navigation/        # Role-based route stacks & tab bars
│   │   │   ├── services/          # HTTP API client, Location tracker, WebSockets
│   │   │   └── i18n/              # Localization files & translation bundles
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── web-dashboard/             # Command & Control web application for incident commanders
│   │   ├── src/
│   │   │   ├── components/        # Real-time incident tables, map overlays, alert composer
│   │   │   ├── pages/             # Dashboard, live zones, incident management, analytics
│   │   │   └── App.tsx
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── backend/                   # Node.js + TypeScript core service
│   │   ├── src/
│   │   │   ├── controllers/       # Auth, alerts, incidents, SOS, zones, routing
│   │   │   ├── middlewares/       # JWT authentication, role guards, rate limiters
│   │   │   ├── services/          # PostGIS geospatial calculations, routing engine
│   │   │   ├── sockets/           # Real-time alert broadcast & emergency telemetry
│   │   │   └── app.ts             # Service bootstrap
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── ai-service/                # Python FastAPI computer vision & risk service
│       ├── app/
│       │   ├── api/v1/            # Density inference, anomaly detection, stream metrics
│       │   ├── services/          # Crowd counting models, bottleneck detection
│       │   ├── core/              # Config, model weight loaders
│       │   └── main.py            # FastAPI entry point
│       ├── Dockerfile
│       └── requirements.txt
│
├── docker-compose.yml             # Unified local development orchestration
├── .env.example                   # Shared environment configuration template
└── .gitignore                     # Monorepo git hygiene
```

---

## 💻 Tech Stack

| Domain | Technology |
|---|---|
| **Mobile Application** | React Native, TypeScript, React Navigation, Geolocation API |
| **Web Dashboard** | React, TypeScript, Vite, Interactive GIS Map Component |
| **Core API & Realtime** | Node.js, Express, TypeScript, Socket.io |
| **AI & Predictive Analytics** | Python 3.11, FastAPI, PyTorch, OpenCV, NumPy |
| **Spatial Database & Cache** | PostgreSQL with PostGIS extension, Redis |
| **Containerization** | Docker, Docker Compose |

---

## 🚀 Quickstart & Setup

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* [Python](https://www.python.org/) (v3.11+)
* [Docker & Docker Compose](https://www.docker.com/)
* [React Native CLI Prerequisites](https://reactnative.dev/docs/environment-setup) (Android Studio / Xcode for mobile testing)

### 1. Clone & Configure
```bash
git clone https://github.com/<your-username>/SafeX.git
cd SafeX
cp .env.example .env
```

### 2. Run Infrastructure via Docker Compose
To boot up PostgreSQL (with PostGIS), Redis, the Node.js API, and the FastAPI AI service:
```bash
docker compose up --build
```
* **Node.js API**: `http://localhost:5000`
* **FastAPI AI Docs**: `http://localhost:8000/docs`
* **PostgreSQL (PostGIS)**: `localhost:5432`
* **Redis**: `localhost:6379`

### 3. Running Services Locally

#### Core Backend (Node.js + TypeScript)
```bash
cd apps/backend
npm install
npm run dev
```

#### AI Crowd Risk Service (FastAPI)
```bash
cd apps/ai-service
python3 -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

#### Web Dashboard (React + TypeScript)
```bash
cd apps/web-dashboard
npm install
npm run dev
```

#### Mobile App (React Native)
```bash
cd apps/mobile
npm install
npm run start
# In a separate terminal:
npm run android   # or npm run ios
```

---

## 🔒 Security & Privacy

* **Role-Based Access Control (RBAC)**: Strict segregation between Visitor capabilities and Authority controls.
* **Ephemeral Location Handling**: Non-critical visitor location pings are anonymized and aggregated into density counts to protect individual privacy.
* **Emergency Override**: SOS distress signals bypass standard queueing to ensure sub-second transmission to dispatchers.

---

## 📄 License
This project is licensed under the Apache-2.0 License.
