// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandOrderListV2Filtering, StarDemandOrderListV2Response } from "../models";


export class StarDemandOrderListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOrderListGet(starId: number, demandId: number, filtering: StarDemandOrderListV2Filtering, page: number, pageSize: number): Promise<StarDemandOrderListV2Response> {
    const response = await this.openApi2StarDemandOrderListGetWithHttpInfo(starId, demandId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2StarDemandOrderListGetWithHttpInfo(starId: number, demandId: number, filtering: StarDemandOrderListV2Filtering, page: number, pageSize: number): Promise<ApiResponse<StarDemandOrderListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandOrderListGet");
    }

    if (demandId == null) {
      throw new ApiException("Missing the required parameter 'demandId' when calling openApi2StarDemandOrderListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandOrderListV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/order/list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "demand_id", value: demandId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


