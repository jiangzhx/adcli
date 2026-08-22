// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/creative_template_list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId, PageInfo } from "../../types";
import { jsonMarshal } from "../../types";

export interface CreativeTemplateListRequestInit {
  page_info?: PageInfo;
  outer_id?: string;
  advertiser_id?: KuaishouId;
  library_id?: KuaishouId;
  product_id?: KuaishouId;
}

export class CreativeTemplateListRequest implements PostRequest, CreativeTemplateListRequestInit {
  page_info?: PageInfo;
  outer_id?: string;
  advertiser_id?: KuaishouId;
  library_id?: KuaishouId;
  product_id?: KuaishouId;

  constructor(init: CreativeTemplateListRequestInit = {}) {
    this.page_info = init.page_info;
    this.outer_id = init.outer_id;
    this.advertiser_id = init.advertiser_id;
    this.library_id = init.library_id;
    this.product_id = init.product_id;
  }

  path() {
    return "gw/dsp/v1/dpa/creative/template/list";
  }

  encode() {
    return jsonMarshal({
      page_info: this.page_info,
      outer_id: this.outer_id,
      advertiser_id: this.advertiser_id,
      library_id: this.library_id,
      product_id: this.product_id,
    });
  }
}

export interface CreativeTemplateListResponse {
  page_info?: PageInfo;
  template_list?: CreativeTemplate[];
}

export interface CreativeTemplate {
  image?: string;
  demo_url?: string;
  template_id?: KuaishouId;
  package_id?: KuaishouId;
  template_type?: number;
  can_select?: boolean;
}
