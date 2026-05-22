// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_rtatarget_bind.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RtatargetBindAddRequest, RtatargetBindAddResponseData, RtatargetBindDeleteRequest, RtatargetBindDeleteResponseData, RtatargetBindGetRequest, RtatargetBindGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface RtatargetBindApiAddRequest {
  data: RtatargetBindAddRequest;
}

export interface RtatargetBindApiDeleteRequest {
  data: RtatargetBindDeleteRequest;
}

export interface RtatargetBindApiGetRequest {
  data: RtatargetBindGetRequest;
}


export class RtatargetBindApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: RtatargetBindApiAddRequest): Promise<RtatargetBindAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: RtatargetBindApiAddRequest): Promise<ApiResponse<RtatargetBindAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<RtatargetBindAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/rtatarget_bind/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: RtatargetBindApiDeleteRequest): Promise<RtatargetBindDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: RtatargetBindApiDeleteRequest): Promise<ApiResponse<RtatargetBindDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<RtatargetBindDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/rtatarget_bind/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: RtatargetBindApiGetRequest): Promise<RtatargetBindGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: RtatargetBindApiGetRequest): Promise<ApiResponse<RtatargetBindGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtatargetBindGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/rtatarget_bind/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


