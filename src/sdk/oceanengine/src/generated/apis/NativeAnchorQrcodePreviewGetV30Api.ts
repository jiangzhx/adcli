// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { NativeAnchorQrcodePreviewGetV30AnchorType, NativeAnchorQrcodePreviewGetV30Response } from "../models";


export class NativeAnchorQrcodePreviewGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorQrcodePreviewGetGet(advertiserId: number, anchorIds: string[], anchorType: NativeAnchorQrcodePreviewGetV30AnchorType): Promise<NativeAnchorQrcodePreviewGetV30Response> {
    const response = await this.openApiV30NativeAnchorQrcodePreviewGetGetWithHttpInfo(advertiserId, anchorIds, anchorType);
    return response.data;
  }

  async openApiV30NativeAnchorQrcodePreviewGetGetWithHttpInfo(advertiserId: number, anchorIds: string[], anchorType: NativeAnchorQrcodePreviewGetV30AnchorType): Promise<ApiResponse<NativeAnchorQrcodePreviewGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30NativeAnchorQrcodePreviewGetGet");
    }

    if (anchorIds == null) {
      throw new ApiException("Missing the required parameter 'anchorIds' when calling openApiV30NativeAnchorQrcodePreviewGetGet");
    }

    if (anchorType == null) {
      throw new ApiException("Missing the required parameter 'anchorType' when calling openApiV30NativeAnchorQrcodePreviewGetGet");
    }
    return this.apiClient.requestWithHttpInfo<NativeAnchorQrcodePreviewGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/native_anchor/qrcode_preview/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "anchor_type", value: anchorType },
        { name: "anchor_ids", value: anchorIds, collectionFormat: "csv" }
      ]
    });
  }
}


