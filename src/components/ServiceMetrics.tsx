/* src/components/ServiceMetrics.tsx */

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface Incident {
  service: string;
  errorCount: number;
}

const ALL_SERVICES = ["auth", "database", "payments", "notifications"];

export default function ServiceMetrics({
  incidents,
}: {
  incidents: Incident[];
}) {
  // Always build full dataset so chart never disappears
  const data = ALL_SERVICES.map((service) => {
    const incident = incidents.find((i) => i.service === service);

    return {
      name: service,
      errors: incident ? incident.errorCount : 0,
    };
  });

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-black">
      <h3 className="text-lg font-semibold mb-4">
        Service Error Distribution
      </h3>

      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />

            <XAxis
              dataKey="name"
              interval={0}
              tick={{ fontSize: 12 }}
            />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Bar
              dataKey="errors"
              radius={[6, 6, 0, 0]}
              fill="#ef4444"
              isAnimationActive={true}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}