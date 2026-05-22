// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OcProjectRejectReasonGetV30Response } from "../models";


export class OcProjectRejectReasonGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectRejectReasonGetGet(advertiserId: number, projectId: number, page: number, pageSize: number): Promise<OcProjectRejectReasonGetV30Response> {
    const response = await this.openApiV30OcProjectRejectReasonGetGetWithHttpInfo(advertiserId, projectId, page, pageSize);
    return response.data;
  }

  async openApiV30OcProjectRejectReasonGetGetWithHttpInfo(advertiserId: number, projectId: number, page: number, pageSize: number): Promise<ApiResponse<OcProjectRejectReasonGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30OcProjectRejectReasonGetGet");
    }

    if (projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApiV30OcProjectRejectReasonGetGet");
    }
    return this.apiClient.requestWithHttpInfo<OcProjectRejectReasonGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/oc_project/reject_reason/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "project_id", value: projectId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


