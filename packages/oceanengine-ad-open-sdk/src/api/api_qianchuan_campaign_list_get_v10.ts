// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_campaign_list_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanCampaignListGetV10Filter, QianchuanCampaignListGetV10Response } from "../models/index";


export interface QianchuanCampaignListGetV10ApiOpenApiV10QianchuanCampaignListGetGetRequest {
  advertiserId: number | string;
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

  async openApiV10QianchuanCampaignListGetGet(request: QianchuanCampaignListGetV10ApiOpenApiV10QianchuanCampaignListGetGetRequest): Promise<QianchuanCampaignListGetV10Response> {
    const response = await this.openApiV10QianchuanCampaignListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanCampaignListGetGetWithHttpInfo(request: QianchuanCampaignListGetV10ApiOpenApiV10QianchuanCampaignListGetGetRequest): Promise<ApiResponse<QianchuanCampaignListGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.filter == null) {
      throw new ApiException("filter is required and must be specified");
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


