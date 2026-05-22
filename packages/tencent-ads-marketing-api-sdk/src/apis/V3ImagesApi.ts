// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ImagesAddResponseData, ImagesDeleteRequest, ImagesDeleteResponseData, ImagesGetResponseData, ImagesUpdateRequest, ImagesUpdateResponseData } from "../models";

export interface V3ImagesApiAddRequest {
  uploadType: string;
  signature: string;
  accountId?: number | string;
  organizationId?: number | string;
  file?: Blob;
  bytes?: string;
  imageUsage?: string;
  description?: string;
  resizeWidth?: number;
  resizeHeight?: number;
  resizeFileSize?: number;
}

export interface V3ImagesApiDeleteRequest {
  data: ImagesDeleteRequest;
}

export interface V3ImagesApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  labelId?: number | string;
  businessScenario?: number;
  fields?: unknown;
}

export interface V3ImagesApiUpdateRequest {
  data: ImagesUpdateRequest;
}


export class V3ImagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3ImagesApiAddRequest): Promise<ImagesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3ImagesApiAddRequest): Promise<ApiResponse<ImagesAddResponseData>> {
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
        organization_id: request.organizationId,
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

  async delete(request: V3ImagesApiDeleteRequest): Promise<ImagesDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3ImagesApiDeleteRequest): Promise<ApiResponse<ImagesDeleteResponseData>> {
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

  async get(request: V3ImagesApiGetRequest): Promise<ImagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ImagesApiGetRequest): Promise<ApiResponse<ImagesGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<ImagesGetResponseData>({
      method: "GET",
      path: "/images/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "organization_id", value: request.organizationId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "label_id", value: request.labelId },
        { name: "business_scenario", value: request.businessScenario },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: V3ImagesApiUpdateRequest): Promise<ImagesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3ImagesApiUpdateRequest): Promise<ApiResponse<ImagesUpdateResponseData>> {
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


