// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideosAddResponseData, VideosDeleteRequest, VideosDeleteResponseData, VideosGetResponseData, VideosUpdateRequest, VideosUpdateResponseData } from "../models";

export interface V3VideosApiAddRequest {
  videoFile: Blob;
  signature: string;
  accountId?: number | string;
  organizationId?: number | string;
  description?: string;
  adcreativeTemplateId?: number | string;
}

export interface V3VideosApiDeleteRequest {
  data: VideosDeleteRequest;
}

export interface V3VideosApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  labelId?: number | string;
  businessScenario?: number;
  fields?: unknown;
}

export interface V3VideosApiUpdateRequest {
  data: VideosUpdateRequest;
}


export class V3VideosApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3VideosApiAddRequest): Promise<VideosAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3VideosApiAddRequest): Promise<ApiResponse<VideosAddResponseData>> {
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
        organization_id: request.organizationId,
        signature: request.signature,
        description: request.description,
        adcreative_template_id: request.adcreativeTemplateId
      },
      files: {
        video_file: request.videoFile
      }
    });
  }

  async delete(request: V3VideosApiDeleteRequest): Promise<VideosDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3VideosApiDeleteRequest): Promise<ApiResponse<VideosDeleteResponseData>> {
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

  async get(request: V3VideosApiGetRequest): Promise<VideosGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3VideosApiGetRequest): Promise<ApiResponse<VideosGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<VideosGetResponseData>({
      method: "GET",
      path: "/videos/get",
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

  async update(request: V3VideosApiUpdateRequest): Promise<VideosUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3VideosApiUpdateRequest): Promise<ApiResponse<VideosUpdateResponseData>> {
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


