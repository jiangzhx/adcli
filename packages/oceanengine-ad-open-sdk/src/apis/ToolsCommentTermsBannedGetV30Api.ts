// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentTermsBannedGetV30Response } from "../models";


export interface OpenApiV30ToolsCommentTermsBannedGetGetRequest {
  advertiserId: number;
  page?: number;
  pageSize?: number;
  awemeId?: string;
  isApplyToAdv?: boolean;
}

export class ToolsCommentTermsBannedGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentTermsBannedGetGet(request: OpenApiV30ToolsCommentTermsBannedGetGetRequest): Promise<ToolsCommentTermsBannedGetV30Response> {
    const response = await this.openApiV30ToolsCommentTermsBannedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentTermsBannedGetGetWithHttpInfo(request: OpenApiV30ToolsCommentTermsBannedGetGetRequest): Promise<ApiResponse<ToolsCommentTermsBannedGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsCommentTermsBannedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCommentTermsBannedGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/comment/terms_banned/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "aweme_id", value: request.awemeId },
        { name: "is_apply_to_adv", value: request.isApplyToAdv }
      ]
    });
  }
}


