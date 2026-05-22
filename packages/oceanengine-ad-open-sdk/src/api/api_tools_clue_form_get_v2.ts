// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_form_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueFormGetV2FormType, ToolsClueFormGetV2Response } from "../models/index";


export interface ToolsClueFormGetV2ApiOpenApi2ToolsClueFormGetGetRequest {
  advertiserId: number | string;
  page?: number;
  pageSize?: number;
  startTime?: string;
  endTime?: string;
  instanceId?: number | string;
  name?: string;
  isDel?: number;
  formType?: ToolsClueFormGetV2FormType;
}

export class ToolsClueFormGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueFormGetGet(request: ToolsClueFormGetV2ApiOpenApi2ToolsClueFormGetGetRequest): Promise<ToolsClueFormGetV2Response> {
    const response = await this.openApi2ToolsClueFormGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueFormGetGetWithHttpInfo(request: ToolsClueFormGetV2ApiOpenApi2ToolsClueFormGetGetRequest): Promise<ApiResponse<ToolsClueFormGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueFormGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueFormGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/form/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "instance_id", value: request.instanceId },
        { name: "name", value: request.name },
        { name: "is_del", value: request.isDel },
        { name: "form_type", value: request.formType }
      ]
    });
  }
}


