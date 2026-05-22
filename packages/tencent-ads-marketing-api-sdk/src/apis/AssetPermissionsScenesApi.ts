// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetPermissionsScenesUpdateRequest, AssetPermissionsScenesUpdateResponseData } from "../models";

export interface AssetPermissionsScenesApiUpdateRequest {
  data: AssetPermissionsScenesUpdateRequest;
}


export class AssetPermissionsScenesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: AssetPermissionsScenesApiUpdateRequest): Promise<AssetPermissionsScenesUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: AssetPermissionsScenesApiUpdateRequest): Promise<ApiResponse<AssetPermissionsScenesUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AssetPermissionsScenesUpdateResponseData>({
      method: "POST",
      path: "/asset_permissions_scenes/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


