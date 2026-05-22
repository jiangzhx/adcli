// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_recurit_provider_get_task_order_list_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnRecuritProviderGetTaskOrderListGetV2Response } from "../models/index";


export interface StarMcnRecuritProviderGetTaskOrderListGetV2ApiOpenApi2StarMcnRecuritProviderGetTaskOrderListGetGetRequest {
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

  async openApi2StarMcnRecuritProviderGetTaskOrderListGetGet(request: StarMcnRecuritProviderGetTaskOrderListGetV2ApiOpenApi2StarMcnRecuritProviderGetTaskOrderListGetGetRequest): Promise<StarMcnRecuritProviderGetTaskOrderListGetV2Response> {
    const response = await this.openApi2StarMcnRecuritProviderGetTaskOrderListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnRecuritProviderGetTaskOrderListGetGetWithHttpInfo(request: StarMcnRecuritProviderGetTaskOrderListGetV2ApiOpenApi2StarMcnRecuritProviderGetTaskOrderListGetGetRequest): Promise<ApiResponse<StarMcnRecuritProviderGetTaskOrderListGetV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
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


