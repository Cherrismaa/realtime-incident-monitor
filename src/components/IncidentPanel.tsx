/* src/components/IncidentPanel.tsx */ 

"use client";

interface Incident {
  id: string;
  service: string;
  level: string;
  startTime: number;
  errorCount: number;
}

export default function IncidentPanel({
  incidents,
}: {
  incidents: Incident[];
}) {
  return (
    <div className="rounded-lg border border-red-300 dark:border-red-700 p-4 bg-red-50 dark:bg-red-950 h-[400px] overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4 text-red-600 dark:text-red-400">
        Active Incidents
      </h3>

      {incidents.length === 0 && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No active incidents.
        </p>
      )}

      <div className="space-y-3">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="p-3 rounded-md bg-white dark:bg-black border border-red-200 dark:border-red-800"
          >
            <div className="text-sm font-bold text-red-600 dark:text-red-400">
              {incident.service.toUpperCase()} Service
            </div>

            <div className="text-xs mt-1">
              Errors: {incident.errorCount}
            </div>

            <div className="text-xs text-gray-500 mt-1">
              Started: {new Date(incident.startTime).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}