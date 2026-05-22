// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicImageMixcutCreateV30Request, AicImageMixcutCreateV30Response } from "../models";


export interface OpenApiV30AicImageMixcutCreatePostRequest {
  aicImageMixcutCreateV30Request?: AicImageMixcutCreateV30Request;
}

export class AicImageMixcutCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicImageMixcutCreatePost(request: OpenApiV30AicImageMixcutCreatePostRequest): Promise<AicImageMixcutCreateV30Response> {
    const response = await this.openApiV30AicImageMixcutCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicImageMixcutCreatePostWithHttpInfo(request: OpenApiV30AicImageMixcutCreatePostRequest): Promise<ApiResponse<AicImageMixcutCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicImageMixcutCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/image_mixcut/create/",
      queryParams: [

      ],
      body: request.aicImageMixcutCreateV30Request
    });
  }
}


