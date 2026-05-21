// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StardeliveryTaskPostEndTimeUpdateV30Request, StardeliveryTaskPostEndTimeUpdateV30Response } from "../models";


export class StardeliveryTaskPostEndTimeUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskPostEndTimeUpdatePost(stardeliveryTaskPostEndTimeUpdateV30Request: StardeliveryTaskPostEndTimeUpdateV30Request): Promise<StardeliveryTaskPostEndTimeUpdateV30Response> {
    const response = await this.openApiV30StardeliveryTaskPostEndTimeUpdatePostWithHttpInfo(stardeliveryTaskPostEndTimeUpdateV30Request);
    return response.data;
  }

  async openApiV30StardeliveryTaskPostEndTimeUpdatePostWithHttpInfo(stardeliveryTaskPostEndTimeUpdateV30Request: StardeliveryTaskPostEndTimeUpdateV30Request): Promise<ApiResponse<StardeliveryTaskPostEndTimeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<StardeliveryTaskPostEndTimeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task/post_end_time/update/",
      queryParams: [

      ],
      body: stardeliveryTaskPostEndTimeUpdateV30Request
    });
  }
}


