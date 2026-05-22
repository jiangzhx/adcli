// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";

export interface PropertyFilesApiAddRequest {
  accountId: number | string;
  propertySetId: number | string;
  sessionId: number | string;
  fileName: string;
  file: Blob;
}


export class PropertyFilesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: PropertyFilesApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: PropertyFilesApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.propertySetId == null) {
      throw new ApiException("Missing the required parameter 'propertySetId' when calling add");
    }

    if (request.sessionId == null) {
      throw new ApiException("Missing the required parameter 'sessionId' when calling add");
    }

    if (request.fileName == null) {
      throw new ApiException("Missing the required parameter 'fileName' when calling add");
    }

    if (request.file == null) {
      throw new ApiException("Missing the required parameter 'file' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/property_files/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        property_set_id: request.propertySetId,
        session_id: request.sessionId,
        file_name: request.fileName
      },
      files: {
        file: request.file
      }
    });
  }

}


