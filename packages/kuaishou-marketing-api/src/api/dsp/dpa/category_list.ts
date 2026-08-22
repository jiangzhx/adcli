// Generated from github.com/bububa/kwai-marketing-api/api/dsp/dpa/category_list.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { CategoryListRequest, CategoryListRequestInit, CategoryListResponse } from "../../../model/dsp/dpa";

export async function categoryList(client: SDKClient, accessToken: string, req: CategoryListRequest | CategoryListRequestInit, signal?: AbortSignal): Promise<CategoryListResponse> {
  const request = req instanceof CategoryListRequest ? req : new CategoryListRequest(req);
  return client.post<CategoryListResponse>(accessToken, request, signal);
}

export { categoryList as CategoryList };
