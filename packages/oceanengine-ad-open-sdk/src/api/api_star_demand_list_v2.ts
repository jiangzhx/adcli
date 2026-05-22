// Generated from oceanengine/ad_open_sdk_go api/api_star_demand_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemandListV2Filtering, StarDemandListV2Response } from "../models/index";


export interface StarDemandListV2ApiOpenApi2StarDemandListGetRequest {
  starId: number | string;
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

  async openApi2StarDemandListGet(request: StarDemandListV2ApiOpenApi2StarDemandListGetRequest): Promise<StarDemandListV2Response> {
    const response = await this.openApi2StarDemandListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandListGetWithHttpInfo(request: StarDemandListV2ApiOpenApi2StarDemandListGetRequest): Promise<ApiResponse<StarDemandListV2Response>> {
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


