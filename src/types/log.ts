/* src\types\log.ts */

export type LogLevel = "INFO" | "WARN" | "ERROR" | "CRITICAL";

export interface LogEntry {
  id: string;
  timestamp: number;
  service: string;
  level: LogLevel;
  message: string;
}