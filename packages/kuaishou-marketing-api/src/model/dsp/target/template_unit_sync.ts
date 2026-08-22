// Generated from github.com/bububa/kwai-marketing-api/model/dsp/target/template_unit_sync.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface TemplateUnitSyncRequestInit {
  sync_unit_ids?: KuaishouId[];
  sync_unit_type?: number;
  template_id?: KuaishouId;
}

export class TemplateUnitSyncRequest implements PostRequest, TemplateUnitSyncRequestInit {
  sync_unit_ids?: KuaishouId[];
  sync_unit_type?: number;
  template_id?: KuaishouId;

  constructor(init: TemplateUnitSyncRequestInit = {}) {
    this.sync_unit_ids = init.sync_unit_ids;
    this.sync_unit_type = init.sync_unit_type;
    this.template_id = init.template_id;
  }

  path() {
    return "gw/dsp/target/template/unit_sync";
  }

  encode() {
    return jsonMarshal({
      sync_unit_ids: this.sync_unit_ids,
      sync_unit_type: this.sync_unit_type,
      template_id: this.template_id,
    });
  }
}

export interface TemplateUnitSyncResponse {
  async_task?: boolean;
  has_task?: boolean;
  task_id?: KuaishouId;
  template_id?: KuaishouId;
  unit_error_count?: number;
  unit_success_count?: number;
}
