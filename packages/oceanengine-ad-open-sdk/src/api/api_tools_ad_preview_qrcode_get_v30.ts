// Generated from oceanengine/ad_open_sdk_go api/api_tools_ad_preview_qrcode_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAdPreviewQrcodeGetV30Response } from "../models/index";


export interface ToolsAdPreviewQrcodeGetV30ApiOpenApiV30ToolsAdPreviewQrcodeGetGetRequest {
  advertiserId: number | string;
  idType: string;
  promotionId?: number | string;
  materialId?: number | string;
  projectId?: number | string;
}

export class ToolsAdPreviewQrcodeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAdPreviewQrcodeGetGet(request: ToolsAdPreviewQrcodeGetV30ApiOpenApiV30ToolsAdPreviewQrcodeGetGetRequest): Promise<ToolsAdPreviewQrcodeGetV30Response> {
    const response = await this.openApiV30ToolsAdPreviewQrcodeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAdPreviewQrcodeGetGetWithHttpInfo(request: ToolsAdPreviewQrcodeGetV30ApiOpenApiV30ToolsAdPreviewQrcodeGetGetRequest): Promise<ApiResponse<ToolsAdPreviewQrcodeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.idType == null) {
      throw new ApiException("idType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAdPreviewQrcodeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ad_preview/qrcode_get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "id_type", value: request.idType },
        { name: "promotion_id", value: request.promotionId },
        { name: "material_id", value: request.materialId },
        { name: "project_id", value: request.projectId }
      ]
    });
  }
}


