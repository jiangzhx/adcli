// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_watermarks.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WatermarksAddRequest, WatermarksAddResponseData, WatermarksGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WatermarksApiAddRequest {
  data: WatermarksAddRequest;
}

export interface WatermarksApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class WatermarksApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WatermarksApiAddRequest): Promise<WatermarksAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WatermarksApiAddRequest): Promise<ApiResponse<WatermarksAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WatermarksAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/watermarks/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: WatermarksApiGetRequest): Promise<WatermarksGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WatermarksApiGetRequest): Promise<ApiResponse<WatermarksGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<WatermarksGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


