// Generated from oceanengine/ad_open_sdk_go api/api_file_video_agent_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileVideoAgentGetV2Filtering, FileVideoAgentGetV2Response } from "../models/index";


export interface FileVideoAgentGetV2ApiOpenApi2FileVideoAgentGetGetRequest {
  agentId: number | string;
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

  async openApi2FileVideoAgentGetGet(request: FileVideoAgentGetV2ApiOpenApi2FileVideoAgentGetGetRequest): Promise<FileVideoAgentGetV2Response> {
    const response = await this.openApi2FileVideoAgentGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoAgentGetGetWithHttpInfo(request: FileVideoAgentGetV2ApiOpenApi2FileVideoAgentGetGetRequest): Promise<ApiResponse<FileVideoAgentGetV2Response>> {
    if (request.agentId == null) {
      throw new ApiException("agentId is required and must be specified");
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


