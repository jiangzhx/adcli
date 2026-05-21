// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsCommentTermsBannedGetV30Response } from "../models";


export class ToolsCommentTermsBannedGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentTermsBannedGetGet(advertiserId: number, page: number, pageSize: number, awemeId: string, isApplyToAdv: boolean): Promise<ToolsCommentTermsBannedGetV30Response> {
    const response = await this.openApiV30ToolsCommentTermsBannedGetGetWithHttpInfo(advertiserId, page, pageSize, awemeId, isApplyToAdv);
    return response.data;
  }

  async openApiV30ToolsCommentTermsBannedGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, awemeId: string, isApplyToAdv: boolean): Promise<ApiResponse<ToolsCommentTermsBannedGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsCommentTermsBannedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCommentTermsBannedGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/comment/terms_banned/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "aweme_id", value: awemeId },
        { name: "is_apply_to_adv", value: isApplyToAdv }
      ]
    });
  }
}


