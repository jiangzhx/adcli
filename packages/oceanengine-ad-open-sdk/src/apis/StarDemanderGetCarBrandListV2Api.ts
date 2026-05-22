// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemanderGetCarBrandListV2Response } from "../models";


export class StarDemanderGetCarBrandListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderGetCarBrandListGet(starId: number): Promise<StarDemanderGetCarBrandListV2Response> {
    const response = await this.openApi2StarDemanderGetCarBrandListGetWithHttpInfo(starId);
    return response.data;
  }

  async openApi2StarDemanderGetCarBrandListGetWithHttpInfo(starId: number): Promise<ApiResponse<StarDemanderGetCarBrandListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderGetCarBrandListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderGetCarBrandListV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander/get_car_brand_list/",
      queryParams: [
        { name: "star_id", value: starId }
      ]
    });
  }
}


