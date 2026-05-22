// Generated from oceanengine/ad_open_sdk_go api/api_dmp_data_source_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DmpDataSourceCreateV2Request, DmpDataSourceCreateV2Response } from "../models/index";


export interface DmpDataSourceCreateV2ApiOpenApi2DmpDataSourceCreatePostRequest {
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

  async openApi2DmpDataSourceCreatePost(request: DmpDataSourceCreateV2ApiOpenApi2DmpDataSourceCreatePostRequest): Promise<DmpDataSourceCreateV2Response> {
    const response = await this.openApi2DmpDataSourceCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpDataSourceCreatePostWithHttpInfo(request: DmpDataSourceCreateV2ApiOpenApi2DmpDataSourceCreatePostRequest): Promise<ApiResponse<DmpDataSourceCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpDataSourceCreateV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/data_source/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dmpDataSourceCreateV2Request
    });
  }
}


