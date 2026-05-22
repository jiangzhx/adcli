// Generated from oceanengine/ad_open_sdk_go api/api_local_promotion_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalPromotionListV30Filtering, LocalPromotionListV30Response } from "../models/index";


export interface LocalPromotionListV30ApiOpenApiV30LocalPromotionListGetRequest {
  localAccountId: number | string;
  filtering?: LocalPromotionListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalPromotionListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionListGet(request: LocalPromotionListV30ApiOpenApiV30LocalPromotionListGetRequest): Promise<LocalPromotionListV30Response> {
    const response = await this.openApiV30LocalPromotionListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPromotionListGetWithHttpInfo(request: LocalPromotionListV30ApiOpenApiV30LocalPromotionListGetRequest): Promise<ApiResponse<LocalPromotionListV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalPromotionListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalPromotionListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/promotion/list/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


