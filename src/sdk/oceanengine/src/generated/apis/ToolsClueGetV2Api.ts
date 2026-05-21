// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueGetV2Response } from "../models";


export class ToolsClueGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueGetGet(advertiserIds: number[], startTime: string, endTime: string, page: number, pageSize: number, clueIds: number[], encryptSensitiveFields: boolean): Promise<ToolsClueGetV2Response> {
    const response = await this.openApi2ToolsClueGetGetWithHttpInfo(advertiserIds, startTime, endTime, page, pageSize, clueIds, encryptSensitiveFields);
    return response.data;
  }

  async openApi2ToolsClueGetGetWithHttpInfo(advertiserIds: number[], startTime: string, endTime: string, page: number, pageSize: number, clueIds: number[], encryptSensitiveFields: boolean): Promise<ApiResponse<ToolsClueGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/get/",
      queryParams: [
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "encrypt_sensitive_fields", value: encryptSensitiveFields },
        { name: "advertiser_ids", value: advertiserIds, collectionFormat: "csv" },
        { name: "clue_ids", value: clueIds, collectionFormat: "csv" }
      ]
    });
  }
}


