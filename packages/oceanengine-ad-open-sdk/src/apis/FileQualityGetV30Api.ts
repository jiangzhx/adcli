// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileQualityGetV30Response } from "../models";


export interface OpenApiV30FileQualityGetGetRequest {
  advertiserId: number;
  materialIds: number[];
}

export class FileQualityGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileQualityGetGet(request: OpenApiV30FileQualityGetGetRequest): Promise<FileQualityGetV30Response> {
    const response = await this.openApiV30FileQualityGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FileQualityGetGetWithHttpInfo(request: OpenApiV30FileQualityGetGetRequest): Promise<ApiResponse<FileQualityGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30FileQualityGetGet");
    }

    if (request.materialIds == null) {
      throw new ApiException("Missing the required parameter 'materialIds' when calling openApiV30FileQualityGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileQualityGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/quality/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_ids", value: request.materialIds, collectionFormat: "csv" }
      ]
    });
  }
}


