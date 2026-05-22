// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAwemeAuthorInfoGetV2Behaviors, ToolsAwemeAuthorInfoGetV2Response } from "../models";


export interface OpenApi2ToolsAwemeAuthorInfoGetGetRequest {
  advertiserId?: number | string;
  behaviors?: ToolsAwemeAuthorInfoGetV2Behaviors[];
  labelIds?: number | string[];
}

export class ToolsAwemeAuthorInfoGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthorInfoGetGet(request: OpenApi2ToolsAwemeAuthorInfoGetGetRequest): Promise<ToolsAwemeAuthorInfoGetV2Response> {
    const response = await this.openApi2ToolsAwemeAuthorInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthorInfoGetGetWithHttpInfo(request: OpenApi2ToolsAwemeAuthorInfoGetGetRequest): Promise<ApiResponse<ToolsAwemeAuthorInfoGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthorInfoGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/aweme_author_info/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "behaviors", value: request.behaviors, collectionFormat: "csv" },
        { name: "label_ids", value: request.labelIds, collectionFormat: "csv" }
      ]
    });
  }
}


