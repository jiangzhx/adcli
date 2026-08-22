// Generated from github.com/bububa/kwai-marketing-api/model/target_v2/template_details_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface TemplateDetailsRequestInit {
  advertiser_id?: KuaishouId;
  template_id?: KuaishouId[];
  page?: number;
  page_size?: number;
}

export class TemplateDetailsRequest implements PostRequest, TemplateDetailsRequestInit {
  advertiser_id?: KuaishouId;
  template_id?: KuaishouId[];
  page?: number;
  page_size?: number;

  constructor(init: TemplateDetailsRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.template_id = init.template_id;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "gw/dsp/target/template/details";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      template_id: this.template_id,
      page: this.page,
      page_size: this.page_size,
    });
  }
}
