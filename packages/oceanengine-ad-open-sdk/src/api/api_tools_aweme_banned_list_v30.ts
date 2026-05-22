// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_banned_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeBannedListV30BannedType, ToolsAwemeBannedListV30Response } from "../models/index";


export interface ToolsAwemeBannedListV30ApiOpenApiV30ToolsAwemeBannedListGetRequest {
  advertiserId: number | string;
  bannedType?: ToolsAwemeBannedListV30BannedType;
  awemeId?: string;
  isApplyToAdv?: boolean;
  nicknameKeyword?: string;
  awemeUserId?: string;
  page?: number;
  pageSize?: number;
}

export class ToolsAwemeBannedListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAwemeBannedListGet(request: ToolsAwemeBannedListV30ApiOpenApiV30ToolsAwemeBannedListGetRequest): Promise<ToolsAwemeBannedListV30Response> {
    const response = await this.openApiV30ToolsAwemeBannedListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAwemeBannedListGetWithHttpInfo(request: ToolsAwemeBannedListV30ApiOpenApiV30ToolsAwemeBannedListGetRequest): Promise<ApiResponse<ToolsAwemeBannedListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAwemeBannedListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/aweme_banned/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "banned_type", value: request.bannedType },
        { name: "aweme_id", value: request.awemeId },
        { name: "is_apply_to_adv", value: request.isApplyToAdv },
        { name: "nickname_keyword", value: request.nicknameKeyword },
        { name: "aweme_user_id", value: request.awemeUserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


