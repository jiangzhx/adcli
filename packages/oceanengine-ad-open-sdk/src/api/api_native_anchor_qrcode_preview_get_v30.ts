// Generated from oceanengine/ad_open_sdk_go api/api_native_anchor_qrcode_preview_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { NativeAnchorQrcodePreviewGetV30AnchorType, NativeAnchorQrcodePreviewGetV30Response } from "../models/index";


export interface NativeAnchorQrcodePreviewGetV30ApiOpenApiV30NativeAnchorQrcodePreviewGetGetRequest {
  advertiserId: number | string;
  anchorIds: string[];
  anchorType: NativeAnchorQrcodePreviewGetV30AnchorType;
}

export class NativeAnchorQrcodePreviewGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorQrcodePreviewGetGet(request: NativeAnchorQrcodePreviewGetV30ApiOpenApiV30NativeAnchorQrcodePreviewGetGetRequest): Promise<NativeAnchorQrcodePreviewGetV30Response> {
    const response = await this.openApiV30NativeAnchorQrcodePreviewGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30NativeAnchorQrcodePreviewGetGetWithHttpInfo(request: NativeAnchorQrcodePreviewGetV30ApiOpenApiV30NativeAnchorQrcodePreviewGetGetRequest): Promise<ApiResponse<NativeAnchorQrcodePreviewGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30NativeAnchorQrcodePreviewGetGet");
    }

    if (request.anchorIds == null) {
      throw new ApiException("Missing the required parameter 'anchorIds' when calling openApiV30NativeAnchorQrcodePreviewGetGet");
    }

    if (request.anchorType == null) {
      throw new ApiException("Missing the required parameter 'anchorType' when calling openApiV30NativeAnchorQrcodePreviewGetGet");
    }
    return this.apiClient.requestWithHttpInfo<NativeAnchorQrcodePreviewGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/native_anchor/qrcode_preview/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "anchor_ids", value: request.anchorIds, collectionFormat: "csv" },
        { name: "anchor_type", value: request.anchorType }
      ]
    });
  }
}


