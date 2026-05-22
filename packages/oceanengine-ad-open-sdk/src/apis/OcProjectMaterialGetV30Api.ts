// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OcProjectMaterialGetV30Filtering, OcProjectMaterialGetV30Response } from "../models";


export interface OpenApiV30OcProjectMaterialGetGetRequest {
  advertiserId: number;
  projectId: number;
  filtering: OcProjectMaterialGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class OcProjectMaterialGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectMaterialGetGet(request: OpenApiV30OcProjectMaterialGetGetRequest): Promise<OcProjectMaterialGetV30Response> {
    const response = await this.openApiV30OcProjectMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectMaterialGetGetWithHttpInfo(request: OpenApiV30OcProjectMaterialGetGetRequest): Promise<ApiResponse<OcProjectMaterialGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30OcProjectMaterialGetGet");
    }

    if (request.projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApiV30OcProjectMaterialGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30OcProjectMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<OcProjectMaterialGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/oc_project/material/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_id", value: request.projectId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


