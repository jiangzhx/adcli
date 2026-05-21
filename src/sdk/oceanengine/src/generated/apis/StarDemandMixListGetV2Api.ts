// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemandMixListGetV2Response } from "../models";


export class StarDemandMixListGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandMixListGetGet(starId: number, demandId: number, page: number, pageSize: number, developerId: number): Promise<StarDemandMixListGetV2Response> {
    const response = await this.openApi2StarDemandMixListGetGetWithHttpInfo(starId, demandId, page, pageSize, developerId);
    return response.data;
  }

  async openApi2StarDemandMixListGetGetWithHttpInfo(starId: number, demandId: number, page: number, pageSize: number, developerId: number): Promise<ApiResponse<StarDemandMixListGetV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandMixListGetGet");
    }

    if (demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarDemandMixListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandMixListGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/mix/list/get/",
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


