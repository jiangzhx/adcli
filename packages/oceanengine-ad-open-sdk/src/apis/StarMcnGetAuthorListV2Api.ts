// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnGetAuthorListV2Response } from "../models";


export interface OpenApi2StarMcnGetAuthorListGetRequest {
  starId: number;
  authorId?: number;
  page?: number;
  pageSize?: number;
  developerId?: number;
}

export class StarMcnGetAuthorListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetAuthorListGet(request: OpenApi2StarMcnGetAuthorListGetRequest): Promise<StarMcnGetAuthorListV2Response> {
    const response = await this.openApi2StarMcnGetAuthorListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnGetAuthorListGetWithHttpInfo(request: OpenApi2StarMcnGetAuthorListGetRequest): Promise<ApiResponse<StarMcnGetAuthorListV2Response>> {
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


