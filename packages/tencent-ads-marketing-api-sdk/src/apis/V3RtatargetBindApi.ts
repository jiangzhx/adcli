// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtatargetBindAddRequest, RtatargetBindAddResponseData, RtatargetBindDeleteRequest, RtatargetBindDeleteResponseData, RtatargetBindGetRequest, RtatargetBindGetResponseData } from "../models";

export interface V3RtatargetBindApiAddRequest {
  data: RtatargetBindAddRequest;
}

export interface V3RtatargetBindApiDeleteRequest {
  data: RtatargetBindDeleteRequest;
}

export interface V3RtatargetBindApiGetRequest {
  data: RtatargetBindGetRequest;
}


export class V3RtatargetBindApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3RtatargetBindApiAddRequest): Promise<RtatargetBindAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3RtatargetBindApiAddRequest): Promise<ApiResponse<RtatargetBindAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<RtatargetBindAddResponseData>({
      method: "POST",
      path: "/rtatarget_bind/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3RtatargetBindApiDeleteRequest): Promise<RtatargetBindDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3RtatargetBindApiDeleteRequest): Promise<ApiResponse<RtatargetBindDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<RtatargetBindDeleteResponseData>({
      method: "POST",
      path: "/rtatarget_bind/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3RtatargetBindApiGetRequest): Promise<RtatargetBindGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3RtatargetBindApiGetRequest): Promise<ApiResponse<RtatargetBindGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtatargetBindGetResponseData>({
      method: "POST",
      path: "/rtatarget_bind/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


