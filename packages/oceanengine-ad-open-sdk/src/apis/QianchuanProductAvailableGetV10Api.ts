// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanProductAvailableGetV10CampaignScene, QianchuanProductAvailableGetV10Filter, QianchuanProductAvailableGetV10Response } from "../models";


export class QianchuanProductAvailableGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanProductAvailableGetGet(advertiserId: number, awemeId: number, filter: QianchuanProductAvailableGetV10Filter, campaignScene: QianchuanProductAvailableGetV10CampaignScene, page: number, pageSize: number, cursor: number): Promise<QianchuanProductAvailableGetV10Response> {
    const response = await this.openApiV10QianchuanProductAvailableGetGetWithHttpInfo(advertiserId, awemeId, filter, campaignScene, page, pageSize, cursor);
    return response.data;
  }

  async openApiV10QianchuanProductAvailableGetGetWithHttpInfo(advertiserId: number, awemeId: number, filter: QianchuanProductAvailableGetV10Filter, campaignScene: QianchuanProductAvailableGetV10CampaignScene, page: number, pageSize: number, cursor: number): Promise<ApiResponse<QianchuanProductAvailableGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanProductAvailableGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanProductAvailableGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/product/available/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "filter", value: filter },
        { name: "campaign_scene", value: campaignScene },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "cursor", value: cursor }
      ]
    });
  }
}


