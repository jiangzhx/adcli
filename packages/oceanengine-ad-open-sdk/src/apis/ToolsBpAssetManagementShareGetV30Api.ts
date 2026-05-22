// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsBpAssetManagementShareGetV30AssetType, ToolsBpAssetManagementShareGetV30Response, ToolsBpAssetManagementShareGetV30ShareType } from "../models";


export interface OpenApiV30ToolsBpAssetManagementShareGetGetRequest {
  assetType: ToolsBpAssetManagementShareGetV30AssetType;
  instanceId: number | string;
  organizationId?: number | string;
  page?: number;
  pageSize?: number;
  shareType?: ToolsBpAssetManagementShareGetV30ShareType;
}

export class ToolsBpAssetManagementShareGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsBpAssetManagementShareGetGet(request: OpenApiV30ToolsBpAssetManagementShareGetGetRequest): Promise<ToolsBpAssetManagementShareGetV30Response> {
    const response = await this.openApiV30ToolsBpAssetManagementShareGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsBpAssetManagementShareGetGetWithHttpInfo(request: OpenApiV30ToolsBpAssetManagementShareGetGetRequest): Promise<ApiResponse<ToolsBpAssetManagementShareGetV30Response>> {
    if (request.assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApiV30ToolsBpAssetManagementShareGetGet");
    }

    if (request.instanceId == null) {
      throw new ApiException("Missing the required parameter 'instanceId' when calling openApiV30ToolsBpAssetManagementShareGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsBpAssetManagementShareGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/bp_asset_management/share/get/",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "asset_type", value: request.assetType },
        { name: "instance_id", value: request.instanceId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "share_type", value: request.shareType }
      ]
    });
  }
}


