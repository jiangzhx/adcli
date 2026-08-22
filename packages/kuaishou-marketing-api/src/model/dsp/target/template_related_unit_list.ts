// Generated from github.com/bububa/kwai-marketing-api/model/dsp/target/template_related_unit_list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { TemplateSyncUnit } from "./template_sync_history";

export interface TemplateRelatedUnitListRequestInit {
  current_page?: number;
  page_size?: number;
  task_id?: KuaishouId;
  template_id?: KuaishouId;
}

export class TemplateRelatedUnitListRequest implements PostRequest, TemplateRelatedUnitListRequestInit {
  current_page?: number;
  page_size?: number;
  task_id?: KuaishouId;
  template_id?: KuaishouId;

  constructor(init: TemplateRelatedUnitListRequestInit = {}) {
    this.current_page = init.current_page;
    this.page_size = init.page_size;
    this.task_id = init.task_id;
    this.template_id = init.template_id;
  }

  path() {
    return "gw/dsp/target/template/related_unit_list";
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

export interface TemplateRelatedUnitListResponse {
  details?: TemplateSyncUnit[];
  current_page?: number;
  page_size?: number;
  total_count?: number;
}
