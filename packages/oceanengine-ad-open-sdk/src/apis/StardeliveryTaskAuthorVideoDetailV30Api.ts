// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskAuthorVideoDetailV30Filtering, StardeliveryTaskAuthorVideoDetailV30Response, StardeliveryTaskAuthorVideoDetailV30StarTaskVideoRange } from "../models";


export class StardeliveryTaskAuthorVideoDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskAuthorVideoDetailGet(advertiserId: number, starTaskId: number, awemeId: string, starTaskVideoRange: StardeliveryTaskAuthorVideoDetailV30StarTaskVideoRange, filtering: StardeliveryTaskAuthorVideoDetailV30Filtering, cursor: number, count: number): Promise<StardeliveryTaskAuthorVideoDetailV30Response> {
    const response = await this.openApiV30StardeliveryTaskAuthorVideoDetailGetWithHttpInfo(advertiserId, starTaskId, awemeId, starTaskVideoRange, filtering, cursor, count);
    return response.data;
  }

  async openApiV30StardeliveryTaskAuthorVideoDetailGetWithHttpInfo(advertiserId: number, starTaskId: number, awemeId: string, starTaskVideoRange: StardeliveryTaskAuthorVideoDetailV30StarTaskVideoRange, filtering: StardeliveryTaskAuthorVideoDetailV30Filtering, cursor: number, count: number): Promise<ApiResponse<StardeliveryTaskAuthorVideoDetailV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskAuthorVideoDetailGet");
    }

    if (starTaskId == null) {
      throw new ApiException("Missing the required parameter 'starTaskId' when calling openApiV30StardeliveryTaskAuthorVideoDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskAuthorVideoDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task_author_video/detail/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "star_task_id", value: starTaskId },
        { name: "star_task_video_range", value: starTaskVideoRange },
        { name: "filtering", value: filtering },
        { name: "cursor", value: cursor },
        { name: "count", value: count }
      ]
    });
  }
}


