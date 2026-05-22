// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DataSetAddRequest, DataSetAddResponseData, DataSetGetResponseData } from "../models";

export interface DataSetApiAddRequest {
  data: DataSetAddRequest;
}

export interface DataSetApiGetRequest {
  accountId: number | string;
  userActionSetId?: number | string;
  dataSetId?: number | string;
  envType?: number;
  fields?: unknown;
}


export class DataSetApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: DataSetApiAddRequest): Promise<DataSetAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: DataSetApiAddRequest): Promise<ApiResponse<DataSetAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<DataSetAddResponseData>({
      method: "POST",
      path: "/data_set/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: DataSetApiGetRequest): Promise<DataSetGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: DataSetApiGetRequest): Promise<ApiResponse<DataSetGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DataSetGetResponseData>({
      method: "GET",
      path: "/data_set/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "user_action_set_id", value: request.userActionSetId },
        { name: "data_set_id", value: request.dataSetId },
        { name: "env_type", value: request.envType },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


