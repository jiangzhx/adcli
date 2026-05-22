// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoAgentGetV2Filtering, FileVideoAgentGetV2Response } from "../models";


export interface OpenApi2FileVideoAgentGetGetRequest {
  agentId: number;
  filtering?: FileVideoAgentGetV2Filtering;
  page?: number;
  pageSize?: number;
}

export class FileVideoAgentGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoAgentGetGet(request: OpenApi2FileVideoAgentGetGetRequest): Promise<FileVideoAgentGetV2Response> {
    const response = await this.openApi2FileVideoAgentGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoAgentGetGetWithHttpInfo(request: OpenApi2FileVideoAgentGetGetRequest): Promise<ApiResponse<FileVideoAgentGetV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("Missing the required parameter 'agentId' when calling openApi2FileVideoAgentGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoAgentGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/agent/get/",
      queryParams: [
        { name: "agent_id", value: request.agentId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


