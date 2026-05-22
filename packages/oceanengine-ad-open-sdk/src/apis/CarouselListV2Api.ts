// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CarouselListV2Filtering, CarouselListV2Response } from "../models";


export class CarouselListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CarouselListGet(advertiserId: number, filtering: CarouselListV2Filtering, pageSize: number, page: number): Promise<CarouselListV2Response> {
    const response = await this.openApi2CarouselListGetWithHttpInfo(advertiserId, filtering, pageSize, page);
    return response.data;
  }

  async openApi2CarouselListGetWithHttpInfo(advertiserId: number, filtering: CarouselListV2Filtering, pageSize: number, page: number): Promise<ApiResponse<CarouselListV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2CarouselListGet");
    }
    return this.apiClient.requestWithHttpInfo<CarouselListV2Response>({
      method: "GET",
      path: "/open_api/2/carousel/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page_size", value: pageSize },
        { name: "page", value: page }
      ]
    });
  }
}


