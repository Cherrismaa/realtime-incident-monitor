/* src/components/LogStream.tsx */ 

"use client";

import { DetectionEngine } from "@/lib/detectionEngine";

import { useEffect, useState } from "react";
import { LogEntry } from "@/types/log";

export default function LogStream({
  onIncidentUpdate,
}: {
  onIncidentUpdate: (incidents: any[]) => void;
}) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [engine] = useState(() => new DetectionEngine());

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/logs");

        if (!res.ok) return;

        const data: LogEntry[] = await res.json();

        data.forEach((log) => {
  const newIncidents = engine.process(log);

  if (newIncidents.length > 0) {
    console.warn("🚨 Incident Update:", newIncidents);
    onIncidentUpdate(engine.getActiveIncidents());
  }
});

setLogs((prev) => [...data, ...prev].slice(0, 50));

      } catch {
      // Ignore transient fetch failures (dev reload / hot refresh)
    }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getColor = (level: string) => {
    switch (level) {
      case "INFO":
        return "text-green-500";
      case "WARN":
        return "text-yellow-500";
      case "ERROR":
        return "text-red-500";
      case "CRITICAL":
        return "text-red-700 font-bold";
      default:
        return "";
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 h-[400px] overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <h3 className="text-lg font-semibold mb-4">Live Log Stream</h3>

      <div className="space-y-2 text-sm font-mono">
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3">
            <span className="text-gray-500 dark:text-gray-400">
              {new Date(log.timestamp).toLocaleTimeString()}
            </span>
            <span className={getColor(log.level)}>
              [{log.level}]
            </span>
            <span className="text-blue-500">
              {log.service}
            </span>
            <span>{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}