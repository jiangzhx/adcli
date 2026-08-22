// Generated from github.com/bububa/kwai-marketing-api/model/dsp/dpa/product_cursor_query.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { ProductInfo } from "./product";

export interface ProductCursorQueryRequestInit {
  cursor?: string;
  advertiser_id?: KuaishouId;
  library_id?: KuaishouId;
  limit?: number;
}

export class ProductCursorQueryRequest implements PostRequest, ProductCursorQueryRequestInit {
  cursor?: string;
  advertiser_id?: KuaishouId;
  library_id?: KuaishouId;
  limit?: number;

  constructor(init: ProductCursorQueryRequestInit = {}) {
    this.cursor = init.cursor;
    this.advertiser_id = init.advertiser_id;
    this.library_id = init.library_id;
    this.limit = init.limit;
  }

  path() {
    return "gw/dsp/dpa/product/cursor_query";
  }

  encode() {
    return jsonMarshal({
      cursor: this.cursor,
      advertiser_id: this.advertiser_id,
      library_id: this.library_id,
      limit: this.limit,
    });
  }
}

export interface ProductCursorQueryResponse {
  cursor?: string;
  product_info?: ProductInfo[];
}
