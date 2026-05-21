// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileQualitySubmitV30Request, FileQualitySubmitV30Response } from "../models";


export class FileQualitySubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FileQualitySubmitPost(fileQualitySubmitV30Request: FileQualitySubmitV30Request): Promise<FileQualitySubmitV30Response> {
    const response = await this.openApiV30FileQualitySubmitPostWithHttpInfo(fileQualitySubmitV30Request);
    return response.data;
  }

  async openApiV30FileQualitySubmitPostWithHttpInfo(fileQualitySubmitV30Request: FileQualitySubmitV30Request): Promise<ApiResponse<FileQualitySubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<FileQualitySubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/file/quality/submit/",
      queryParams: [

      ],
      body: fileQualitySubmitV30Request
    });
  }
}


