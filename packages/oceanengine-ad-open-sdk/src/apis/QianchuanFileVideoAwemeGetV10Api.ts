// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanFileVideoAwemeGetV10Filtering, QianchuanFileVideoAwemeGetV10Response } from "../models";


export interface OpenApiV10QianchuanFileVideoAwemeGetGetRequest {
  advertiserId: number | string;
  awemeId?: number | string;
  adBindAwemeId?: number | string;
  pullAwemeExcellentVideo?: boolean;
  filtering?: QianchuanFileVideoAwemeGetV10Filtering;
  cursor?: number;
  count?: number;
}

export class QianchuanFileVideoAwemeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFileVideoAwemeGetGet(request: OpenApiV10QianchuanFileVideoAwemeGetGetRequest): Promise<QianchuanFileVideoAwemeGetV10Response> {
    const response = await this.openApiV10QianchuanFileVideoAwemeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanFileVideoAwemeGetGetWithHttpInfo(request: OpenApiV10QianchuanFileVideoAwemeGetGetRequest): Promise<ApiResponse<QianchuanFileVideoAwemeGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanFileVideoAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanFileVideoAwemeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/file/video/aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "ad_bind_aweme_id", value: request.adBindAwemeId },
        { name: "pull_aweme_excellent_video", value: request.pullAwemeExcellentVideo },
        { name: "filtering", value: request.filtering },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


