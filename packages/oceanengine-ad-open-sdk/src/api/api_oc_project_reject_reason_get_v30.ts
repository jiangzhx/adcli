// Generated from oceanengine/ad_open_sdk_go api/api_oc_project_reject_reason_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectRejectReasonGetV30Response } from "../models/index";


export interface OcProjectRejectReasonGetV30ApiOpenApiV30OcProjectRejectReasonGetGetRequest {
  advertiserId: number | string;
  projectId: number | string;
  page?: number;
  pageSize?: number;
}

export class OcProjectRejectReasonGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectRejectReasonGetGet(request: OcProjectRejectReasonGetV30ApiOpenApiV30OcProjectRejectReasonGetGetRequest): Promise<OcProjectRejectReasonGetV30Response> {
    const response = await this.openApiV30OcProjectRejectReasonGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectRejectReasonGetGetWithHttpInfo(request: OcProjectRejectReasonGetV30ApiOpenApiV30OcProjectRejectReasonGetGetRequest): Promise<ApiResponse<OcProjectRejectReasonGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.projectId == null) {
      throw new ApiException("projectId is required and must be specified");
    }

    if (request.projectId != null && Number(request.projectId) < 1) {
      throw new ApiException("projectId must be greater than 1");
    }
    return this.apiClient.requestWithHttpInfo<OcProjectRejectReasonGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/oc_project/reject_reason/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_id", value: request.projectId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


