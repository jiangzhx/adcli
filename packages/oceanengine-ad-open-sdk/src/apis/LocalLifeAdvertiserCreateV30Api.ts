// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalLifeAdvertiserCreateV30Request, LocalLifeAdvertiserCreateV30Response } from "../models";


export class LocalLifeAdvertiserCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalLifeAdvertiserCreatePost(localLifeAdvertiserCreateV30Request: LocalLifeAdvertiserCreateV30Request): Promise<LocalLifeAdvertiserCreateV30Response> {
    const response = await this.openApiV30LocalLifeAdvertiserCreatePostWithHttpInfo(localLifeAdvertiserCreateV30Request);
    return response.data;
  }

  async openApiV30LocalLifeAdvertiserCreatePostWithHttpInfo(localLifeAdvertiserCreateV30Request: LocalLifeAdvertiserCreateV30Request): Promise<ApiResponse<LocalLifeAdvertiserCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalLifeAdvertiserCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/life/advertiser/create/",
      queryParams: [

      ],
      body: localLifeAdvertiserCreateV30Request
    });
  }
}


