// Generated from github.com/bububa/kwai-marketing-api/model/target/template_update_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { BehaviorInterest } from "./behavior_interest";
import type { Target } from "./target";

export interface TemplateUpdateRequestInit {
  advertiser_id?: KuaishouId;
  template_id?: KuaishouId;
  template_name?: string;
  target?: Target;
  behavior_interest?: BehaviorInterest;
}

export class TemplateUpdateRequest implements PostRequest, TemplateUpdateRequestInit {
  advertiser_id?: KuaishouId;
  template_id?: KuaishouId;
  template_name?: string;
  target?: Target;
  behavior_interest?: BehaviorInterest;

  constructor(init: TemplateUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.template_id = init.template_id;
    this.template_name = init.template_name;
    this.target = init.target;
    this.behavior_interest = init.behavior_interest;
  }

  path() {
    return "v1/target/template/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      template_id: this.template_id,
      template_name: this.template_name,
      target: this.target,
      behavior_interest: this.behavior_interest,
    });
  }
}
