// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsBpAssetManagementShareGetV30AssetType, ToolsBpAssetManagementShareGetV30Response, ToolsBpAssetManagementShareGetV30ShareType } from "../models";


export class ToolsBpAssetManagementShareGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsBpAssetManagementShareGetGet(assetType: ToolsBpAssetManagementShareGetV30AssetType, instanceId: number, organizationId: number, page: number, pageSize: number, shareType: ToolsBpAssetManagementShareGetV30ShareType): Promise<ToolsBpAssetManagementShareGetV30Response> {
    const response = await this.openApiV30ToolsBpAssetManagementShareGetGetWithHttpInfo(assetType, instanceId, organizationId, page, pageSize, shareType);
    return response.data;
  }

  async openApiV30ToolsBpAssetManagementShareGetGetWithHttpInfo(assetType: ToolsBpAssetManagementShareGetV30AssetType, instanceId: number, organizationId: number, page: number, pageSize: number, shareType: ToolsBpAssetManagementShareGetV30ShareType): Promise<ApiResponse<ToolsBpAssetManagementShareGetV30Response>> {
    if (assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApiV30ToolsBpAssetManagementShareGetGet");
    }

    if (instanceId == null) {
      throw new ApiException("Missing the required parameter 'instanceId' when calling openApiV30ToolsBpAssetManagementShareGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsBpAssetManagementShareGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/bp_asset_management/share/get/",
      queryParams: [
        { name: "organization_id", value: organizationId },
        { name: "asset_type", value: assetType },
        { name: "instance_id", value: instanceId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "share_type", value: shareType }
      ]
    });
  }
}


