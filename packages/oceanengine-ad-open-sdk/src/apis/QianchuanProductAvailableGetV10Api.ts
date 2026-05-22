// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanProductAvailableGetV10CampaignScene, QianchuanProductAvailableGetV10Filter, QianchuanProductAvailableGetV10Response } from "../models";


export interface OpenApiV10QianchuanProductAvailableGetGetRequest {
  advertiserId: number;
  awemeId?: number;
  filter?: QianchuanProductAvailableGetV10Filter;
  campaignScene?: QianchuanProductAvailableGetV10CampaignScene;
  page?: number;
  pageSize?: number;
  cursor?: number;
}

export class QianchuanProductAvailableGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanProductAvailableGetGet(request: OpenApiV10QianchuanProductAvailableGetGetRequest): Promise<QianchuanProductAvailableGetV10Response> {
    const response = await this.openApiV10QianchuanProductAvailableGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanProductAvailableGetGetWithHttpInfo(request: OpenApiV10QianchuanProductAvailableGetGetRequest): Promise<ApiResponse<QianchuanProductAvailableGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanProductAvailableGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanProductAvailableGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/product/available/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "filter", value: request.filter },
        { name: "campaign_scene", value: request.campaignScene },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "cursor", value: request.cursor }
      ]
    });
  }
}


