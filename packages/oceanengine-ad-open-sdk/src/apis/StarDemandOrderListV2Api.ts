// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandOrderListV2Filtering, StarDemandOrderListV2Response } from "../models";


export interface OpenApi2StarDemandOrderListGetRequest {
  starId: number;
  demandId: number;
  filtering?: StarDemandOrderListV2Filtering;
  page?: number;
  pageSize?: number;
}

export class StarDemandOrderListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOrderListGet(request: OpenApi2StarDemandOrderListGetRequest): Promise<StarDemandOrderListV2Response> {
    const response = await this.openApi2StarDemandOrderListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOrderListGetWithHttpInfo(request: OpenApi2StarDemandOrderListGetRequest): Promise<ApiResponse<StarDemandOrderListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandOrderListGet");
    }

    if (request.demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarDemandOrderListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandOrderListV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/order/list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "demand_id", value: request.demandId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


