// Generated from tencentad/marketing-api-go-sdk pkg/api/api_qualifications.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QualificationsAddRequest, QualificationsAddResponseData, QualificationsDeleteRequest, QualificationsDeleteResponseData, QualificationsGetResponseData, QualificationsUpdateRequest, QualificationsUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface QualificationsApiAddRequest {
  data: QualificationsAddRequest;
}

export interface QualificationsApiDeleteRequest {
  data: QualificationsDeleteRequest;
}

export interface QualificationsApiGetRequest {
  accountId: number | string;
  qualificationType: string;
  filtering?: unknown;
  fields?: unknown;
}

export interface QualificationsApiUpdateRequest {
  data: QualificationsUpdateRequest;
}


export class QualificationsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: QualificationsApiAddRequest): Promise<QualificationsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: QualificationsApiAddRequest): Promise<ApiResponse<QualificationsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<QualificationsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/qualifications/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: QualificationsApiDeleteRequest): Promise<QualificationsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: QualificationsApiDeleteRequest): Promise<ApiResponse<QualificationsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<QualificationsDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/qualifications/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: QualificationsApiGetRequest): Promise<QualificationsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: QualificationsApiGetRequest): Promise<ApiResponse<QualificationsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.qualificationType == null) {
      throw new ApiException("Missing the required parameter 'qualificationType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<QualificationsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/qualifications/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "qualification_type", value: request.qualificationType },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: QualificationsApiUpdateRequest): Promise<QualificationsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: QualificationsApiUpdateRequest): Promise<ApiResponse<QualificationsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<QualificationsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/qualifications/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


