// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_compensate_status_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdCompensateStatusGetV10Response } from "../models/index";


export interface QianchuanAdCompensateStatusGetV10ApiOpenApiV10QianchuanAdCompensateStatusGetGetRequest {
  advertiserId: number | string;
  adIds: (number | string)[];
}

export class QianchuanAdCompensateStatusGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdCompensateStatusGetGet(request: QianchuanAdCompensateStatusGetV10ApiOpenApiV10QianchuanAdCompensateStatusGetGetRequest): Promise<QianchuanAdCompensateStatusGetV10Response> {
    const response = await this.openApiV10QianchuanAdCompensateStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdCompensateStatusGetGetWithHttpInfo(request: QianchuanAdCompensateStatusGetV10ApiOpenApiV10QianchuanAdCompensateStatusGetGetRequest): Promise<ApiResponse<QianchuanAdCompensateStatusGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.adIds == null) {
      throw new ApiException("adIds is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdCompensateStatusGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/compensate_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "ad_ids", value: request.adIds }
      ]
    });
  }
}


