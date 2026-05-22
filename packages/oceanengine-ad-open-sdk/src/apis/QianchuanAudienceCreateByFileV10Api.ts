// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAudienceCreateByFileV10Request, QianchuanAudienceCreateByFileV10Response } from "../models";


export class QianchuanAudienceCreateByFileV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceCreateByFilePost(request: QianchuanAudienceCreateByFileV10Request): Promise<QianchuanAudienceCreateByFileV10Response> {
    const response = await this.openApiV10QianchuanAudienceCreateByFilePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceCreateByFilePostWithHttpInfo(request: QianchuanAudienceCreateByFileV10Request): Promise<ApiResponse<QianchuanAudienceCreateByFileV10Response>> {
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceCreateByFileV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience/create_by_file/",
      queryParams: [

      ],
      body: request
    });
  }
}


