// Generated from github.com/bububa/kwai-marketing-api/model/page/list.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Page } from "./page";

export interface ListRequestInit {
  advertiser_id?: KuaishouId;
  page_component_type?: number[];
  page_name?: string;
  view_comps?: number[];
  component_ref_ids?: KuaishouId[];
  fiction_ids?: string[];
  is_page_group?: boolean;
  page?: number;
  page_size?: number;
  select?: string;
}

export class ListRequest implements PostRequest, ListRequestInit {
  advertiser_id?: KuaishouId;
  page_component_type?: number[];
  page_name?: string;
  view_comps?: number[];
  component_ref_ids?: KuaishouId[];
  fiction_ids?: string[];
  is_page_group?: boolean;
  page?: number;
  page_size?: number;
  select?: string;

  constructor(init: ListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.page_component_type = init.page_component_type;
    this.page_name = init.page_name;
    this.view_comps = init.view_comps;
    this.component_ref_ids = init.component_ref_ids;
    this.fiction_ids = init.fiction_ids;
    this.is_page_group = init.is_page_group;
    this.page = init.page;
    this.page_size = init.page_size;
    this.select = init.select;
  }

  path() {
    return "v2/lp/page/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      page_component_type: this.page_component_type,
      page_name: this.page_name,
      view_comps: this.view_comps,
      component_ref_ids: this.component_ref_ids,
      fiction_ids: this.fiction_ids,
      is_page_group: this.is_page_group,
      page: this.page,
      page_size: this.page_size,
      select: this.select,
    });
  }
}

export interface ListResponse {
  total_count?: number;
  details?: Page[];
}
