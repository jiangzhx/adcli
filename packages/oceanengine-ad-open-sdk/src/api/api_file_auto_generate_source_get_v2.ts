// Generated from oceanengine/ad_open_sdk_go api/api_file_auto_generate_source_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileAutoGenerateSourceGetV2MaterialsInner, FileAutoGenerateSourceGetV2Response } from "../models/index";


export interface FileAutoGenerateSourceGetV2ApiOpenApi2FileAutoGenerateSourceGetGetRequest {
  advertiserId?: number | string;
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

  async openApi2FileAutoGenerateSourceGetGet(request: FileAutoGenerateSourceGetV2ApiOpenApi2FileAutoGenerateSourceGetGetRequest): Promise<FileAutoGenerateSourceGetV2Response> {
    const response = await this.openApi2FileAutoGenerateSourceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileAutoGenerateSourceGetGetWithHttpInfo(request: FileAutoGenerateSourceGetV2ApiOpenApi2FileAutoGenerateSourceGetGetRequest): Promise<ApiResponse<FileAutoGenerateSourceGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileAutoGenerateSourceGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/auto_generate_source/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "materials", value: request.materials }
      ]
    });
  }
}


