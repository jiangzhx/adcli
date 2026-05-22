// Generated from oceanengine/ad_open_sdk_go api/api_star_project_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarProjectListV2Response } from "../models/index";


export interface StarProjectListV2ApiOpenApi2StarProjectListGetRequest {
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

  async openApi2StarProjectListGet(request: StarProjectListV2ApiOpenApi2StarProjectListGetRequest): Promise<StarProjectListV2Response> {
    const response = await this.openApi2StarProjectListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarProjectListGetWithHttpInfo(request: StarProjectListV2ApiOpenApi2StarProjectListGetRequest): Promise<ApiResponse<StarProjectListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.page != null && Number(request.page) > 10000) {
      throw new ApiException("page must be less than 10000");
    }

    if (request.limit == null) {
      throw new ApiException("limit is required and must be specified");
    }

    if (request.limit != null && Number(request.limit) < 1) {
      throw new ApiException("limit must be greater than 1");
    }

    if (request.limit != null && Number(request.limit) > 50) {
      throw new ApiException("limit must be less than 50");
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


