// Generated from oceanengine/ad_open_sdk_go api/api_local_life_advertiser_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalLifeAdvertiserCreateV30Request, LocalLifeAdvertiserCreateV30Response } from "../models/index";


export interface LocalLifeAdvertiserCreateV30ApiOpenApiV30LocalLifeAdvertiserCreatePostRequest {
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

  async openApiV30LocalLifeAdvertiserCreatePost(request: LocalLifeAdvertiserCreateV30ApiOpenApiV30LocalLifeAdvertiserCreatePostRequest): Promise<LocalLifeAdvertiserCreateV30Response> {
    const response = await this.openApiV30LocalLifeAdvertiserCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalLifeAdvertiserCreatePostWithHttpInfo(request: LocalLifeAdvertiserCreateV30ApiOpenApiV30LocalLifeAdvertiserCreatePostRequest): Promise<ApiResponse<LocalLifeAdvertiserCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalLifeAdvertiserCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/life/advertiser/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localLifeAdvertiserCreateV30Request
    });
  }
}


