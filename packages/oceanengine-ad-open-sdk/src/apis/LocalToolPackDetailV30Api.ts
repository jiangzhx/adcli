// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalToolPackDetailV30Response } from "../models";


export class LocalToolPackDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalToolPackDetailGet(localAccountId: number, toolPackId: number): Promise<LocalToolPackDetailV30Response> {
    const response = await this.openApiV30LocalToolPackDetailGetWithHttpInfo(localAccountId, toolPackId);
    return response.data;
  }

  async openApiV30LocalToolPackDetailGetWithHttpInfo(localAccountId: number, toolPackId: number): Promise<ApiResponse<LocalToolPackDetailV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalToolPackDetailGet");
    }

    if (toolPackId == null) {
      throw new ApiException("Missing the required parameter 'toolPackId' when calling openApiV30LocalToolPackDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalToolPackDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/tool_pack/detail/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "tool_pack_id", value: toolPackId }
      ]
    });
  }
}


