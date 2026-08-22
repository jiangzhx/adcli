// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/category_list.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface CategoryListRequestInit {
  advertiser_id?: KuaishouId;
  library_id?: KuaishouId;
}

export class CategoryListRequest implements PostRequest, CategoryListRequestInit {
  advertiser_id?: KuaishouId;
  library_id?: KuaishouId;

  constructor(init: CategoryListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.library_id = init.library_id;
  }

  path() {
    return "gw/dsp/v1/dpa/category/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      library_id: this.library_id,
    });
  }
}

export interface CategoryListResponse {
  details?: Category[];
}

export interface Category {
  label?: string;
  children?: Category[];
  value?: number;
}
