// Generated from github.com/bububa/kwai-marketing-api/model/target/template_delete_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface TemplateDeleteRequestInit {
  advertiser_id?: KuaishouId;
  template_id?: string;
}

export class TemplateDeleteRequest implements PostRequest, TemplateDeleteRequestInit {
  advertiser_id?: KuaishouId;
  template_id?: string;

  constructor(init: TemplateDeleteRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.template_id = init.template_id;
  }

  path() {
    return "v1/target/template/delete";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      template_id: this.template_id,
    });
  }
}
