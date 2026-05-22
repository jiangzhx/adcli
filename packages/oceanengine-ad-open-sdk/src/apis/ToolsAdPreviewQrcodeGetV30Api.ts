// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAdPreviewQrcodeGetV30Response } from "../models";


export interface OpenApiV30ToolsAdPreviewQrcodeGetGetRequest {
  advertiserId: number;
  idType: string;
  promotionId?: number;
  materialId?: number;
  projectId?: number;
}

export class ToolsAdPreviewQrcodeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsAdPreviewQrcodeGetGet(request: OpenApiV30ToolsAdPreviewQrcodeGetGetRequest): Promise<ToolsAdPreviewQrcodeGetV30Response> {
    const response = await this.openApiV30ToolsAdPreviewQrcodeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsAdPreviewQrcodeGetGetWithHttpInfo(request: OpenApiV30ToolsAdPreviewQrcodeGetGetRequest): Promise<ApiResponse<ToolsAdPreviewQrcodeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsAdPreviewQrcodeGetGet");
    }

    if (request.idType == null) {
      throw new ApiException("Missing the required parameter 'idType' when calling openApiV30ToolsAdPreviewQrcodeGetGet");
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


