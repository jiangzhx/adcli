// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnRecuritProviderGetTaskOrderListGetV2Response } from "../models";


export class StarMcnRecuritProviderGetTaskOrderListGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnRecuritProviderGetTaskOrderListGetGet(starId: number, providerOrderTaskStatus: number, page: number, pageSize: number): Promise<StarMcnRecuritProviderGetTaskOrderListGetV2Response> {
    const response = await this.openApi2StarMcnRecuritProviderGetTaskOrderListGetGetWithHttpInfo(starId, providerOrderTaskStatus, page, pageSize);
    return response.data;
  }

  async openApi2StarMcnRecuritProviderGetTaskOrderListGetGetWithHttpInfo(starId: number, providerOrderTaskStatus: number, page: number, pageSize: number): Promise<ApiResponse<StarMcnRecuritProviderGetTaskOrderListGetV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnRecuritProviderGetTaskOrderListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnRecuritProviderGetTaskOrderListGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/recurit_provider_get_task_order_list/get/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "provider_order_task_status", value: providerOrderTaskStatus },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


