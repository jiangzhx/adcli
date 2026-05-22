// Generated from oceanengine/ad_open_sdk_go api/api_star_demander_demander_get_author_bind_info_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemanderDemanderGetAuthorBindInfoV2Response } from "../models/index";


export interface StarDemanderDemanderGetAuthorBindInfoV2ApiOpenApi2StarDemanderDemanderGetAuthorBindInfoGetRequest {
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

  async openApi2StarDemanderDemanderGetAuthorBindInfoGet(request: StarDemanderDemanderGetAuthorBindInfoV2ApiOpenApi2StarDemanderDemanderGetAuthorBindInfoGetRequest): Promise<StarDemanderDemanderGetAuthorBindInfoV2Response> {
    const response = await this.openApi2StarDemanderDemanderGetAuthorBindInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemanderDemanderGetAuthorBindInfoGetWithHttpInfo(request: StarDemanderDemanderGetAuthorBindInfoV2ApiOpenApi2StarDemanderDemanderGetAuthorBindInfoGetRequest): Promise<ApiResponse<StarDemanderDemanderGetAuthorBindInfoV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderDemanderGetAuthorBindInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderDemanderGetAuthorBindInfoV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander/demander_get_author_bind_info/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "biz_uid", value: request.bizUid },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


