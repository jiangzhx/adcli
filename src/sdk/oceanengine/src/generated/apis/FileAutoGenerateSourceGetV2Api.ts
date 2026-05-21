// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileAutoGenerateSourceGetV2MaterialsInner, FileAutoGenerateSourceGetV2Response } from "../models";


export class FileAutoGenerateSourceGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileAutoGenerateSourceGetGet(advertiserId: number, materials: FileAutoGenerateSourceGetV2MaterialsInner[]): Promise<FileAutoGenerateSourceGetV2Response> {
    const response = await this.openApi2FileAutoGenerateSourceGetGetWithHttpInfo(advertiserId, materials);
    return response.data;
  }

  async openApi2FileAutoGenerateSourceGetGetWithHttpInfo(advertiserId: number, materials: FileAutoGenerateSourceGetV2MaterialsInner[]): Promise<ApiResponse<FileAutoGenerateSourceGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileAutoGenerateSourceGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/auto_generate_source/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "materials", value: materials, collectionFormat: "multi" }
      ]
    });
  }
}


