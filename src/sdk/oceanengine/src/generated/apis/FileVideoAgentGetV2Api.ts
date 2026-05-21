// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileVideoAgentGetV2Filtering, FileVideoAgentGetV2Response } from "../models";


export class FileVideoAgentGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoAgentGetGet(agentId: number, filtering: FileVideoAgentGetV2Filtering, page: number, pageSize: number): Promise<FileVideoAgentGetV2Response> {
    const response = await this.openApi2FileVideoAgentGetGetWithHttpInfo(agentId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2FileVideoAgentGetGetWithHttpInfo(agentId: number, filtering: FileVideoAgentGetV2Filtering, page: number, pageSize: number): Promise<ApiResponse<FileVideoAgentGetV2Response>> {
    if (agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileVideoAgentGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoAgentGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/agent/get/",
      queryParams: [
        { name: "agent_id", value: agentId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


