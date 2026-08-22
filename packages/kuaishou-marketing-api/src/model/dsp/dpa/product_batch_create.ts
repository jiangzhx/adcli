// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/product_batch_create.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { ProductInfo } from "./product";

export interface ProductBatchCreateRequestInit {
  dpa_product_edit_params?: ProductInfo[];
  advertiser_id?: KuaishouId;
}

export class ProductBatchCreateRequest implements PostRequest, ProductBatchCreateRequestInit {
  dpa_product_edit_params?: ProductInfo[];
  advertiser_id?: KuaishouId;

  constructor(init: ProductBatchCreateRequestInit = {}) {
    this.dpa_product_edit_params = init.dpa_product_edit_params;
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/dsp/v1/dpa/product/batch/create";
  }

  encode() {
    return jsonMarshal({
      dpa_product_edit_params: this.dpa_product_edit_params,
      advertiser_id: this.advertiser_id,
    });
  }
}

export interface ProductBatchUpdateResponse {
  product_edit_responses?: ProductUpdateResult[];
}

export interface ProductUpdateResult {
  outer_id?: string;
  error_msg?: string;
  library_id?: KuaishouId;
  product_id?: KuaishouId;
}
