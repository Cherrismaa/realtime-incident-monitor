# Real-Time Log Monitoring & Intelligent Incident Detection Platform

A real-time monitoring dashboard that streams logs from simulated microservices, detects anomalies using sliding window analysis, automatically manages incident lifecycle, and visualizes system health dynamically.

---

## 📌 Overview

Modern software systems consist of multiple interconnected services. When one service starts failing, it can affect the entire system. This project simulates how real-world monitoring tools detect, analyze, and visualize system failures in real time.

This platform:

- Streams logs continuously
- Detects abnormal error spikes
- Automatically triggers incidents
- Auto-resolves incidents when system stabilizes
- Displays system health dynamically
- Visualizes service-level error distribution

It models how observability tools like Datadog, New Relic, and Splunk operate conceptually.

---

## 🧠 Problem It Solves

Without monitoring:

- Errors go unnoticed
- Failures propagate silently
- Downtime increases
- User experience suffers

This system transforms raw logs into actionable insights by detecting abnormal patterns and providing clear visibility into system health.

---

## ⚙️ How It Works

### 1️⃣ Log Generation
Simulated backend services generate logs continuously.

Services include:
- `auth`
- `database`
- `payments`
- `notifications`

---

### 2️⃣ Real-Time Streaming
Logs are fetched in real time and rendered live on the dashboard.

---

### 3️⃣ Sliding Window Detection Engine
The system analyzes logs within a rolling 10-second time window.

If error count crosses a defined threshold:
- 🚨 Incident is triggered

If error rate drops below threshold:
- ✅ Incident auto-resolves

---

### 4️⃣ Incident Lifecycle Management
Each incident:
- Tracks service name
- Tracks error count
- Stores start time
- Resolves automatically

---

### 5️⃣ System Health Abstraction
System status dynamically changes:

- 🟢 Healthy → No active incidents
- 🟡 Degraded → 1–2 active incidents
- 🔴 Critical → Multiple active incidents

---

### 6️⃣ Visualization Layer
Includes:

- 📜 Live Log Stream
- 🚨 Active Incident Panel
- 📊 Service Error Distribution Bar Chart
- 🌗 Dark / Light Mode Toggle

---

## 🏗️ Architecture

- src/
- app/
- api/logs/route.ts → Log API
- dashboard/page.tsx → Main Dashboard
- incidents/page.tsx → Incident View
- components/
- LogStream.tsx
- IncidentPanel.tsx
- HealthIndicator.tsx
- ServiceMetrics.tsx
- ThemeToggle.tsx
- services/
- detectionEngine.ts
- logGenerator.ts
- constants/
- services.ts
- types/
- log.ts
---

## 🛠️ Technologies Used

### Frontend
- ⚛️ Next.js (App Router)
- 🟦 TypeScript
- 🎨 Tailwind CSS
- 📊 Recharts
- 🌗 next-themes

### Architecture Concepts
- Real-time data handling
- Sliding window anomaly detection
- Incident lifecycle management
- State lifting pattern
- Modular service-based structure
- Client/Server component separation

---

## 🔍 Core Engineering Concepts Implemented

- Sliding Time Window Analysis
- Threshold-Based Anomaly Detection
- Auto-Resolving Incidents
- Real-Time UI Updates
- Service-Level Error Aggregation
- Dynamic Health Status Abstraction
- Modular Architecture Design

---


### Key Layers

- `services/` → Detection engine & log generator
- `constants/` → Centralized service definitions
- `types/` → Strongly typed log and incident models
- `components/` → Modular UI components

---

## 🔄 How It Works

1. Logs are generated for multiple services:
   - auth
   - database
   - payments
   - notifications

2. Logs stream into the dashboard.

3. Detection engine:
   - Maintains a sliding 10-second window
   - Counts ERROR and CRITICAL logs
   - Triggers incidents if threshold exceeded

4. If error count drops:
   - Incident auto-resolves

5. UI updates instantly:
   - Live log stream
   - Active incidents panel
   - System health status
   - Service error distribution chart

---

## 📊 Detection Logic

- Sliding time window: 10 seconds
- Error threshold: configurable
- Auto-resolution when error rate falls below threshold
- Active incidents stored in memory

This simulates real anomaly detection used in monitoring systems.

---

## 🖥️ Running Locally

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start development server

```bash
npm run dev
```

### Visit:

```bash
http://localhost:3000
```
---
## 🎯 Use Cases

This system models concepts used in:

- DevOps monitoring tools
- SaaS infrastructure platforms
- Distributed systems
- Microservice observability
- Cloud-based applications
---

## 📈 Future Enhancements

- WebSocket-based real-time streaming
- Persistent incident history
- Severity scoring algorithm
- Multi-service correlation detection
- Authentication & protected dashboard
- Historical trend line charts
---

## 👨‍💻 Author

Built as a demonstration of real-time monitoring architecture, anomaly detection logic, and observability dashboard design using modern web technologies.

---
