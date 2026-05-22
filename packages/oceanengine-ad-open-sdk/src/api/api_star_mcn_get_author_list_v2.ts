// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_get_author_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnGetAuthorListV2Response } from "../models/index";


export interface StarMcnGetAuthorListV2ApiOpenApi2StarMcnGetAuthorListGetRequest {
  starId: number | string;
  authorId?: number | string;
  page?: number;
  pageSize?: number;
  developerId?: number | string;
}

export class StarMcnGetAuthorListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetAuthorListGet(request: StarMcnGetAuthorListV2ApiOpenApi2StarMcnGetAuthorListGetRequest): Promise<StarMcnGetAuthorListV2Response> {
    const response = await this.openApi2StarMcnGetAuthorListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnGetAuthorListGetWithHttpInfo(request: StarMcnGetAuthorListV2ApiOpenApi2StarMcnGetAuthorListGetRequest): Promise<ApiResponse<StarMcnGetAuthorListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnGetAuthorListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnGetAuthorListV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/get_author_list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "author_id", value: request.authorId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "developer_id", value: request.developerId }
      ]
    });
  }
}


