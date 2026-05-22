// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandMixListGetV2Response } from "../models";


export interface OpenApi2StarDemandMixListGetGetRequest {
  starId: number | string;
  demandId: number | string;
  page?: number;
  pageSize?: number;
  developerId?: number | string;
}

export class StarDemandMixListGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandMixListGetGet(request: OpenApi2StarDemandMixListGetGetRequest): Promise<StarDemandMixListGetV2Response> {
    const response = await this.openApi2StarDemandMixListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandMixListGetGetWithHttpInfo(request: OpenApi2StarDemandMixListGetGetRequest): Promise<ApiResponse<StarDemandMixListGetV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandMixListGetGet");
    }

    if (request.demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarDemandMixListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandMixListGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/mix/list/get/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "demand_id", value: request.demandId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "developer_id", value: request.developerId }
      ]
    });
  }
}


