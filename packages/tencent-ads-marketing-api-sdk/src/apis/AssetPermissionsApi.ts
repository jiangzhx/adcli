// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetPermissionsAddRequest, AssetPermissionsAddResponseData, AssetPermissionsDeleteRequest } from "../models";

export interface AssetPermissionsApiAddRequest {
  data: AssetPermissionsAddRequest;
}

export interface AssetPermissionsApiDeleteRequest {
  data: AssetPermissionsDeleteRequest;
}


export class AssetPermissionsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AssetPermissionsApiAddRequest): Promise<AssetPermissionsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AssetPermissionsApiAddRequest): Promise<ApiResponse<AssetPermissionsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AssetPermissionsAddResponseData>({
      method: "POST",
      path: "/asset_permissions/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: AssetPermissionsApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: AssetPermissionsApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/asset_permissions/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


