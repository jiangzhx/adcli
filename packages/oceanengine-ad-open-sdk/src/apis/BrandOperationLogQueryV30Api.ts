// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandOperationLogQueryV30Fields, BrandOperationLogQueryV30ObjectType, BrandOperationLogQueryV30Page, BrandOperationLogQueryV30Response } from "../models";


export interface OpenApiV30BrandOperationLogQueryGetRequest {
  advertiserId: number;
  objectId: number;
  objectType: BrandOperationLogQueryV30ObjectType;
  fields?: BrandOperationLogQueryV30Fields[];
  startDate?: string;
  endDate?: string;
  page?: BrandOperationLogQueryV30Page;
}

export class BrandOperationLogQueryV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandOperationLogQueryGet(request: OpenApiV30BrandOperationLogQueryGetRequest): Promise<BrandOperationLogQueryV30Response> {
    const response = await this.openApiV30BrandOperationLogQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandOperationLogQueryGetWithHttpInfo(request: OpenApiV30BrandOperationLogQueryGetRequest): Promise<ApiResponse<BrandOperationLogQueryV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandOperationLogQueryGet");
    }

    if (request.objectId == null) {
      throw new ApiException("Missing the required parameter 'objectId' when calling openApiV30BrandOperationLogQueryGet");
    }

    if (request.objectType == null) {
      throw new ApiException("Missing the required parameter 'objectType' when calling openApiV30BrandOperationLogQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandOperationLogQueryV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/operation_log/query/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "object_id", value: request.objectId },
        { name: "object_type", value: request.objectType },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "page", value: request.page }
      ]
    });
  }
}


