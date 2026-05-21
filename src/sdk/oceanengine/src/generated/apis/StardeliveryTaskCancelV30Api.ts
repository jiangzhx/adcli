// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StardeliveryTaskCancelV30Request, StardeliveryTaskCancelV30Response } from "../models";


export class StardeliveryTaskCancelV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskCancelPost(stardeliveryTaskCancelV30Request: StardeliveryTaskCancelV30Request): Promise<StardeliveryTaskCancelV30Response> {
    const response = await this.openApiV30StardeliveryTaskCancelPostWithHttpInfo(stardeliveryTaskCancelV30Request);
    return response.data;
  }

  async openApiV30StardeliveryTaskCancelPostWithHttpInfo(stardeliveryTaskCancelV30Request: StardeliveryTaskCancelV30Request): Promise<ApiResponse<StardeliveryTaskCancelV30Response>> {

    return this.apiClient.requestWithHttpInfo<StardeliveryTaskCancelV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task/cancel/",
      queryParams: [

      ],
      body: stardeliveryTaskCancelV30Request
    });
  }
}


