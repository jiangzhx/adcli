// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpDataSourceCreateV2Request, DmpDataSourceCreateV2Response } from "../models";


export interface OpenApi2DmpDataSourceCreatePostRequest {
  dmpDataSourceCreateV2Request?: DmpDataSourceCreateV2Request;
}

export class DmpDataSourceCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpDataSourceCreatePost(request: OpenApi2DmpDataSourceCreatePostRequest): Promise<DmpDataSourceCreateV2Response> {
    const response = await this.openApi2DmpDataSourceCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpDataSourceCreatePostWithHttpInfo(request: OpenApi2DmpDataSourceCreatePostRequest): Promise<ApiResponse<DmpDataSourceCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpDataSourceCreateV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/data_source/create/",
      queryParams: [

      ],
      body: request.dmpDataSourceCreateV2Request
    });
  }
}


