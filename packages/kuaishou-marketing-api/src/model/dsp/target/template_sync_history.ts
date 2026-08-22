// Generated from github.com/bububa/kwai-marketing-api/model/dsp/target/template_sync_history.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface TemplateSyncHistoryRequestInit {
  current_page?: number;
  page_size?: number;
  task_id?: KuaishouId;
  template_id?: KuaishouId;
}

export class TemplateSyncHistoryRequest implements PostRequest, TemplateSyncHistoryRequestInit {
  current_page?: number;
  page_size?: number;
  task_id?: KuaishouId;
  template_id?: KuaishouId;

  constructor(init: TemplateSyncHistoryRequestInit = {}) {
    this.current_page = init.current_page;
    this.page_size = init.page_size;
    this.task_id = init.task_id;
    this.template_id = init.template_id;
  }

  path() {
    return "gw/dsp/target/template/sync_history";
  }

  encode() {
    return jsonMarshal({
      current_page: this.current_page,
      page_size: this.page_size,
      task_id: this.task_id,
      template_id: this.template_id,
    });
  }
}

export interface TemplateSyncHistoryResponse {
  details?: TemplateSyncUnit[];
  current_page?: number;
  page_size?: number;
  total_count?: number;
}

export interface TemplateSyncUnit {
  failed_msg?: string;
  unit_view_status_reason?: string;
  campaign_name?: string;
  unit_name?: string;
  campaign_id?: KuaishouId;
  template_id?: KuaishouId;
  unit_id?: KuaishouId;
  auto_adjust?: number;
  auto_build?: number;
  auto_manage?: number;
  unit_view_status?: number;
}
