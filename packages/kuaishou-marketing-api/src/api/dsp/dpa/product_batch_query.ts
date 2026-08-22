// Generated from github.com/bububa/kwai-marketing-api/api/dsp/dpa/product_batch_query.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ProductBatchQueryRequest, ProductBatchQueryRequestInit, ProductBatchQueryResponse } from "../../../model/dsp/dpa";

export async function productBatchQuery(client: SDKClient, accessToken: string, req: ProductBatchQueryRequest | ProductBatchQueryRequestInit, signal?: AbortSignal): Promise<ProductBatchQueryResponse> {
  const request = req instanceof ProductBatchQueryRequest ? req : new ProductBatchQueryRequest(req);
  return client.post<ProductBatchQueryResponse>(accessToken, request, signal);
}

export { productBatchQuery as ProductBatchQuery };
