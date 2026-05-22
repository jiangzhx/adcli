// Generated from oceanengine/ad_open_sdk_go api/api_oc_project_material_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectMaterialGetV30Filtering, OcProjectMaterialGetV30Response } from "../models/index";


export interface OcProjectMaterialGetV30ApiOpenApiV30OcProjectMaterialGetGetRequest {
  advertiserId: number | string;
  projectId: number | string;
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

  async openApiV30OcProjectMaterialGetGet(request: OcProjectMaterialGetV30ApiOpenApiV30OcProjectMaterialGetGetRequest): Promise<OcProjectMaterialGetV30Response> {
    const response = await this.openApiV30OcProjectMaterialGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectMaterialGetGetWithHttpInfo(request: OcProjectMaterialGetV30ApiOpenApiV30OcProjectMaterialGetGetRequest): Promise<ApiResponse<OcProjectMaterialGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.projectId == null) {
      throw new ApiException("projectId is required and must be specified");
    }

    if (request.projectId != null && Number(request.projectId) < 1) {
      throw new ApiException("projectId must be greater than 1");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
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


