// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_operation_log_list.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OperationLogListGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface OperationLogListApiGetRequest {
  accountId: number | string;
  operationObjectType: string;
  startDate: string;
  endDate: string;
  page: number;
  pageSize: number;
  objectId?: number | string;
  operatorPlatformList?: unknown;
  operationActionList?: unknown;
  fields?: unknown;
}


export class OperationLogListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: OperationLogListApiGetRequest): Promise<OperationLogListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: OperationLogListApiGetRequest): Promise<ApiResponse<OperationLogListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.operationObjectType == null) {
      throw new ApiException("Missing the required parameter 'operationObjectType' when calling get");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling get");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<OperationLogListGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/operation_log_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "operation_object_type", value: request.operationObjectType },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "object_id", value: request.objectId },
        { name: "operator_platform_list", value: request.operatorPlatformList, collectionFormat: "multi" },
        { name: "operation_action_list", value: request.operationActionList, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


