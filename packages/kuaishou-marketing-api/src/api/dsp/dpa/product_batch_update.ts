// Generated from github.com/bububa/kwai-marketing-api/api/dsp/dpa/product_batch_update.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { ProductBatchUpdateRequest, ProductBatchUpdateRequestInit, ProductUpdateResult } from "../../../model/dsp/dpa";

export async function productBatchUpdate(client: SDKClient, accessToken: string, req: ProductBatchUpdateRequest | ProductBatchUpdateRequestInit, signal?: AbortSignal): Promise<ProductUpdateResult[]> {
  const request = req instanceof ProductBatchUpdateRequest ? req : new ProductBatchUpdateRequest(req);
  const resp = await client.post<{ product_edit_responses?: ProductUpdateResult[] }>(accessToken, request, signal);
  return resp.product_edit_responses ?? [];
}

export { productBatchUpdate as ProductBatchUpdate };
