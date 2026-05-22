// Generated from oceanengine/ad_open_sdk_go api/api_clue_form_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueFormDetailV2Response } from "../models/index";


export interface ClueFormDetailV2ApiOpenApi2ClueFormDetailGetRequest {
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

  async openApi2ClueFormDetailGet(request: ClueFormDetailV2ApiOpenApi2ClueFormDetailGetRequest): Promise<ClueFormDetailV2Response> {
    const response = await this.openApi2ClueFormDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueFormDetailGetWithHttpInfo(request: ClueFormDetailV2ApiOpenApi2ClueFormDetailGetRequest): Promise<ApiResponse<ClueFormDetailV2Response>> {

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


