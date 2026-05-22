// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnRecuritProviderGetTaskOrderListGetV2Response } from "../models";


export interface OpenApi2StarMcnRecuritProviderGetTaskOrderListGetGetRequest {
  starId: number | string;
  providerOrderTaskStatus?: number;
  page?: number;
  pageSize?: number;
}

export class StarMcnRecuritProviderGetTaskOrderListGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnRecuritProviderGetTaskOrderListGetGet(request: OpenApi2StarMcnRecuritProviderGetTaskOrderListGetGetRequest): Promise<StarMcnRecuritProviderGetTaskOrderListGetV2Response> {
    const response = await this.openApi2StarMcnRecuritProviderGetTaskOrderListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnRecuritProviderGetTaskOrderListGetGetWithHttpInfo(request: OpenApi2StarMcnRecuritProviderGetTaskOrderListGetGetRequest): Promise<ApiResponse<StarMcnRecuritProviderGetTaskOrderListGetV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnRecuritProviderGetTaskOrderListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnRecuritProviderGetTaskOrderListGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/recurit_provider_get_task_order_list/get/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "provider_order_task_status", value: request.providerOrderTaskStatus },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


