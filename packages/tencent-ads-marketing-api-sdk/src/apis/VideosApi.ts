// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideosAddResponseData, VideosDeleteRequest, VideosDeleteResponseData, VideosGetResponseData, VideosUpdateRequest, VideosUpdateResponseData } from "../models";

export interface VideosApiAddRequest {
  accountId: number | string;
  videoFile: Blob;
  signature: string;
  description?: string;
  adcreativeTemplateId?: number | string;
}

export interface VideosApiDeleteRequest {
  data: VideosDeleteRequest;
}

export interface VideosApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface VideosApiUpdateRequest {
  data: VideosUpdateRequest;
}


export class VideosApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: VideosApiAddRequest): Promise<VideosAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: VideosApiAddRequest): Promise<ApiResponse<VideosAddResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.videoFile == null) {
      throw new ApiException("Missing the required parameter 'videoFile' when calling add");
    }

    if (request.signature == null) {
      throw new ApiException("Missing the required parameter 'signature' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<VideosAddResponseData>({
      method: "POST",
      path: "/videos/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        signature: request.signature,
        description: request.description,
        adcreative_template_id: request.adcreativeTemplateId
      },
      files: {
        video_file: request.videoFile
      }
    });
  }

  async delete(request: VideosApiDeleteRequest): Promise<VideosDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: VideosApiDeleteRequest): Promise<ApiResponse<VideosDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<VideosDeleteResponseData>({
      method: "POST",
      path: "/videos/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: VideosApiGetRequest): Promise<VideosGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: VideosApiGetRequest): Promise<ApiResponse<VideosGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<VideosGetResponseData>({
      method: "GET",
      path: "/videos/get",
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

  async update(request: VideosApiUpdateRequest): Promise<VideosUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: VideosApiUpdateRequest): Promise<ApiResponse<VideosUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<VideosUpdateResponseData>({
      method: "POST",
      path: "/videos/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


