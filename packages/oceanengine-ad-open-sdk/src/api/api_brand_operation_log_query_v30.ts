// Generated from oceanengine/ad_open_sdk_go api/api_brand_operation_log_query_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandOperationLogQueryV30Fields, BrandOperationLogQueryV30ObjectType, BrandOperationLogQueryV30Page, BrandOperationLogQueryV30Response } from "../models/index";


export interface BrandOperationLogQueryV30ApiOpenApiV30BrandOperationLogQueryGetRequest {
  advertiserId: number | string;
  objectId: number | string;
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

  async openApiV30BrandOperationLogQueryGet(request: BrandOperationLogQueryV30ApiOpenApiV30BrandOperationLogQueryGetRequest): Promise<BrandOperationLogQueryV30Response> {
    const response = await this.openApiV30BrandOperationLogQueryGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandOperationLogQueryGetWithHttpInfo(request: BrandOperationLogQueryV30ApiOpenApiV30BrandOperationLogQueryGetRequest): Promise<ApiResponse<BrandOperationLogQueryV30Response>> {
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
        { name: "fields", value: request.fields },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "page", value: request.page }
      ]
    });
  }
}


