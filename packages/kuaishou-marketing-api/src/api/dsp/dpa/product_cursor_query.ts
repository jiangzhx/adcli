// Generated from github.com/bububa/kwai-marketing-api/api/dsp/dpa/product_cursor_query.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ProductCursorQueryRequest, ProductCursorQueryRequestInit, ProductCursorQueryResponse } from "../../../model/dsp/dpa";

export async function productCursorQuery(client: SDKClient, accessToken: string, req: ProductCursorQueryRequest | ProductCursorQueryRequestInit, signal?: AbortSignal): Promise<ProductCursorQueryResponse> {
  const request = req instanceof ProductCursorQueryRequest ? req : new ProductCursorQueryRequest(req);
  return client.post<ProductCursorQueryResponse>(accessToken, request, signal);
}

export { productCursorQuery as ProductCursorQuery };
