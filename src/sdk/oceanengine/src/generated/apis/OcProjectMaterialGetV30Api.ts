// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { OcProjectMaterialGetV30Filtering, OcProjectMaterialGetV30Response } from "../models";


export class OcProjectMaterialGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectMaterialGetGet(advertiserId: number, projectId: number, filtering: OcProjectMaterialGetV30Filtering, page: number, pageSize: number): Promise<OcProjectMaterialGetV30Response> {
    const response = await this.openApiV30OcProjectMaterialGetGetWithHttpInfo(advertiserId, projectId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30OcProjectMaterialGetGetWithHttpInfo(advertiserId: number, projectId: number, filtering: OcProjectMaterialGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<OcProjectMaterialGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30OcProjectMaterialGetGet");
    }

    if (projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApiV30OcProjectMaterialGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30OcProjectMaterialGetGet");
    }
    return this.apiClient.requestWithHttpInfo<OcProjectMaterialGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/oc_project/material/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "project_id", value: projectId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


