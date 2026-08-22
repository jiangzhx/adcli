// Generated from github.com/bububa/kwai-marketing-api/model/report/agent_report_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AgentReportRequestInit {
  agent_id?: KuaishouId;
  start_date?: string;
  end_date?: string;
  page?: number;
  page_size?: number;
}

export class AgentReportRequest implements PostRequest, AgentReportRequestInit {
  agent_id?: KuaishouId;
  start_date?: string;
  end_date?: string;
  page?: number;
  page_size?: number;

  constructor(init: AgentReportRequestInit = {}) {
    this.agent_id = init.agent_id;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v1/agent/report";
  }

  encode() {
    return jsonMarshal({
      agent_id: this.agent_id,
      start_date: this.start_date,
      end_date: this.end_date,
      page: this.page,
      page_size: this.page_size,
    });
  }
}
