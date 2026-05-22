// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotedObjectAuthorizationAddRequest, PromotedObjectAuthorizationAddResponseData, PromotedObjectAuthorizationGetResponseData } from "../models";

export interface PromotedObjectAuthorizationApiAddRequest {
  data: PromotedObjectAuthorizationAddRequest;
}

export interface PromotedObjectAuthorizationApiGetRequest {
  accountId: number | string;
  promotedObjectType: string;
  promotedObjectName?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class PromotedObjectAuthorizationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: PromotedObjectAuthorizationApiAddRequest): Promise<PromotedObjectAuthorizationAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: PromotedObjectAuthorizationApiAddRequest): Promise<ApiResponse<PromotedObjectAuthorizationAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<PromotedObjectAuthorizationAddResponseData>({
      method: "POST",
      path: "/promoted_object_authorization/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: PromotedObjectAuthorizationApiGetRequest): Promise<PromotedObjectAuthorizationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: PromotedObjectAuthorizationApiGetRequest): Promise<ApiResponse<PromotedObjectAuthorizationGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.promotedObjectType == null) {
      throw new ApiException("Missing the required parameter 'promotedObjectType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PromotedObjectAuthorizationGetResponseData>({
      method: "GET",
      path: "/promoted_object_authorization/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "promoted_object_type", value: request.promotedObjectType },
        { name: "promoted_object_name", value: request.promotedObjectName },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


