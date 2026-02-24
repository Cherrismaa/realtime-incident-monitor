/* src\app\api\logs\route.ts */

import { NextResponse } from "next/server";
import { generateLogs } from "@/lib/logGenerator";

export async function GET() {
  const logs = generateLogs(5);
  return NextResponse.json(logs);
}