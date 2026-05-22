// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarVasGetExportBoostItemGroupResultV2Response } from "../models";


export interface OpenApi2StarVasGetExportBoostItemGroupResultGetRequest {
  starId: number | string;
  ticketId: number | string;
}

export class StarVasGetExportBoostItemGroupResultV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasGetExportBoostItemGroupResultGet(request: OpenApi2StarVasGetExportBoostItemGroupResultGetRequest): Promise<StarVasGetExportBoostItemGroupResultV2Response> {
    const response = await this.openApi2StarVasGetExportBoostItemGroupResultGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasGetExportBoostItemGroupResultGetWithHttpInfo(request: OpenApi2StarVasGetExportBoostItemGroupResultGetRequest): Promise<ApiResponse<StarVasGetExportBoostItemGroupResultV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarVasGetExportBoostItemGroupResultGet");
    }

    if (request.ticketId == null) {
      throw new ApiException("Missing the required parameter 'ticketId' when calling openApi2StarVasGetExportBoostItemGroupResultGet");
    }
    return this.apiClient.requestWithHttpInfo<StarVasGetExportBoostItemGroupResultV2Response>({
      method: "GET",
      path: "/open_api/2/star/vas/get_export_boost_item_group_result/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "ticket_id", value: request.ticketId }
      ]
    });
  }
}


