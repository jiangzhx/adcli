// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAdUpdateV10Request, QianchuanAdUpdateV10Response } from "../models";


export class QianchuanAdUpdateV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdUpdatePost(qianchuanAdUpdateV10Request: QianchuanAdUpdateV10Request): Promise<QianchuanAdUpdateV10Response> {
    const response = await this.openApiV10QianchuanAdUpdatePostWithHttpInfo(qianchuanAdUpdateV10Request);
    return response.data;
  }

  async openApiV10QianchuanAdUpdatePostWithHttpInfo(qianchuanAdUpdateV10Request: QianchuanAdUpdateV10Request): Promise<ApiResponse<QianchuanAdUpdateV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdUpdateV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/update/",
      queryParams: [

      ],
      body: qianchuanAdUpdateV10Request
    });
  }
}


