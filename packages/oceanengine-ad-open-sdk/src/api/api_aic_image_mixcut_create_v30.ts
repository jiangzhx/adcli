// Generated from oceanengine/ad_open_sdk_go api/api_aic_image_mixcut_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AicImageMixcutCreateV30Request, AicImageMixcutCreateV30Response } from "../models/index";


export interface AicImageMixcutCreateV30ApiOpenApiV30AicImageMixcutCreatePostRequest {
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

  async openApiV30AicImageMixcutCreatePost(request: AicImageMixcutCreateV30ApiOpenApiV30AicImageMixcutCreatePostRequest): Promise<AicImageMixcutCreateV30Response> {
    const response = await this.openApiV30AicImageMixcutCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicImageMixcutCreatePostWithHttpInfo(request: AicImageMixcutCreateV30ApiOpenApiV30AicImageMixcutCreatePostRequest): Promise<ApiResponse<AicImageMixcutCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicImageMixcutCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/image_mixcut/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.aicImageMixcutCreateV30Request
    });
  }
}


