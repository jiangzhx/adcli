// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StardeliveryTaskUnshareV30Request, StardeliveryTaskUnshareV30Response } from "../models";


export class StardeliveryTaskUnshareV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskUnsharePost(stardeliveryTaskUnshareV30Request: StardeliveryTaskUnshareV30Request): Promise<StardeliveryTaskUnshareV30Response> {
    const response = await this.openApiV30StardeliveryTaskUnsharePostWithHttpInfo(stardeliveryTaskUnshareV30Request);
    return response.data;
  }

  async openApiV30StardeliveryTaskUnsharePostWithHttpInfo(stardeliveryTaskUnshareV30Request: StardeliveryTaskUnshareV30Request): Promise<ApiResponse<StardeliveryTaskUnshareV30Response>> {

    return this.apiClient.requestWithHttpInfo<StardeliveryTaskUnshareV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task/unshare/",
      queryParams: [

      ],
      body: stardeliveryTaskUnshareV30Request
    });
  }
}


