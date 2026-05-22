// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalLifeAdvertiserCreateV30Request, LocalLifeAdvertiserCreateV30Response } from "../models";


export interface OpenApiV30LocalLifeAdvertiserCreatePostRequest {
  localLifeAdvertiserCreateV30Request?: LocalLifeAdvertiserCreateV30Request;
}

export class LocalLifeAdvertiserCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalLifeAdvertiserCreatePost(request: OpenApiV30LocalLifeAdvertiserCreatePostRequest): Promise<LocalLifeAdvertiserCreateV30Response> {
    const response = await this.openApiV30LocalLifeAdvertiserCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalLifeAdvertiserCreatePostWithHttpInfo(request: OpenApiV30LocalLifeAdvertiserCreatePostRequest): Promise<ApiResponse<LocalLifeAdvertiserCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalLifeAdvertiserCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/life/advertiser/create/",
      queryParams: [

      ],
      body: request.localLifeAdvertiserCreateV30Request
    });
  }
}


