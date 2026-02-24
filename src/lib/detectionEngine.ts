/* src/lib/detectionEngine.ts */ 

import { LogEntry } from "@/types/log";

export interface Incident {
  id: string;
  service: string;
  level: "HIGH";
  startTime: number;
  errorCount: number;
  resolved: boolean;
}

export class DetectionEngine {
  private windowSize = 10000; // 10 seconds
  private threshold = 3;

  private logs: LogEntry[] = [];
  private activeIncidents: Map<string, Incident> = new Map();

  process(log: LogEntry): Incident[] {
    const now = Date.now();

    // Maintain sliding window
    this.logs = this.logs.filter(
      (l) => now - l.timestamp <= this.windowSize
    );

    this.logs.push(log);

    const serviceErrors: Record<string, number> = {};

    this.logs.forEach((l) => {
      if (l.level === "ERROR" || l.level === "CRITICAL") {
        serviceErrors[l.service] =
          (serviceErrors[l.service] || 0) + 1;
      }
    });

    const updates: Incident[] = [];

    // Check each service
    Object.keys(serviceErrors).forEach((service) => {
      const count = serviceErrors[service];

      if (count >= this.threshold) {
        if (!this.activeIncidents.has(service)) {
          const incident: Incident = {
            id: crypto.randomUUID(),
            service,
            level: "HIGH",
            startTime: now,
            errorCount: count,
            resolved: false,
          };

          this.activeIncidents.set(service, incident);
          updates.push(incident);
        }
      }
    });

    // Auto-resolve incidents
    this.activeIncidents.forEach((incident, service) => {
      const count = serviceErrors[service] || 0;

      if (count < this.threshold) {
        incident.resolved = true;
        this.activeIncidents.delete(service);
        updates.push(incident);
      }
    });

    return updates;
  }

  getActiveIncidents(): Incident[] {
    return Array.from(this.activeIncidents.values());
  }
}