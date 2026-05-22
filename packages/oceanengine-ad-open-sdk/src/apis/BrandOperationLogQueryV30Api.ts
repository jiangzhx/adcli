// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandOperationLogQueryV30Fields, BrandOperationLogQueryV30ObjectType, BrandOperationLogQueryV30Page, BrandOperationLogQueryV30Response } from "../models";


export class BrandOperationLogQueryV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandOperationLogQueryGet(advertiserId: number, objectId: number, objectType: BrandOperationLogQueryV30ObjectType, fields: BrandOperationLogQueryV30Fields[], startDate: string, endDate: string, page: BrandOperationLogQueryV30Page): Promise<BrandOperationLogQueryV30Response> {
    const response = await this.openApiV30BrandOperationLogQueryGetWithHttpInfo(advertiserId, objectId, objectType, fields, startDate, endDate, page);
    return response.data;
  }

  async openApiV30BrandOperationLogQueryGetWithHttpInfo(advertiserId: number, objectId: number, objectType: BrandOperationLogQueryV30ObjectType, fields: BrandOperationLogQueryV30Fields[], startDate: string, endDate: string, page: BrandOperationLogQueryV30Page): Promise<ApiResponse<BrandOperationLogQueryV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandOperationLogQueryGet");
    }

    if (objectId == null) {
      throw new ApiException("Missing the required parameter 'objectId' when calling openApiV30BrandOperationLogQueryGet");
    }

    if (objectType == null) {
      throw new ApiException("Missing the required parameter 'objectType' when calling openApiV30BrandOperationLogQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandOperationLogQueryV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/operation_log/query/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "object_id", value: objectId },
        { name: "object_type", value: objectType },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "page", value: page },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


