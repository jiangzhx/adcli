// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_author_info_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeAuthorInfoGetV2Behaviors, ToolsAwemeAuthorInfoGetV2Response } from "../models/index";


export interface ToolsAwemeAuthorInfoGetV2ApiOpenApi2ToolsAwemeAuthorInfoGetGetRequest {
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

  async openApi2ToolsAwemeAuthorInfoGetGet(request: ToolsAwemeAuthorInfoGetV2ApiOpenApi2ToolsAwemeAuthorInfoGetGetRequest): Promise<ToolsAwemeAuthorInfoGetV2Response> {
    const response = await this.openApi2ToolsAwemeAuthorInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthorInfoGetGetWithHttpInfo(request: ToolsAwemeAuthorInfoGetV2ApiOpenApi2ToolsAwemeAuthorInfoGetGetRequest): Promise<ApiResponse<ToolsAwemeAuthorInfoGetV2Response>> {

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


