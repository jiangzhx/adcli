// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarComponentQueryLinkV2Response } from "../models";


export interface OpenApi2StarComponentQueryLinkGetRequest {
  starId: number | string;
  componentStatus?: number;
  page?: number;
  limit?: number;
  linkIds?: number | string[];
  linkType?: number;
}

export class StarComponentQueryLinkV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentQueryLinkGet(request: OpenApi2StarComponentQueryLinkGetRequest): Promise<StarComponentQueryLinkV2Response> {
    const response = await this.openApi2StarComponentQueryLinkGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarComponentQueryLinkGetWithHttpInfo(request: OpenApi2StarComponentQueryLinkGetRequest): Promise<ApiResponse<StarComponentQueryLinkV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarComponentQueryLinkGet");
    }
    return this.apiClient.requestWithHttpInfo<StarComponentQueryLinkV2Response>({
      method: "GET",
      path: "/open_api/2/star/component/query_link/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "component_status", value: request.componentStatus },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit },
        { name: "link_ids", value: request.linkIds, collectionFormat: "csv" },
        { name: "link_type", value: request.linkType }
      ]
    });
  }
}


