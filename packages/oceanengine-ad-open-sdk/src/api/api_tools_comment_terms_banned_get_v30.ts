// Generated from oceanengine/ad_open_sdk_go api/api_tools_comment_terms_banned_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCommentTermsBannedGetV30Response } from "../models/index";


export interface ToolsCommentTermsBannedGetV30ApiOpenApiV30ToolsCommentTermsBannedGetGetRequest {
  advertiserId: number | string;
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

  async openApiV30ToolsCommentTermsBannedGetGet(request: ToolsCommentTermsBannedGetV30ApiOpenApiV30ToolsCommentTermsBannedGetGetRequest): Promise<ToolsCommentTermsBannedGetV30Response> {
    const response = await this.openApiV30ToolsCommentTermsBannedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentTermsBannedGetGetWithHttpInfo(request: ToolsCommentTermsBannedGetV30ApiOpenApiV30ToolsCommentTermsBannedGetGetRequest): Promise<ApiResponse<ToolsCommentTermsBannedGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


