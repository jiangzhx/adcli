// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarProjectListV2Response } from "../models";


export class StarProjectListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarProjectListGet(starId: number, page: number, limit: number, searchName: string): Promise<StarProjectListV2Response> {
    const response = await this.openApi2StarProjectListGetWithHttpInfo(starId, page, limit, searchName);
    return response.data;
  }

  async openApi2StarProjectListGetWithHttpInfo(starId: number, page: number, limit: number, searchName: string): Promise<ApiResponse<StarProjectListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarProjectListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarProjectListGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarProjectListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarProjectListV2Response>({
      method: "GET",
      path: "/open_api/2/star/project/list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "search_name", value: searchName },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


