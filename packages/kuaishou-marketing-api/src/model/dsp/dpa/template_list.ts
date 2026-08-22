// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/template_list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId, PageInfo } from "../../types";
import { jsonMarshal } from "../../types";
import type { Template } from "./template";

export interface TemplateListRequestInit {
  page_info?: PageInfo;
  template_types?: number[];
  advertiser_id?: KuaishouId;
}

export class TemplateListRequest implements PostRequest, TemplateListRequestInit {
  page_info?: PageInfo;
  template_types?: number[];
  advertiser_id?: KuaishouId;

  constructor(init: TemplateListRequestInit = {}) {
    this.page_info = init.page_info;
    this.template_types = init.template_types;
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/dsp/dpa/template/list";
  }

  encode() {
    return jsonMarshal({
      page_info: this.page_info,
      template_types: this.template_types,
      advertiser_id: this.advertiser_id,
    });
  }
}

export interface TemplateListResponse {
  page_info?: PageInfo;
  template_list?: Template[];
}
