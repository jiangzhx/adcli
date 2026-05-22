// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMicroAppListV30AccountAssetQueryScope, ToolsMicroAppListV30Filtering, ToolsMicroAppListV30Response } from "../models";


export interface OpenApiV30ToolsMicroAppListGetRequest {
  advertiserId: number | string;
  filtering?: ToolsMicroAppListV30Filtering;
  page?: number;
  pageSize?: number;
  accountAssetQueryScope?: ToolsMicroAppListV30AccountAssetQueryScope;
}

export class ToolsMicroAppListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroAppListGet(request: OpenApiV30ToolsMicroAppListGetRequest): Promise<ToolsMicroAppListV30Response> {
    const response = await this.openApiV30ToolsMicroAppListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroAppListGetWithHttpInfo(request: OpenApiV30ToolsMicroAppListGetRequest): Promise<ApiResponse<ToolsMicroAppListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsMicroAppListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMicroAppListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/micro_app/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "account_asset_query_scope", value: request.accountAssetQueryScope }
      ]
    });
  }
}


