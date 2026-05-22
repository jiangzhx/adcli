// Generated from oceanengine/ad_open_sdk_go api/api_aic_element_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AicElementUpdateV30Request, AicElementUpdateV30Response } from "../models/index";


export interface AicElementUpdateV30ApiOpenApiV30AicElementUpdatePostRequest {
  aicElementUpdateV30Request?: AicElementUpdateV30Request;
}

export class AicElementUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicElementUpdatePost(request: AicElementUpdateV30ApiOpenApiV30AicElementUpdatePostRequest): Promise<AicElementUpdateV30Response> {
    const response = await this.openApiV30AicElementUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicElementUpdatePostWithHttpInfo(request: AicElementUpdateV30ApiOpenApiV30AicElementUpdatePostRequest): Promise<ApiResponse<AicElementUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicElementUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/element/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.aicElementUpdateV30Request
    });
  }
}


