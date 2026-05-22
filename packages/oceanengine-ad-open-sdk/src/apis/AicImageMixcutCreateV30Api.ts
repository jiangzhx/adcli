// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicImageMixcutCreateV30Request, AicImageMixcutCreateV30Response } from "../models";


export class AicImageMixcutCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicImageMixcutCreatePost(aicImageMixcutCreateV30Request: AicImageMixcutCreateV30Request): Promise<AicImageMixcutCreateV30Response> {
    const response = await this.openApiV30AicImageMixcutCreatePostWithHttpInfo(aicImageMixcutCreateV30Request);
    return response.data;
  }

  async openApiV30AicImageMixcutCreatePostWithHttpInfo(aicImageMixcutCreateV30Request: AicImageMixcutCreateV30Request): Promise<ApiResponse<AicImageMixcutCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicImageMixcutCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/image_mixcut/create/",
      queryParams: [

      ],
      body: aicImageMixcutCreateV30Request
    });
  }
}


