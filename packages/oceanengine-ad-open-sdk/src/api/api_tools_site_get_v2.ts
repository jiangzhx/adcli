// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSiteGetV2Filtering, ToolsSiteGetV2Response, ToolsSiteGetV2ShareType, ToolsSiteGetV2Status } from "../models/index";


export interface ToolsSiteGetV2ApiOpenApi2ToolsSiteGetGetRequest {
  advertiserId: number | string;
  xOrangeCaller?: string;
  page?: number;
  pageSize?: number;
  status?: ToolsSiteGetV2Status;
  shareType?: ToolsSiteGetV2ShareType;
  filtering?: ToolsSiteGetV2Filtering;
}

export class ToolsSiteGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteGetGet(request: ToolsSiteGetV2ApiOpenApi2ToolsSiteGetGetRequest): Promise<ToolsSiteGetV2Response> {
    const response = await this.openApi2ToolsSiteGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteGetGetWithHttpInfo(request: ToolsSiteGetV2ApiOpenApi2ToolsSiteGetGetRequest): Promise<ApiResponse<ToolsSiteGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSiteGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "status", value: request.status },
        { name: "share_type", value: request.shareType },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


