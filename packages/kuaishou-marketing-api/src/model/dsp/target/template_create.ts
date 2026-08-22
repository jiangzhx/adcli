// Generated from github.com/bububa/kwai-marketing-api/model/dsp/target/template_create.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { Target } from "../unit/target";

export interface TemplateCreateRequestInit {
  target?: Target;
  template_name?: string;
  advertiser_id?: KuaishouId;
}

export class TemplateCreateRequest implements PostRequest, TemplateCreateRequestInit {
  target?: Target;
  template_name?: string;
  advertiser_id?: KuaishouId;

  constructor(init: TemplateCreateRequestInit = {}) {
    this.target = init.target;
    this.template_name = init.template_name;
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/dsp/target/template/create";
  }

  encode() {
    return jsonMarshal({
      target: this.target,
      template_name: this.template_name,
      advertiser_id: this.advertiser_id,
    });
  }
}

export interface TemplateCreateResponse {
  template_id?: KuaishouId;
}
