// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgentInfoV2Fields, AgentInfoV2Response } from "../models";


export interface OpenApi2AgentInfoGetRequest {
  advertiserIds?: number[];
  fields?: AgentInfoV2Fields[];
}

export class AgentInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentInfoGet(request: OpenApi2AgentInfoGetRequest): Promise<AgentInfoV2Response> {
    const response = await this.openApi2AgentInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AgentInfoGetWithHttpInfo(request: OpenApi2AgentInfoGetRequest): Promise<ApiResponse<AgentInfoV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentInfoV2Response>({
      method: "GET",
      path: "/open_api/2/agent/info/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds, collectionFormat: "csv" },
        { name: "fields", value: request.fields, collectionFormat: "csv" }
      ]
    });
  }
}


