// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanFileVideoAwemeGetV10Filtering, QianchuanFileVideoAwemeGetV10Response } from "../models";


export class QianchuanFileVideoAwemeGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFileVideoAwemeGetGet(advertiserId: number, awemeId: number, adBindAwemeId: number, pullAwemeExcellentVideo: boolean, filtering: QianchuanFileVideoAwemeGetV10Filtering, cursor: number, count: number): Promise<QianchuanFileVideoAwemeGetV10Response> {
    const response = await this.openApiV10QianchuanFileVideoAwemeGetGetWithHttpInfo(advertiserId, awemeId, adBindAwemeId, pullAwemeExcellentVideo, filtering, cursor, count);
    return response.data;
  }

  async openApiV10QianchuanFileVideoAwemeGetGetWithHttpInfo(advertiserId: number, awemeId: number, adBindAwemeId: number, pullAwemeExcellentVideo: boolean, filtering: QianchuanFileVideoAwemeGetV10Filtering, cursor: number, count: number): Promise<ApiResponse<QianchuanFileVideoAwemeGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanFileVideoAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanFileVideoAwemeGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/file/video/aweme/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "ad_bind_aweme_id", value: adBindAwemeId },
        { name: "pull_aweme_excellent_video", value: pullAwemeExcellentVideo },
        { name: "filtering", value: filtering },
        { name: "cursor", value: cursor },
        { name: "count", value: count }
      ]
    });
  }
}


