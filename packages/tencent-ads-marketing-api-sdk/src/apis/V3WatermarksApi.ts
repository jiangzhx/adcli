// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WatermarksAddRequest, WatermarksAddResponseData, WatermarksGetResponseData } from "../models";

export interface V3WatermarksApiAddRequest {
  data: WatermarksAddRequest;
}

export interface V3WatermarksApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3WatermarksApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3WatermarksApiAddRequest): Promise<WatermarksAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3WatermarksApiAddRequest): Promise<ApiResponse<WatermarksAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WatermarksAddResponseData>({
      method: "POST",
      path: "/watermarks/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3WatermarksApiGetRequest): Promise<WatermarksGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WatermarksApiGetRequest): Promise<ApiResponse<WatermarksGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<WatermarksGetResponseData>({
      method: "GET",
      path: "/watermarks/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "organization_id", value: request.organizationId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


