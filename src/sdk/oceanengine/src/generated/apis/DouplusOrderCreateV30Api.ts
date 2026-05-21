// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DouplusOrderCreateV30Request, DouplusOrderCreateV30Response } from "../models";


export class DouplusOrderCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOrderCreatePost(douplusOrderCreateV30Request: DouplusOrderCreateV30Request): Promise<DouplusOrderCreateV30Response> {
    const response = await this.openApiV30DouplusOrderCreatePostWithHttpInfo(douplusOrderCreateV30Request);
    return response.data;
  }

  async openApiV30DouplusOrderCreatePostWithHttpInfo(douplusOrderCreateV30Request: DouplusOrderCreateV30Request): Promise<ApiResponse<DouplusOrderCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOrderCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/douplus/order/create/",
      queryParams: [

      ],
      body: douplusOrderCreateV30Request
    });
  }
}


