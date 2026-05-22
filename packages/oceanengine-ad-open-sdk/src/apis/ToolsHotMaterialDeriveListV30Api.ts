// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsHotMaterialDeriveListV30Filtering, ToolsHotMaterialDeriveListV30Response } from "../models";


export class ToolsHotMaterialDeriveListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsHotMaterialDeriveListGet(advertiserId: number, page: number, pageSize: number, filtering: ToolsHotMaterialDeriveListV30Filtering): Promise<ToolsHotMaterialDeriveListV30Response> {
    const response = await this.openApiV30ToolsHotMaterialDeriveListGetWithHttpInfo(advertiserId, page, pageSize, filtering);
    return response.data;
  }

  async openApiV30ToolsHotMaterialDeriveListGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, filtering: ToolsHotMaterialDeriveListV30Filtering): Promise<ApiResponse<ToolsHotMaterialDeriveListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsHotMaterialDeriveListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ToolsHotMaterialDeriveListGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30ToolsHotMaterialDeriveListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsHotMaterialDeriveListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/hot_material_derive/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


