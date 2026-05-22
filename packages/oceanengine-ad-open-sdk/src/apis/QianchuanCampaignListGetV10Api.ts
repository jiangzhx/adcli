// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanCampaignListGetV10Filter, QianchuanCampaignListGetV10Response } from "../models";


export class QianchuanCampaignListGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanCampaignListGetGet(advertiserId: number, filter: QianchuanCampaignListGetV10Filter, page: number, pageSize: number): Promise<QianchuanCampaignListGetV10Response> {
    const response = await this.openApiV10QianchuanCampaignListGetGetWithHttpInfo(advertiserId, filter, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanCampaignListGetGetWithHttpInfo(advertiserId: number, filter: QianchuanCampaignListGetV10Filter, page: number, pageSize: number): Promise<ApiResponse<QianchuanCampaignListGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanCampaignListGetGet");
    }

    if (filter == null) {
      throw new ApiException("Missing the required parameter 'filter' when calling openApiV10QianchuanCampaignListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanCampaignListGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/campaign_list/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filter", value: filter },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


