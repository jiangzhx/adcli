// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileAutoGenerateSourceGetV2MaterialsInner, FileAutoGenerateSourceGetV2Response } from "../models";


export interface OpenApi2FileAutoGenerateSourceGetGetRequest {
  advertiserId?: number;
  materials?: FileAutoGenerateSourceGetV2MaterialsInner[];
}

export class FileAutoGenerateSourceGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileAutoGenerateSourceGetGet(request: OpenApi2FileAutoGenerateSourceGetGetRequest): Promise<FileAutoGenerateSourceGetV2Response> {
    const response = await this.openApi2FileAutoGenerateSourceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileAutoGenerateSourceGetGetWithHttpInfo(request: OpenApi2FileAutoGenerateSourceGetGetRequest): Promise<ApiResponse<FileAutoGenerateSourceGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileAutoGenerateSourceGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/auto_generate_source/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "materials", value: request.materials, collectionFormat: "csv" }
      ]
    });
  }
}


