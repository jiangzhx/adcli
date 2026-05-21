// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarComponentQueryLinkV2Response } from "../models";


export class StarComponentQueryLinkV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarComponentQueryLinkGet(starId: number, componentStatus: number, page: number, limit: number, linkIds: number[], linkType: number): Promise<StarComponentQueryLinkV2Response> {
    const response = await this.openApi2StarComponentQueryLinkGetWithHttpInfo(starId, componentStatus, page, limit, linkIds, linkType);
    return response.data;
  }

  async openApi2StarComponentQueryLinkGetWithHttpInfo(starId: number, componentStatus: number, page: number, limit: number, linkIds: number[], linkType: number): Promise<ApiResponse<StarComponentQueryLinkV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarComponentQueryLinkGet");
    }
    return this.apiClient.requestWithHttpInfo<StarComponentQueryLinkV2Response>({
      method: "GET",
      path: "/open_api/2/star/component/query_link/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "component_status", value: componentStatus },
        { name: "page", value: page },
        { name: "limit", value: limit },
        { name: "link_type", value: linkType },
        { name: "link_ids", value: linkIds, collectionFormat: "csv" }
      ]
    });
  }
}


