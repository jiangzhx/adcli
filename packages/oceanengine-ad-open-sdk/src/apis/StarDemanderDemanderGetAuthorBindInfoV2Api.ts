// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemanderDemanderGetAuthorBindInfoV2Response } from "../models";


export interface OpenApi2StarDemanderDemanderGetAuthorBindInfoGetRequest {
  starId: number | string;
  bizUid?: string[];
  startTime?: number;
  endTime?: number;
  page?: number;
  limit?: number;
}

export class StarDemanderDemanderGetAuthorBindInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderDemanderGetAuthorBindInfoGet(request: OpenApi2StarDemanderDemanderGetAuthorBindInfoGetRequest): Promise<StarDemanderDemanderGetAuthorBindInfoV2Response> {
    const response = await this.openApi2StarDemanderDemanderGetAuthorBindInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemanderDemanderGetAuthorBindInfoGetWithHttpInfo(request: OpenApi2StarDemanderDemanderGetAuthorBindInfoGetRequest): Promise<ApiResponse<StarDemanderDemanderGetAuthorBindInfoV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderDemanderGetAuthorBindInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderDemanderGetAuthorBindInfoV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander/demander_get_author_bind_info/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "biz_uid", value: request.bizUid, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


