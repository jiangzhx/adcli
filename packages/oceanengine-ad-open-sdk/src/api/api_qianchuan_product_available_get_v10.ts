// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_product_available_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanProductAvailableGetV10CampaignScene, QianchuanProductAvailableGetV10Filter, QianchuanProductAvailableGetV10Response } from "../models/index";


export interface QianchuanProductAvailableGetV10ApiOpenApiV10QianchuanProductAvailableGetGetRequest {
  advertiserId: number | string;
  awemeId?: number | string;
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

  async openApiV10QianchuanProductAvailableGetGet(request: QianchuanProductAvailableGetV10ApiOpenApiV10QianchuanProductAvailableGetGetRequest): Promise<QianchuanProductAvailableGetV10Response> {
    const response = await this.openApiV10QianchuanProductAvailableGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanProductAvailableGetGetWithHttpInfo(request: QianchuanProductAvailableGetV10ApiOpenApiV10QianchuanProductAvailableGetGetRequest): Promise<ApiResponse<QianchuanProductAvailableGetV10Response>> {
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


