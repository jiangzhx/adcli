// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileQualityGetV30Response } from "../models";


export class FileQualityGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileQualityGetGet(advertiserId: number, materialIds: number[]): Promise<FileQualityGetV30Response> {
    const response = await this.openApiV30FileQualityGetGetWithHttpInfo(advertiserId, materialIds);
    return response.data;
  }

  async openApiV30FileQualityGetGetWithHttpInfo(advertiserId: number, materialIds: number[]): Promise<ApiResponse<FileQualityGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30FileQualityGetGet");
    }

    if (materialIds == null) {
      throw new ApiException("Missing the required parameter 'materialIds' when calling openApiV30FileQualityGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileQualityGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/quality/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "material_ids", value: materialIds, collectionFormat: "csv" }
      ]
    });
  }
}


