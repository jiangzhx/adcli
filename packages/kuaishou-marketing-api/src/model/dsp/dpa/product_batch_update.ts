// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/product_batch_update.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { ProductInfo } from "./product";

export interface ProductBatchUpdateRequestInit {
  dpa_product_edit_params?: ProductInfo[];
  advertiser_id?: KuaishouId;
}

export class ProductBatchUpdateRequest implements PostRequest, ProductBatchUpdateRequestInit {
  dpa_product_edit_params?: ProductInfo[];
  advertiser_id?: KuaishouId;

  constructor(init: ProductBatchUpdateRequestInit = {}) {
    this.dpa_product_edit_params = init.dpa_product_edit_params;
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/dsp/v1/dpa/product/batch/update";
  }

  encode() {
    return jsonMarshal({
      dpa_product_edit_params: this.dpa_product_edit_params,
      advertiser_id: this.advertiser_id,
    });
  }
}
