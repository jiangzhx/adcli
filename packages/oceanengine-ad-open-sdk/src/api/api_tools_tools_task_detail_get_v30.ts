// 由 oceanengine/ad_open_sdk_go api/api_tools_tools_task_detail_get_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsToolsTaskDetailGetV30Response } from "../models/index";


export interface ToolsToolsTaskDetailGetV30ApiOpenApiV30ToolsToolsTaskDetailGetGetRequest {
  advertiserId: number | string;
  taskId: number | string;
  page?: number;
  pageSize?: number;
}

export class ToolsToolsTaskDetailGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsToolsTaskDetailGetGet(request: ToolsToolsTaskDetailGetV30ApiOpenApiV30ToolsToolsTaskDetailGetGetRequest): Promise<ToolsToolsTaskDetailGetV30Response> {
    const response = await this.openApiV30ToolsToolsTaskDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsToolsTaskDetailGetGetWithHttpInfo(request: ToolsToolsTaskDetailGetV30ApiOpenApiV30ToolsToolsTaskDetailGetGetRequest): Promise<ApiResponse<ToolsToolsTaskDetailGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.taskId == null) {
      throw new ApiException("taskId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsToolsTaskDetailGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/tools_task_detail/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "task_id", value: request.taskId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


