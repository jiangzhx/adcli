// Generated from github.com/bububa/kwai-marketing-api/api/dsp/dpa/product_batch_create.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ProductBatchCreateRequest, ProductBatchCreateRequestInit, ProductUpdateResult } from "../../../model/dsp/dpa";

export async function productBatchCreate(client: SDKClient, accessToken: string, req: ProductBatchCreateRequest | ProductBatchCreateRequestInit, signal?: AbortSignal): Promise<ProductUpdateResult[]> {
  const request = req instanceof ProductBatchCreateRequest ? req : new ProductBatchCreateRequest(req);
  const resp = await client.post<{ product_edit_responses?: ProductUpdateResult[] }>(accessToken, request, signal);
  return resp.product_edit_responses ?? [];
}

export { productBatchCreate as ProductBatchCreate };
