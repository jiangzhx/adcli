// Generated from oceanengine/ad_open_sdk_go api/api_file_quality_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileQualityGetV30Response } from "../models/index";


export interface FileQualityGetV30ApiOpenApiV30FileQualityGetGetRequest {
  advertiserId: number | string;
  materialIds: (number | string)[];
}

export class FileQualityGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileQualityGetGet(request: FileQualityGetV30ApiOpenApiV30FileQualityGetGetRequest): Promise<FileQualityGetV30Response> {
    const response = await this.openApiV30FileQualityGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FileQualityGetGetWithHttpInfo(request: FileQualityGetV30ApiOpenApiV30FileQualityGetGetRequest): Promise<ApiResponse<FileQualityGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.materialIds == null) {
      throw new ApiException("materialIds is required and must be specified");
    }

    if (request.materialIds != null && request.materialIds.length < 1) {
      throw new ApiException("materialIds must have at least 1 elements");
    }

    if (request.materialIds != null && request.materialIds.length > 50) {
      throw new ApiException("materialIds must have less than 50 elements");
    }
    return this.apiClient.requestWithHttpInfo<FileQualityGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/quality/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_ids", value: request.materialIds }
      ]
    });
  }
}


