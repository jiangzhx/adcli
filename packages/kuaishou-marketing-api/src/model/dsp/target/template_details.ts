// Generated from github.com/bububa/kwai-marketing-api/model/dsp/target/template_details.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { Target } from "../unit/target";

export interface TemplateDetailsRequestInit {
  template_id?: KuaishouId[];
  advertiser_id?: KuaishouId;
  page?: number;
  page_size?: number;
}

export class TemplateDetailsRequest implements PostRequest, TemplateDetailsRequestInit {
  template_id?: KuaishouId[];
  advertiser_id?: KuaishouId;
  page?: number;
  page_size?: number;

  constructor(init: TemplateDetailsRequestInit = {}) {
    this.template_id = init.template_id;
    this.advertiser_id = init.advertiser_id;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "gw/dsp/target/template/details";
  }

  encode() {
    return jsonMarshal({
      template_id: this.template_id,
      advertiser_id: this.advertiser_id,
      page: this.page,
      page_size: this.page_size,
    });
  }
}

export interface TemplateDetailsResponse {
  details?: Template[];
  total_count?: number;
  current_page?: number;
  page_size?: number;
}

export interface Template {
  target?: Target;
  template_name?: string;
  create_time?: string;
  update_time?: string;
  template_id?: KuaishouId;
  unit_count?: number;
}
