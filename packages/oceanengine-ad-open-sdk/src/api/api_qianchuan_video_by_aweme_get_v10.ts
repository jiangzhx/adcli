// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_video_by_aweme_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanVideoByAwemeGetV10Response } from "../models/index";


export interface QianchuanVideoByAwemeGetV10ApiOpenApiV10QianchuanVideoByAwemeGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  awemeItemUrl?: string;
  awemeItemId?: number | string;
}

export class QianchuanVideoByAwemeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanVideoByAwemeGetGet(request: QianchuanVideoByAwemeGetV10ApiOpenApiV10QianchuanVideoByAwemeGetGetRequest): Promise<QianchuanVideoByAwemeGetV10Response> {
    const response = await this.openApiV10QianchuanVideoByAwemeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanVideoByAwemeGetGetWithHttpInfo(request: QianchuanVideoByAwemeGetV10ApiOpenApiV10QianchuanVideoByAwemeGetGetRequest): Promise<ApiResponse<QianchuanVideoByAwemeGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanVideoByAwemeGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanVideoByAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanVideoByAwemeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/video/by_aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "aweme_item_url", value: request.awemeItemUrl },
        { name: "aweme_item_id", value: request.awemeItemId }
      ]
    });
  }
}


