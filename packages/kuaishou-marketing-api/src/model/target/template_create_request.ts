// Generated from github.com/bububa/kwai-marketing-api/model/target/template_create_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { BehaviorInterest } from "./behavior_interest";
import type { Target } from "./target";

export interface TemplateCreateRequestInit {
  advertiser_id?: KuaishouId;
  template_name?: string;
  auto_target?: boolean;
  target?: Target;
  behavior_interest?: BehaviorInterest;
}

export class TemplateCreateRequest implements PostRequest, TemplateCreateRequestInit {
  advertiser_id?: KuaishouId;
  template_name?: string;
  auto_target?: boolean;
  target?: Target;
  behavior_interest?: BehaviorInterest;

  constructor(init: TemplateCreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.template_name = init.template_name;
    this.auto_target = init.auto_target;
    this.target = init.target;
    this.behavior_interest = init.behavior_interest;
  }

  path() {
    return "v1/target/template/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      template_name: this.template_name,
      auto_target: this.auto_target,
      target: this.target,
      behavior_interest: this.behavior_interest,
    });
  }
}
