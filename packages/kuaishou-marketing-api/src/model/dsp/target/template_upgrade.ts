// Generated from github.com/bububa/kwai-marketing-api/model/dsp/target/template_upgrade.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface TemplateUpgradeRequestInit {
  template_id?: KuaishouId;
}

export class TemplateUpgradeRequest implements PostRequest, TemplateUpgradeRequestInit {
  template_id?: KuaishouId;

  constructor(init: TemplateUpgradeRequestInit = {}) {
    this.template_id = init.template_id;
  }

  path() {
    return "gw/dsp/target/template/upgrade";
  }

  encode() {
    return jsonMarshal({
      template_id: this.template_id,
    });
  }
}

export interface TemplateUpgradeResponse {
  template_count?: number;
}
