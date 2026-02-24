//src/app/dashboard/page.tsx

"use client";

import ServiceMetrics from "@/components/ServiceMetrics";
import HealthIndicator from "@/components/HealthIndicator";
import { useState } from "react";
import LogStream from "@/components/LogStream";
import IncidentPanel from "@/components/IncidentPanel";

export default function DashboardPage() {
  const [activeIncidents, setActiveIncidents] = useState<any[]>([]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        System Overview
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LogStream onIncidentUpdate={setActiveIncidents} />
        </div>

      <div className="lg:col-span-1 space-y-6">
      <HealthIndicator activeIncidentCount={activeIncidents.length} />
      <ServiceMetrics incidents={activeIncidents} />
      <IncidentPanel incidents={activeIncidents} />
    </div>
      </div>
    </div>
  );
}