// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarProjectListV2Response } from "../models";


export interface OpenApi2StarProjectListGetRequest {
  starId: number | string;
  page: number;
  limit: number;
  searchName?: string;
}

export class StarProjectListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarProjectListGet(request: OpenApi2StarProjectListGetRequest): Promise<StarProjectListV2Response> {
    const response = await this.openApi2StarProjectListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarProjectListGetWithHttpInfo(request: OpenApi2StarProjectListGetRequest): Promise<ApiResponse<StarProjectListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarProjectListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarProjectListGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarProjectListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarProjectListV2Response>({
      method: "GET",
      path: "/open_api/2/star/project/list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "search_name", value: request.searchName },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


