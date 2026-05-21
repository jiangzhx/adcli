// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarMcnGetAuthorListV2Response } from "../models";


export class StarMcnGetAuthorListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnGetAuthorListGet(starId: number, authorId: number, page: number, pageSize: number, developerId: number): Promise<StarMcnGetAuthorListV2Response> {
    const response = await this.openApi2StarMcnGetAuthorListGetWithHttpInfo(starId, authorId, page, pageSize, developerId);
    return response.data;
  }

  async openApi2StarMcnGetAuthorListGetWithHttpInfo(starId: number, authorId: number, page: number, pageSize: number, developerId: number): Promise<ApiResponse<StarMcnGetAuthorListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnGetAuthorListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnGetAuthorListV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/get_author_list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "author_id", value: authorId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "developer_id", value: developerId }
      ]
    });
  }
}


