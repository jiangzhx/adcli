// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ClueFormDetailV2Response } from "../models";


export interface OpenApi2ClueFormDetailGetRequest {
  advertiserId?: number | string;
  instanceId?: number | string;
}

export class ClueFormDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueFormDetailGet(request: OpenApi2ClueFormDetailGetRequest): Promise<ClueFormDetailV2Response> {
    const response = await this.openApi2ClueFormDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueFormDetailGetWithHttpInfo(request: OpenApi2ClueFormDetailGetRequest): Promise<ApiResponse<ClueFormDetailV2Response>> {

    return this.apiClient.requestWithHttpInfo<ClueFormDetailV2Response>({
      method: "GET",
      path: "/open_api/2/clue/form/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "instance_id", value: request.instanceId }
      ]
    });
  }
}


