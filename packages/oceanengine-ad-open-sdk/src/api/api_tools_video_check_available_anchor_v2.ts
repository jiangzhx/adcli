// Generated from oceanengine/ad_open_sdk_go api/api_tools_video_check_available_anchor_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsVideoCheckAvailableAnchorV2ExternalAction, ToolsVideoCheckAvailableAnchorV2LandingType, ToolsVideoCheckAvailableAnchorV2Response } from "../models/index";


export interface ToolsVideoCheckAvailableAnchorV2ApiOpenApi2ToolsVideoCheckAvailableAnchorGetRequest {
  advertiserId: number | string;
  itemIds: (number | string)[];
  landingType: ToolsVideoCheckAvailableAnchorV2LandingType;
  externalAction: ToolsVideoCheckAvailableAnchorV2ExternalAction;
}

export class ToolsVideoCheckAvailableAnchorV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsVideoCheckAvailableAnchorGet(request: ToolsVideoCheckAvailableAnchorV2ApiOpenApi2ToolsVideoCheckAvailableAnchorGetRequest): Promise<ToolsVideoCheckAvailableAnchorV2Response> {
    const response = await this.openApi2ToolsVideoCheckAvailableAnchorGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsVideoCheckAvailableAnchorGetWithHttpInfo(request: ToolsVideoCheckAvailableAnchorV2ApiOpenApi2ToolsVideoCheckAvailableAnchorGetRequest): Promise<ApiResponse<ToolsVideoCheckAvailableAnchorV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.itemIds == null) {
      throw new ApiException("itemIds is required and must be specified");
    }

    if (request.itemIds != null && request.itemIds.length < 1) {
      throw new ApiException("itemIds must have at least 1 elements");
    }

    if (request.itemIds != null && request.itemIds.length > 100) {
      throw new ApiException("itemIds must have less than 100 elements");
    }

    if (request.landingType == null) {
      throw new ApiException("landingType is required and must be specified");
    }

    if (request.externalAction == null) {
      throw new ApiException("externalAction is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsVideoCheckAvailableAnchorV2Response>({
      method: "GET",
      path: "/open_api/2/tools/video/check_available_anchor/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "item_ids", value: request.itemIds },
        { name: "landing_type", value: request.landingType },
        { name: "external_action", value: request.externalAction }
      ]
    });
  }
}


