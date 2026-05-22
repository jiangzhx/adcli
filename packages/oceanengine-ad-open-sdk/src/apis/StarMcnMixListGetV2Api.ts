// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnMixListGetV2Response } from "../models";


export class StarMcnMixListGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnMixListGetGet(starId: number, demandId: number, page: number, pageSize: number, developerId: number): Promise<StarMcnMixListGetV2Response> {
    const response = await this.openApi2StarMcnMixListGetGetWithHttpInfo(starId, demandId, page, pageSize, developerId);
    return response.data;
  }

  async openApi2StarMcnMixListGetGetWithHttpInfo(starId: number, demandId: number, page: number, pageSize: number, developerId: number): Promise<ApiResponse<StarMcnMixListGetV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnMixListGetGet");
    }

    if (demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarMcnMixListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnMixListGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/mix/list/get/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "demand_id", value: demandId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "developer_id", value: developerId }
      ]
    });
  }
}


