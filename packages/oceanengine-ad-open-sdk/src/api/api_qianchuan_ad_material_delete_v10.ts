// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_material_delete_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdMaterialDeleteV10Request, QianchuanAdMaterialDeleteV10Response } from "../models/index";


export interface QianchuanAdMaterialDeleteV10ApiOpenApiV10QianchuanAdMaterialDeletePostRequest {
  qianchuanAdMaterialDeleteV10Request?: QianchuanAdMaterialDeleteV10Request;
}

export class QianchuanAdMaterialDeleteV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdMaterialDeletePost(request: QianchuanAdMaterialDeleteV10ApiOpenApiV10QianchuanAdMaterialDeletePostRequest): Promise<QianchuanAdMaterialDeleteV10Response> {
    const response = await this.openApiV10QianchuanAdMaterialDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdMaterialDeletePostWithHttpInfo(request: QianchuanAdMaterialDeleteV10ApiOpenApiV10QianchuanAdMaterialDeletePostRequest): Promise<ApiResponse<QianchuanAdMaterialDeleteV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdMaterialDeleteV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/ad/material/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.qianchuanAdMaterialDeleteV10Request
    });
  }
}


