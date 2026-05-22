// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_audience_create_by_file_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAudienceCreateByFileV10Request, QianchuanAudienceCreateByFileV10Response } from "../models/index";


export interface QianchuanAudienceCreateByFileV10ApiOpenApiV10QianchuanAudienceCreateByFilePostRequest {
  qianchuanAudienceCreateByFileV10Request?: QianchuanAudienceCreateByFileV10Request;
}

export class QianchuanAudienceCreateByFileV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceCreateByFilePost(request: QianchuanAudienceCreateByFileV10ApiOpenApiV10QianchuanAudienceCreateByFilePostRequest): Promise<QianchuanAudienceCreateByFileV10Response> {
    const response = await this.openApiV10QianchuanAudienceCreateByFilePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceCreateByFilePostWithHttpInfo(request: QianchuanAudienceCreateByFileV10ApiOpenApiV10QianchuanAudienceCreateByFilePostRequest): Promise<ApiResponse<QianchuanAudienceCreateByFileV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAudienceCreateByFileV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience/create_by_file/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAudienceCreateByFileV10Request
    });
  }
}


