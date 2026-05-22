// Generated from oceanengine/ad_open_sdk_go api/api_star_copyright_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarCopyrightGetV2Response } from "../models/index";


export interface StarCopyrightGetV2ApiOpenApi2StarCopyrightGetGetRequest {
  starId: number | string;
  page: number;
  limit: number;
}

export class StarCopyrightGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarCopyrightGetGet(request: StarCopyrightGetV2ApiOpenApi2StarCopyrightGetGetRequest): Promise<StarCopyrightGetV2Response> {
    const response = await this.openApi2StarCopyrightGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarCopyrightGetGetWithHttpInfo(request: StarCopyrightGetV2ApiOpenApi2StarCopyrightGetGetRequest): Promise<ApiResponse<StarCopyrightGetV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.page != null && Number(request.page) > 99999) {
      throw new ApiException("page must be less than 99999");
    }

    if (request.limit == null) {
      throw new ApiException("limit is required and must be specified");
    }

    if (request.limit != null && Number(request.limit) < 1) {
      throw new ApiException("limit must be greater than 1");
    }

    if (request.limit != null && Number(request.limit) > 200) {
      throw new ApiException("limit must be less than 200");
    }
    return this.apiClient.requestWithHttpInfo<StarCopyrightGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/copyright/get/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


