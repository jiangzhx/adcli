// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueFormGetV2FormType, ToolsClueFormGetV2Response } from "../models";


export class ToolsClueFormGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueFormGetGet(advertiserId: number, page: number, pageSize: number, startTime: string, endTime: string, instanceId: number, name: string, isDel: number, formType: ToolsClueFormGetV2FormType): Promise<ToolsClueFormGetV2Response> {
    const response = await this.openApi2ToolsClueFormGetGetWithHttpInfo(advertiserId, page, pageSize, startTime, endTime, instanceId, name, isDel, formType);
    return response.data;
  }

  async openApi2ToolsClueFormGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, startTime: string, endTime: string, instanceId: number, name: string, isDel: number, formType: ToolsClueFormGetV2FormType): Promise<ApiResponse<ToolsClueFormGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueFormGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueFormGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/form/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "instance_id", value: instanceId },
        { name: "name", value: name },
        { name: "is_del", value: isDel },
        { name: "form_type", value: formType }
      ]
    });
  }
}


