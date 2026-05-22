// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomTagFilesAddResponseData, CustomTagFilesGetResponseData } from "../models";

export interface CustomTagFilesApiAddRequest {
  accountId: number | string;
  userIdType: string;
  tagId: number | string;
  file: Blob;
  operationType?: string;
  openAppId?: string;
}

export interface CustomTagFilesApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class CustomTagFilesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: CustomTagFilesApiAddRequest): Promise<CustomTagFilesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: CustomTagFilesApiAddRequest): Promise<ApiResponse<CustomTagFilesAddResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.userIdType == null) {
      throw new ApiException("Missing the required parameter 'userIdType' when calling add");
    }

    if (request.tagId == null) {
      throw new ApiException("Missing the required parameter 'tagId' when calling add");
    }

    if (request.file == null) {
      throw new ApiException("Missing the required parameter 'file' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<CustomTagFilesAddResponseData>({
      method: "POST",
      path: "/custom_tag_files/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        user_id_type: request.userIdType,
        tag_id: request.tagId,
        operation_type: request.operationType,
        open_app_id: request.openAppId
      },
      files: {
        file: request.file
      }
    });
  }

  async get(request: CustomTagFilesApiGetRequest): Promise<CustomTagFilesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CustomTagFilesApiGetRequest): Promise<ApiResponse<CustomTagFilesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CustomTagFilesGetResponseData>({
      method: "GET",
      path: "/custom_tag_files/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


