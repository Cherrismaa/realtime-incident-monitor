/* src/lib/logGenerator.ts */

import { v4 as uuidv4 } from "uuid";
import { LogEntry, LogLevel } from "@/types/log";

const services = ["auth", "payments", "database", "notifications"];

const messages: Record<LogLevel, string[]> = {
  INFO: ["Request processed successfully", "Heartbeat received"],
  WARN: ["High memory usage detected", "Slow response time"],
  ERROR: ["Database timeout", "Unhandled exception occurred"],
  CRITICAL: ["Service crashed", "Data corruption detected"],
};

function randomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomLevel(): LogLevel {
  const rand = Math.random();

  if (rand < 0.6) return "INFO";
  if (rand < 0.8) return "WARN";
  if (rand < 0.95) return "ERROR";
  return "CRITICAL";
}

export function generateLogs(count: number): LogEntry[] {
  const logs: LogEntry[] = [];

  for (let i = 0; i < count; i++) {
    const level = randomLevel();

    logs.push({
      id: uuidv4(),
      timestamp: Date.now(),
      service: randomFromArray(services),
      level,
      message: randomFromArray(messages[level]),
    });
  }

  return logs;
}