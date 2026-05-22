// Generated from oceanengine/ad_open_sdk_go api/api_dmp_data_source_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DmpDataSourceUpdateV2Request, DmpDataSourceUpdateV2Response } from "../models/index";


export interface DmpDataSourceUpdateV2ApiOpenApi2DmpDataSourceUpdatePostRequest {
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

  async openApi2DmpDataSourceUpdatePost(request: DmpDataSourceUpdateV2ApiOpenApi2DmpDataSourceUpdatePostRequest): Promise<DmpDataSourceUpdateV2Response> {
    const response = await this.openApi2DmpDataSourceUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpDataSourceUpdatePostWithHttpInfo(request: DmpDataSourceUpdateV2ApiOpenApi2DmpDataSourceUpdatePostRequest): Promise<ApiResponse<DmpDataSourceUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpDataSourceUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/data_source/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dmpDataSourceUpdateV2Request
    });
  }
}


