// Generated from oceanengine/ad_open_sdk_go api/api_aic_element_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AicElementDeleteV30Request, AicElementDeleteV30Response } from "../models/index";


export interface AicElementDeleteV30ApiOpenApiV30AicElementDeletePostRequest {
  aicElementDeleteV30Request?: AicElementDeleteV30Request;
}

export class AicElementDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicElementDeletePost(request: AicElementDeleteV30ApiOpenApiV30AicElementDeletePostRequest): Promise<AicElementDeleteV30Response> {
    const response = await this.openApiV30AicElementDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicElementDeletePostWithHttpInfo(request: AicElementDeleteV30ApiOpenApiV30AicElementDeletePostRequest): Promise<ApiResponse<AicElementDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<AicElementDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/element/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.aicElementDeleteV30Request
    });
  }
}


