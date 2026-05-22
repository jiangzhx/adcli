// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanCampaignListGetV10Filter, QianchuanCampaignListGetV10Response } from "../models";


export interface OpenApiV10QianchuanCampaignListGetGetRequest {
  advertiserId: number;
  filter: QianchuanCampaignListGetV10Filter;
  page?: number;
  pageSize?: number;
}

export class QianchuanCampaignListGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanCampaignListGetGet(request: OpenApiV10QianchuanCampaignListGetGetRequest): Promise<QianchuanCampaignListGetV10Response> {
    const response = await this.openApiV10QianchuanCampaignListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanCampaignListGetGetWithHttpInfo(request: OpenApiV10QianchuanCampaignListGetGetRequest): Promise<ApiResponse<QianchuanCampaignListGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanCampaignListGetGet");
    }

    if (request.filter == null) {
      throw new ApiException("Missing the required parameter 'filter' when calling openApiV10QianchuanCampaignListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanCampaignListGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/campaign_list/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filter", value: request.filter },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


