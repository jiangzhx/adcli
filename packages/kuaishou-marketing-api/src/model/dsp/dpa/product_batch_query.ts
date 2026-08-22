// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/product_batch_query.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId, PageInfo } from "../../types";
import { jsonMarshal } from "../../types";
import type { ProductInfo } from "./product";

export interface ProductBatchQueryRequestInit {
  dpa_product_query_param?: AdDpaProductBatchQueryParamSneak;
  page_info?: PageInfo;
  advertiser_id?: KuaishouId;
}

export class ProductBatchQueryRequest implements PostRequest, ProductBatchQueryRequestInit {
  dpa_product_query_param?: AdDpaProductBatchQueryParamSneak;
  page_info?: PageInfo;
  advertiser_id?: KuaishouId;

  constructor(init: ProductBatchQueryRequestInit = {}) {
    this.dpa_product_query_param = init.dpa_product_query_param;
    this.page_info = init.page_info;
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/dsp/v1/dpa/product/batch/query";
  }

  encode() {
    return jsonMarshal({
      dpa_product_query_param: this.dpa_product_query_param,
      page_info: this.page_info,
      advertiser_id: this.advertiser_id,
    });
  }
}

export interface AdDpaProductBatchQueryParamSneak {
  name?: string;
  outer_ids?: string[];
  library_id?: KuaishouId;
  status?: number;
  check_status?: number;
}

export interface ProductBatchQueryResponse {
  page_info?: PageInfo;
  product_info?: ProductInfo[];
}
