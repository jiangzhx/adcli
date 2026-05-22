// Generated from tencentad/marketing-api-go-sdk pkg/api/api_data_source_dispatch.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DataSourceDispatchGetResponseData, DataSourceDispatchUpdateRequest, DataSourceDispatchUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface DataSourceDispatchApiGetRequest {
  accountId: number | string;
  userActionSetId?: number | string;
  type_?: string;
  name?: string;
  scenes?: unknown;
  switchType?: string;
  accessWay?: string;
  fields?: unknown;
}

export interface DataSourceDispatchApiUpdateRequest {
  data: DataSourceDispatchUpdateRequest;
}


export class DataSourceDispatchApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: DataSourceDispatchApiGetRequest): Promise<DataSourceDispatchGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: DataSourceDispatchApiGetRequest): Promise<ApiResponse<DataSourceDispatchGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DataSourceDispatchGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/data_source_dispatch/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "user_action_set_id", value: request.userActionSetId },
        { name: "type", value: request.type_ },
        { name: "name", value: request.name },
        { name: "scenes", value: request.scenes, collectionFormat: "multi" },
        { name: "switch_type", value: request.switchType },
        { name: "access_way", value: request.accessWay },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: DataSourceDispatchApiUpdateRequest): Promise<DataSourceDispatchUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: DataSourceDispatchApiUpdateRequest): Promise<ApiResponse<DataSourceDispatchUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<DataSourceDispatchUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/data_source_dispatch/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


