// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMicroAppListV30AccountAssetQueryScope, ToolsMicroAppListV30Filtering, ToolsMicroAppListV30Response } from "../models";


export class ToolsMicroAppListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroAppListGet(advertiserId: number, filtering: ToolsMicroAppListV30Filtering, page: number, pageSize: number, accountAssetQueryScope: ToolsMicroAppListV30AccountAssetQueryScope): Promise<ToolsMicroAppListV30Response> {
    const response = await this.openApiV30ToolsMicroAppListGetWithHttpInfo(advertiserId, filtering, page, pageSize, accountAssetQueryScope);
    return response.data;
  }

  async openApiV30ToolsMicroAppListGetWithHttpInfo(advertiserId: number, filtering: ToolsMicroAppListV30Filtering, page: number, pageSize: number, accountAssetQueryScope: ToolsMicroAppListV30AccountAssetQueryScope): Promise<ApiResponse<ToolsMicroAppListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsMicroAppListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMicroAppListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/micro_app/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "account_asset_query_scope", value: accountAssetQueryScope }
      ]
    });
  }
}


