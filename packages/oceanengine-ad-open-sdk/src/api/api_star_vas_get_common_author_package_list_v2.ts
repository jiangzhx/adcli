// Generated from oceanengine/ad_open_sdk_go api/api_star_vas_get_common_author_package_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarVasGetCommonAuthorPackageListV2Response } from "../models/index";


export interface StarVasGetCommonAuthorPackageListV2ApiOpenApi2StarVasGetCommonAuthorPackageListGetRequest {
  starId: number | string;
}

export class StarVasGetCommonAuthorPackageListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasGetCommonAuthorPackageListGet(request: StarVasGetCommonAuthorPackageListV2ApiOpenApi2StarVasGetCommonAuthorPackageListGetRequest): Promise<StarVasGetCommonAuthorPackageListV2Response> {
    const response = await this.openApi2StarVasGetCommonAuthorPackageListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasGetCommonAuthorPackageListGetWithHttpInfo(request: StarVasGetCommonAuthorPackageListV2ApiOpenApi2StarVasGetCommonAuthorPackageListGetRequest): Promise<ApiResponse<StarVasGetCommonAuthorPackageListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarVasGetCommonAuthorPackageListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarVasGetCommonAuthorPackageListV2Response>({
      method: "GET",
      path: "/open_api/2/star/vas/get_common_author_package_list/",
      queryParams: [
        { name: "star_id", value: request.starId }
      ]
    });
  }
}


