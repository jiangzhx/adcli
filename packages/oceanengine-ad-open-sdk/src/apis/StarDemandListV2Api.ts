// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandListV2Filtering, StarDemandListV2Response } from "../models";


export interface OpenApi2StarDemandListGetRequest {
  starId: number;
  filtering?: StarDemandListV2Filtering;
  page?: number;
  pageSize?: number;
}

export class StarDemandListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandListGet(request: OpenApi2StarDemandListGetRequest): Promise<StarDemandListV2Response> {
    const response = await this.openApi2StarDemandListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandListGetWithHttpInfo(request: OpenApi2StarDemandListGetRequest): Promise<ApiResponse<StarDemandListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandListV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


