// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AgentAdvBrandListQueryV2Filtering, AgentAdvBrandListQueryV2Response } from "../models";


export class AgentAdvBrandListQueryV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AgentAdvBrandListQueryGet(agentId: number, startDate: string, endDate: string, filtering: AgentAdvBrandListQueryV2Filtering, cursor: number, cursorSize: number): Promise<AgentAdvBrandListQueryV2Response> {
    const response = await this.openApi2AgentAdvBrandListQueryGetWithHttpInfo(agentId, startDate, endDate, filtering, cursor, cursorSize);
    return response.data;
  }

  async openApi2AgentAdvBrandListQueryGetWithHttpInfo(agentId: number, startDate: string, endDate: string, filtering: AgentAdvBrandListQueryV2Filtering, cursor: number, cursorSize: number): Promise<ApiResponse<AgentAdvBrandListQueryV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2AgentAdvBrandListQueryGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AgentAdvBrandListQueryGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AgentAdvBrandListQueryGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApi2AgentAdvBrandListQueryGet");
    }
    return this.apiClient.requestWithHttpInfo<AgentAdvBrandListQueryV2Response>({
      method: "GET",
      path: "/open_api/2/agent/adv/brand/list/query/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "cursor", value: cursor },
        { name: "cursor_size", value: cursorSize }
      ]
    });
  }
}


