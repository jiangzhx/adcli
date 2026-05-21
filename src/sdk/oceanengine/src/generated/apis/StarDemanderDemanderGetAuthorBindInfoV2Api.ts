// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemanderDemanderGetAuthorBindInfoV2Response } from "../models";


export class StarDemanderDemanderGetAuthorBindInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderDemanderGetAuthorBindInfoGet(starId: number, bizUid: string[], startTime: number, endTime: number, page: number, limit: number): Promise<StarDemanderDemanderGetAuthorBindInfoV2Response> {
    const response = await this.openApi2StarDemanderDemanderGetAuthorBindInfoGetWithHttpInfo(starId, bizUid, startTime, endTime, page, limit);
    return response.data;
  }

  async openApi2StarDemanderDemanderGetAuthorBindInfoGetWithHttpInfo(starId: number, bizUid: string[], startTime: number, endTime: number, page: number, limit: number): Promise<ApiResponse<StarDemanderDemanderGetAuthorBindInfoV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderDemanderGetAuthorBindInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderDemanderGetAuthorBindInfoV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander/demander_get_author_bind_info/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "limit", value: limit },
        { name: "biz_uid", value: bizUid, collectionFormat: "csv" }
      ]
    });
  }
}


