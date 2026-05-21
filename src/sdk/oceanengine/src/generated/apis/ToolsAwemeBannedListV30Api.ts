// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAwemeBannedListV30BannedType, ToolsAwemeBannedListV30Response } from "../models";


export class ToolsAwemeBannedListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAwemeBannedListGet(advertiserId: number, bannedType: ToolsAwemeBannedListV30BannedType, awemeId: string, isApplyToAdv: boolean, nicknameKeyword: string, awemeUserId: string, page: number, pageSize: number): Promise<ToolsAwemeBannedListV30Response> {
    const response = await this.openApiV30ToolsAwemeBannedListGetWithHttpInfo(advertiserId, bannedType, awemeId, isApplyToAdv, nicknameKeyword, awemeUserId, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsAwemeBannedListGetWithHttpInfo(advertiserId: number, bannedType: ToolsAwemeBannedListV30BannedType, awemeId: string, isApplyToAdv: boolean, nicknameKeyword: string, awemeUserId: string, page: number, pageSize: number): Promise<ApiResponse<ToolsAwemeBannedListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsAwemeBannedListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAwemeBannedListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/aweme_banned/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "banned_type", value: bannedType },
        { name: "aweme_id", value: awemeId },
        { name: "is_apply_to_adv", value: isApplyToAdv },
        { name: "nickname_keyword", value: nicknameKeyword },
        { name: "aweme_user_id", value: awemeUserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


