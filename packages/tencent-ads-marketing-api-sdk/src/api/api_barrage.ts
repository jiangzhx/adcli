// Generated from tencentad/marketing-api-go-sdk pkg/api/api_barrage.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BarrageAddRequest, BarrageAddResponseData, BarrageGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface BarrageApiAddRequest {
  data: BarrageAddRequest;
}

export interface BarrageApiGetRequest {
  accountId: number | string;
  idList?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class BarrageApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: BarrageApiAddRequest): Promise<BarrageAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: BarrageApiAddRequest): Promise<ApiResponse<BarrageAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<BarrageAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/barrage/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: BarrageApiGetRequest): Promise<BarrageGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BarrageApiGetRequest): Promise<ApiResponse<BarrageGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BarrageGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/barrage/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "id_list", value: request.idList, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


