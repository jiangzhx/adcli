// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsInactiveAdvertiserListV30AdvertiserType, ToolsInactiveAdvertiserListV30Response } from "../models";


export class ToolsInactiveAdvertiserListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsInactiveAdvertiserListGet(appId: number, cursor: number, count: number, advertiserType: ToolsInactiveAdvertiserListV30AdvertiserType): Promise<ToolsInactiveAdvertiserListV30Response> {
    const response = await this.openApiV30ToolsInactiveAdvertiserListGetWithHttpInfo(appId, cursor, count, advertiserType);
    return response.data;
  }

  async openApiV30ToolsInactiveAdvertiserListGetWithHttpInfo(appId: number, cursor: number, count: number, advertiserType: ToolsInactiveAdvertiserListV30AdvertiserType): Promise<ApiResponse<ToolsInactiveAdvertiserListV30Response>> {
    if (appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling openApiV30ToolsInactiveAdvertiserListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsInactiveAdvertiserListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/inactive_advertiser/list/",
      queryParams: [
        { name: "app_id", value: appId },
        { name: "cursor", value: cursor },
        { name: "count", value: count },
        { name: "advertiser_type", value: advertiserType }
      ]
    });
  }
}


