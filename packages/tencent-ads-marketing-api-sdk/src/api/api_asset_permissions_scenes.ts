// Generated from tencentad/marketing-api-go-sdk pkg/api/api_asset_permissions_scenes.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AssetPermissionsScenesUpdateRequest, AssetPermissionsScenesUpdateResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

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
      basePath: TencentAdsV13Configuration.basePath,
      path: "/asset_permissions_scenes/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


