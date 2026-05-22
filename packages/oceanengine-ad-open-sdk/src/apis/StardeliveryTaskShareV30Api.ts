// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskShareV30Request, StardeliveryTaskShareV30Response } from "../models";


export class StardeliveryTaskShareV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskSharePost(request: StardeliveryTaskShareV30Request): Promise<StardeliveryTaskShareV30Response> {
    const response = await this.openApiV30StardeliveryTaskSharePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskSharePostWithHttpInfo(request: StardeliveryTaskShareV30Request): Promise<ApiResponse<StardeliveryTaskShareV30Response>> {
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskShareV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task/share/",
      queryParams: [

      ],
      body: request
    });
  }
}


