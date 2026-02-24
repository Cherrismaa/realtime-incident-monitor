/* src/components/HealthIndicator.tsx */ 

"use client";

export default function HealthIndicator({
  activeIncidentCount,
}: {
  activeIncidentCount: number;
}) {
  let status = "Healthy";
  let color = "text-green-600";
  let bg = "bg-green-100 dark:bg-green-900";

  if (activeIncidentCount > 0 && activeIncidentCount <= 2) {
    status = "Degraded";
    color = "text-yellow-600";
    bg = "bg-yellow-100 dark:bg-yellow-900";
  }

  if (activeIncidentCount > 2) {
    status = "Critical";
    color = "text-red-600";
    bg = "bg-red-100 dark:bg-red-900";
  }

  return (
    <div className={`rounded-lg p-4 ${bg}`}>
      <div className={`text-lg font-semibold ${color}`}>
        System Status: {status}
      </div>
      <div className="text-sm mt-1">
        Active Incidents: {activeIncidentCount}
      </div>
    </div>
  );
}