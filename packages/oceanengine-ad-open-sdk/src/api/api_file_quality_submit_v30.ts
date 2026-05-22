// Generated from oceanengine/ad_open_sdk_go api/api_file_quality_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileQualitySubmitV30Request, FileQualitySubmitV30Response } from "../models/index";


export interface FileQualitySubmitV30ApiOpenApiV30FileQualitySubmitPostRequest {
  fileQualitySubmitV30Request?: FileQualitySubmitV30Request;
}

export class FileQualitySubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileQualitySubmitPost(request: FileQualitySubmitV30ApiOpenApiV30FileQualitySubmitPostRequest): Promise<FileQualitySubmitV30Response> {
    const response = await this.openApiV30FileQualitySubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FileQualitySubmitPostWithHttpInfo(request: FileQualitySubmitV30ApiOpenApiV30FileQualitySubmitPostRequest): Promise<ApiResponse<FileQualitySubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<FileQualitySubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/file/quality/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.fileQualitySubmitV30Request
    });
  }
}


