// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpDataSourceUpdateV2Request, DmpDataSourceUpdateV2Response } from "../models";


export interface OpenApi2DmpDataSourceUpdatePostRequest {
  dmpDataSourceUpdateV2Request?: DmpDataSourceUpdateV2Request;
}

export class DmpDataSourceUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpDataSourceUpdatePost(request: OpenApi2DmpDataSourceUpdatePostRequest): Promise<DmpDataSourceUpdateV2Response> {
    const response = await this.openApi2DmpDataSourceUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpDataSourceUpdatePostWithHttpInfo(request: OpenApi2DmpDataSourceUpdatePostRequest): Promise<ApiResponse<DmpDataSourceUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpDataSourceUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/data_source/update/",
      queryParams: [

      ],
      body: request.dmpDataSourceUpdateV2Request
    });
  }
}


