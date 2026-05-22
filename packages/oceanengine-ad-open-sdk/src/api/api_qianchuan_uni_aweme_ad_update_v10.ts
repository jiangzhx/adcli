// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_uni_aweme_ad_update_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanUniAwemeAdUpdateV10Request, QianchuanUniAwemeAdUpdateV10Response } from "../models/index";


export interface QianchuanUniAwemeAdUpdateV10ApiOpenApiV10QianchuanUniAwemeAdUpdatePostRequest {
  qianchuanUniAwemeAdUpdateV10Request?: QianchuanUniAwemeAdUpdateV10Request;
}

export class QianchuanUniAwemeAdUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanUniAwemeAdUpdatePost(request: QianchuanUniAwemeAdUpdateV10ApiOpenApiV10QianchuanUniAwemeAdUpdatePostRequest): Promise<QianchuanUniAwemeAdUpdateV10Response> {
    const response = await this.openApiV10QianchuanUniAwemeAdUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanUniAwemeAdUpdatePostWithHttpInfo(request: QianchuanUniAwemeAdUpdateV10ApiOpenApiV10QianchuanUniAwemeAdUpdatePostRequest): Promise<ApiResponse<QianchuanUniAwemeAdUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanUniAwemeAdUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/uni_aweme/ad/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanUniAwemeAdUpdateV10Request
    });
  }
}


