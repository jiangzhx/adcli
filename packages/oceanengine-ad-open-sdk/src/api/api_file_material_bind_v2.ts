// Generated from oceanengine/ad_open_sdk_go api/api_file_material_bind_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileMaterialBindV2Request, FileMaterialBindV2Response } from "../models/index";


export interface FileMaterialBindV2ApiOpenApi2FileMaterialBindPostRequest {
  fileMaterialBindV2Request?: FileMaterialBindV2Request;
}

export class FileMaterialBindV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileMaterialBindPost(request: FileMaterialBindV2ApiOpenApi2FileMaterialBindPostRequest): Promise<FileMaterialBindV2Response> {
    const response = await this.openApi2FileMaterialBindPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileMaterialBindPostWithHttpInfo(request: FileMaterialBindV2ApiOpenApi2FileMaterialBindPostRequest): Promise<ApiResponse<FileMaterialBindV2Response>> {

    return this.apiClient.requestWithHttpInfo<FileMaterialBindV2Response>({
      method: "POST",
      path: "/open_api/2/file/material/bind/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileMaterialBindV2Request
    });
  }
}


