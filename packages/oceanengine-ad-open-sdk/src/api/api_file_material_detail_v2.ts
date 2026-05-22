// Generated from oceanengine/ad_open_sdk_go api/api_file_material_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileMaterialDetailV2Response } from "../models/index";


export interface FileMaterialDetailV2ApiOpenApi2FileMaterialDetailGetRequest {
  advertiserId: number | string;
  materialIds: number | string[];
}

export class FileMaterialDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileMaterialDetailGet(request: FileMaterialDetailV2ApiOpenApi2FileMaterialDetailGetRequest): Promise<FileMaterialDetailV2Response> {
    const response = await this.openApi2FileMaterialDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileMaterialDetailGetWithHttpInfo(request: FileMaterialDetailV2ApiOpenApi2FileMaterialDetailGetRequest): Promise<ApiResponse<FileMaterialDetailV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileMaterialDetailGet");
    }

    if (request.materialIds == null) {
      throw new ApiException("Missing the required parameter 'materialIds' when calling openApi2FileMaterialDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<FileMaterialDetailV2Response>({
      method: "GET",
      path: "/open_api/2/file/material/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_ids", value: request.materialIds }
      ]
    });
  }
}


