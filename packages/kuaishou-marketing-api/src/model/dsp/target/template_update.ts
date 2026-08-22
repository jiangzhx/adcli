// Generated from github.com/bububa/kwai-marketing-api/model/dsp/target/template_update.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { Target } from "../unit/target";

export interface TemplateUpdateRequestInit {
  target?: Target;
  template_name?: string;
  template_id?: KuaishouId;
  advertiser_id?: KuaishouId;
}

export class TemplateUpdateRequest implements PostRequest, TemplateUpdateRequestInit {
  target?: Target;
  template_name?: string;
  template_id?: KuaishouId;
  advertiser_id?: KuaishouId;

  constructor(init: TemplateUpdateRequestInit = {}) {
    this.target = init.target;
    this.template_name = init.template_name;
    this.template_id = init.template_id;
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/dsp/target/template/update";
  }

  encode() {
    return jsonMarshal({
      target: this.target,
      template_name: this.template_name,
      template_id: this.template_id,
      advertiser_id: this.advertiser_id,
    });
  }
}

export interface TemplateUpdateResponse {
  template_id?: KuaishouId;
}
