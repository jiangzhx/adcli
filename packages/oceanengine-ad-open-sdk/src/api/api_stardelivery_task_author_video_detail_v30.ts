// Generated from oceanengine/ad_open_sdk_go api/api_stardelivery_task_author_video_detail_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StardeliveryTaskAuthorVideoDetailV30Filtering, StardeliveryTaskAuthorVideoDetailV30Response, StardeliveryTaskAuthorVideoDetailV30StarTaskVideoRange } from "../models/index";


export interface StardeliveryTaskAuthorVideoDetailV30ApiOpenApiV30StardeliveryTaskAuthorVideoDetailGetRequest {
  advertiserId: number | string;
  starTaskId: number | string;
  awemeId?: string;
  starTaskVideoRange?: StardeliveryTaskAuthorVideoDetailV30StarTaskVideoRange;
  filtering?: StardeliveryTaskAuthorVideoDetailV30Filtering;
  cursor?: number;
  count?: number;
}

export class StardeliveryTaskAuthorVideoDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskAuthorVideoDetailGet(request: StardeliveryTaskAuthorVideoDetailV30ApiOpenApiV30StardeliveryTaskAuthorVideoDetailGetRequest): Promise<StardeliveryTaskAuthorVideoDetailV30Response> {
    const response = await this.openApiV30StardeliveryTaskAuthorVideoDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskAuthorVideoDetailGetWithHttpInfo(request: StardeliveryTaskAuthorVideoDetailV30ApiOpenApiV30StardeliveryTaskAuthorVideoDetailGetRequest): Promise<ApiResponse<StardeliveryTaskAuthorVideoDetailV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskAuthorVideoDetailGet");
    }

    if (request.starTaskId == null) {
      throw new ApiException("Missing the required parameter 'starTaskId' when calling openApiV30StardeliveryTaskAuthorVideoDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskAuthorVideoDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task_author_video/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "star_task_id", value: request.starTaskId },
        { name: "star_task_video_range", value: request.starTaskVideoRange },
        { name: "filtering", value: request.filtering },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


