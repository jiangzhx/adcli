// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAwemeAuthorInfoGetV2Behaviors, ToolsAwemeAuthorInfoGetV2Response } from "../models";


export class ToolsAwemeAuthorInfoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthorInfoGetGet(advertiserId: number, behaviors: ToolsAwemeAuthorInfoGetV2Behaviors[], labelIds: number[]): Promise<ToolsAwemeAuthorInfoGetV2Response> {
    const response = await this.openApi2ToolsAwemeAuthorInfoGetGetWithHttpInfo(advertiserId, behaviors, labelIds);
    return response.data;
  }

  async openApi2ToolsAwemeAuthorInfoGetGetWithHttpInfo(advertiserId: number, behaviors: ToolsAwemeAuthorInfoGetV2Behaviors[], labelIds: number[]): Promise<ApiResponse<ToolsAwemeAuthorInfoGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthorInfoGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_author_info/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "behaviors", value: behaviors, collectionFormat: "multi" },
        { name: "label_ids", value: labelIds, collectionFormat: "multi" }
      ]
    });
  }
}


