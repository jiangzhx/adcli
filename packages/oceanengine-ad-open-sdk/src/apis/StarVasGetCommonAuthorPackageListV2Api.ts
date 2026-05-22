// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarVasGetCommonAuthorPackageListV2Response } from "../models";


export interface OpenApi2StarVasGetCommonAuthorPackageListGetRequest {
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

  async openApi2StarVasGetCommonAuthorPackageListGet(request: OpenApi2StarVasGetCommonAuthorPackageListGetRequest): Promise<StarVasGetCommonAuthorPackageListV2Response> {
    const response = await this.openApi2StarVasGetCommonAuthorPackageListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasGetCommonAuthorPackageListGetWithHttpInfo(request: OpenApi2StarVasGetCommonAuthorPackageListGetRequest): Promise<ApiResponse<StarVasGetCommonAuthorPackageListV2Response>> {
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


