// 由 oceanengine/ad_open_sdk_go api/api_tools_tools_task_get_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsToolsTaskGetV30Response, ToolsToolsTaskGetV30TaskStatus } from "../models/index";


export interface ToolsToolsTaskGetV30ApiOpenApiV30ToolsToolsTaskGetGetRequest {
  advertiserId: number | string;
  taskIds?: (number | string)[];
  taskStatus?: ToolsToolsTaskGetV30TaskStatus[];
  page?: number;
  pageSize?: number;
}

export class ToolsToolsTaskGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsToolsTaskGetGet(request: ToolsToolsTaskGetV30ApiOpenApiV30ToolsToolsTaskGetGetRequest): Promise<ToolsToolsTaskGetV30Response> {
    const response = await this.openApiV30ToolsToolsTaskGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsToolsTaskGetGetWithHttpInfo(request: ToolsToolsTaskGetV30ApiOpenApiV30ToolsToolsTaskGetGetRequest): Promise<ApiResponse<ToolsToolsTaskGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsToolsTaskGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/tools_task/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "task_ids", value: request.taskIds },
        { name: "task_status", value: request.taskStatus },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


