// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsMicroAppUpdateV30Request, ToolsMicroAppUpdateV30Response } from "../models";


export class ToolsMicroAppUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroAppUpdatePost(toolsMicroAppUpdateV30Request: ToolsMicroAppUpdateV30Request): Promise<ToolsMicroAppUpdateV30Response> {
    const response = await this.openApiV30ToolsMicroAppUpdatePostWithHttpInfo(toolsMicroAppUpdateV30Request);
    return response.data;
  }

  async openApiV30ToolsMicroAppUpdatePostWithHttpInfo(toolsMicroAppUpdateV30Request: ToolsMicroAppUpdateV30Request): Promise<ApiResponse<ToolsMicroAppUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMicroAppUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/micro_app/update/",
      queryParams: [

      ],
      body: toolsMicroAppUpdateV30Request
    });
  }
}


