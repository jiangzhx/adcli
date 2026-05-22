// Generated from oceanengine/ad_open_sdk_go api/api_star_demander_get_car_brand_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemanderGetCarBrandListV2Response } from "../models/index";


export interface StarDemanderGetCarBrandListV2ApiOpenApi2StarDemanderGetCarBrandListGetRequest {
  starId: number | string;
}

export class StarDemanderGetCarBrandListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderGetCarBrandListGet(request: StarDemanderGetCarBrandListV2ApiOpenApi2StarDemanderGetCarBrandListGetRequest): Promise<StarDemanderGetCarBrandListV2Response> {
    const response = await this.openApi2StarDemanderGetCarBrandListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemanderGetCarBrandListGetWithHttpInfo(request: StarDemanderGetCarBrandListV2ApiOpenApi2StarDemanderGetCarBrandListGetRequest): Promise<ApiResponse<StarDemanderGetCarBrandListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderGetCarBrandListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderGetCarBrandListV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander/get_car_brand_list/",
      queryParams: [
        { name: "star_id", value: request.starId }
      ]
    });
  }
}


