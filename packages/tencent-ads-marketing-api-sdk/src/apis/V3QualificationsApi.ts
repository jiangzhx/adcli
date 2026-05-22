// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QualificationsAddRequest, QualificationsAddResponseData, QualificationsDeleteRequest, QualificationsDeleteResponseData, QualificationsGetResponseData, QualificationsUpdateRequest, QualificationsUpdateResponseData } from "../models";

export interface V3QualificationsApiAddRequest {
  data: QualificationsAddRequest;
}

export interface V3QualificationsApiDeleteRequest {
  data: QualificationsDeleteRequest;
}

export interface V3QualificationsApiGetRequest {
  accountId: number | string;
  qualificationType: string;
  filtering?: unknown;
  fields?: unknown;
}

export interface V3QualificationsApiUpdateRequest {
  data: QualificationsUpdateRequest;
}


export class V3QualificationsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3QualificationsApiAddRequest): Promise<QualificationsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3QualificationsApiAddRequest): Promise<ApiResponse<QualificationsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<QualificationsAddResponseData>({
      method: "POST",
      path: "/qualifications/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3QualificationsApiDeleteRequest): Promise<QualificationsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3QualificationsApiDeleteRequest): Promise<ApiResponse<QualificationsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<QualificationsDeleteResponseData>({
      method: "POST",
      path: "/qualifications/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3QualificationsApiGetRequest): Promise<QualificationsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3QualificationsApiGetRequest): Promise<ApiResponse<QualificationsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.qualificationType == null) {
      throw new ApiException("Missing the required parameter 'qualificationType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<QualificationsGetResponseData>({
      method: "GET",
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

  async update(request: V3QualificationsApiUpdateRequest): Promise<QualificationsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3QualificationsApiUpdateRequest): Promise<ApiResponse<QualificationsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<QualificationsUpdateResponseData>({
      method: "POST",
      path: "/qualifications/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


