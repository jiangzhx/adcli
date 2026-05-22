// Generated from oceanengine/ad_open_sdk_go api/api_stardelivery_task_author_video_audit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StardeliveryTaskAuthorVideoAuditV30Request, StardeliveryTaskAuthorVideoAuditV30Response } from "../models/index";


export interface StardeliveryTaskAuthorVideoAuditV30ApiOpenApiV30StardeliveryTaskAuthorVideoAuditPostRequest {
  stardeliveryTaskAuthorVideoAuditV30Request?: StardeliveryTaskAuthorVideoAuditV30Request;
}

export class StardeliveryTaskAuthorVideoAuditV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskAuthorVideoAuditPost(request: StardeliveryTaskAuthorVideoAuditV30ApiOpenApiV30StardeliveryTaskAuthorVideoAuditPostRequest): Promise<StardeliveryTaskAuthorVideoAuditV30Response> {
    const response = await this.openApiV30StardeliveryTaskAuthorVideoAuditPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskAuthorVideoAuditPostWithHttpInfo(request: StardeliveryTaskAuthorVideoAuditV30ApiOpenApiV30StardeliveryTaskAuthorVideoAuditPostRequest): Promise<ApiResponse<StardeliveryTaskAuthorVideoAuditV30Response>> {

    return this.apiClient.requestWithHttpInfo<StardeliveryTaskAuthorVideoAuditV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task_author_video/audit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.stardeliveryTaskAuthorVideoAuditV30Request
    });
  }
}


