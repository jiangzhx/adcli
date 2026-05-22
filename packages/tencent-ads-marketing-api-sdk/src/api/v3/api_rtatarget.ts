// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_rtatarget.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RtatargetAddRequest, RtatargetDeleteRequest, RtatargetGetRequest, RtatargetGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface RtatargetApiAddRequest {
  data: RtatargetAddRequest;
}

export interface RtatargetApiDeleteRequest {
  data: RtatargetDeleteRequest;
}

export interface RtatargetApiGetRequest {
  data: RtatargetGetRequest;
}


export class RtatargetApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: RtatargetApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: RtatargetApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/rtatarget/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: RtatargetApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: RtatargetApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/rtatarget/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: RtatargetApiGetRequest): Promise<RtatargetGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: RtatargetApiGetRequest): Promise<ApiResponse<RtatargetGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtatargetGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/rtatarget/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


