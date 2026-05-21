// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentInfoV2Fields, AgentInfoV2Response } from "../models";


export class AgentInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentInfoGet(advertiserIds: number[], fields: AgentInfoV2Fields[]): Promise<AgentInfoV2Response> {
    const response = await this.openApi2AgentInfoGetWithHttpInfo(advertiserIds, fields);
    return response.data;
  }

  async openApi2AgentInfoGetWithHttpInfo(advertiserIds: number[], fields: AgentInfoV2Fields[]): Promise<ApiResponse<AgentInfoV2Response>> {

    return this.apiClient.requestWithHttpInfo<AgentInfoV2Response>({
      method: "GET",
      path: "/open_api/2/agent/info/",
      queryParams: [
        { name: "advertiser_ids", value: advertiserIds, collectionFormat: "multi" },
        { name: "fields", value: fields, collectionFormat: "multi" }
      ]
    });
  }
}


