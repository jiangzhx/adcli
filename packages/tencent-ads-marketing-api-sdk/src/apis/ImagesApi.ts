// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ImagesAddResponseData, ImagesDeleteRequest, ImagesDeleteResponseData, ImagesGetResponseData, ImagesUpdateRequest, ImagesUpdateResponseData } from "../models";

export interface ImagesApiAddRequest {
  accountId: number | string;
  uploadType: string;
  signature: string;
  file?: Blob;
  bytes?: string;
  imageUsage?: string;
  description?: string;
  resizeWidth?: number;
  resizeHeight?: number;
  resizeFileSize?: number;
}

export interface ImagesApiDeleteRequest {
  data: ImagesDeleteRequest;
}

export interface ImagesApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface ImagesApiUpdateRequest {
  data: ImagesUpdateRequest;
}


export class ImagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ImagesApiAddRequest): Promise<ImagesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ImagesApiAddRequest): Promise<ApiResponse<ImagesAddResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.uploadType == null) {
      throw new ApiException("Missing the required parameter 'uploadType' when calling add");
    }

    if (request.signature == null) {
      throw new ApiException("Missing the required parameter 'signature' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ImagesAddResponseData>({
      method: "POST",
      path: "/images/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        upload_type: request.uploadType,
        signature: request.signature,
        bytes: request.bytes,
        image_usage: request.imageUsage,
        description: request.description,
        resize_width: request.resizeWidth,
        resize_height: request.resizeHeight,
        resize_file_size: request.resizeFileSize
      },
      files: {
        file: request.file
      }
    });
  }

  async delete(request: ImagesApiDeleteRequest): Promise<ImagesDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: ImagesApiDeleteRequest): Promise<ApiResponse<ImagesDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<ImagesDeleteResponseData>({
      method: "POST",
      path: "/images/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ImagesApiGetRequest): Promise<ImagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ImagesApiGetRequest): Promise<ApiResponse<ImagesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ImagesGetResponseData>({
      method: "GET",
      path: "/images/get",
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

  async update(request: ImagesApiUpdateRequest): Promise<ImagesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: ImagesApiUpdateRequest): Promise<ApiResponse<ImagesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ImagesUpdateResponseData>({
      method: "POST",
      path: "/images/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


