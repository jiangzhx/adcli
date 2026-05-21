// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAdPreviewQrcodeGetV30Response } from "../models";


export class ToolsAdPreviewQrcodeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAdPreviewQrcodeGetGet(advertiserId: number, idType: string, promotionId: number, materialId: number, projectId: number): Promise<ToolsAdPreviewQrcodeGetV30Response> {
    const response = await this.openApiV30ToolsAdPreviewQrcodeGetGetWithHttpInfo(advertiserId, idType, promotionId, materialId, projectId);
    return response.data;
  }

  async openApiV30ToolsAdPreviewQrcodeGetGetWithHttpInfo(advertiserId: number, idType: string, promotionId: number, materialId: number, projectId: number): Promise<ApiResponse<ToolsAdPreviewQrcodeGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsAdPreviewQrcodeGetGet");
    }

    if (idType == null) {
      throw new ApiException("Missing the required parameter 'idType' when calling openApiV30ToolsAdPreviewQrcodeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAdPreviewQrcodeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ad_preview/qrcode_get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "id_type", value: idType },
        { name: "promotion_id", value: promotionId },
        { name: "material_id", value: materialId },
        { name: "project_id", value: projectId }
      ]
    });
  }
}


