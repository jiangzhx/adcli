// Generated from github.com/bububa/kwai-marketing-api/api/report/agent_report.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AgentReportRequest, AgentReportRequestInit, AgentReportResponse } from "../../model/report";

export async function agentReport(client: SDKClient, accessToken: string, req: AgentReportRequest | AgentReportRequestInit, signal?: AbortSignal): Promise<AgentReportResponse> {
  const request = req instanceof AgentReportRequest ? req : new AgentReportRequest(req);
  return client.post<AgentReportResponse>(accessToken, request, signal);
}

export { agentReport as AgentReport };
