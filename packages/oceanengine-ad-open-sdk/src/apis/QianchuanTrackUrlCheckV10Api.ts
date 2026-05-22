// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanTrackUrlCheckV10Response } from "../models";


export interface OpenApiV10QianchuanTrackUrlCheckGetRequest {
  advertiserId: number | string;
  trackUrl: string[];
}

export class QianchuanTrackUrlCheckV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTrackUrlCheckGet(request: OpenApiV10QianchuanTrackUrlCheckGetRequest): Promise<QianchuanTrackUrlCheckV10Response> {
    const response = await this.openApiV10QianchuanTrackUrlCheckGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanTrackUrlCheckGetWithHttpInfo(request: OpenApiV10QianchuanTrackUrlCheckGetRequest): Promise<ApiResponse<QianchuanTrackUrlCheckV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTrackUrlCheckGet");
    }

    if (request.trackUrl == null) {
      throw new ApiException("Missing the required parameter 'trackUrl' when calling openApiV10QianchuanTrackUrlCheckGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTrackUrlCheckV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/track_url/check/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "track_url", value: request.trackUrl, collectionFormat: "csv" }
      ]
    });
  }
}


