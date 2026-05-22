// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalImQueryMsgV30Response } from "../models";


export class LocalImQueryMsgV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalImQueryMsgGet(localAccountId: number, msgId: string): Promise<LocalImQueryMsgV30Response> {
    const response = await this.openApiV30LocalImQueryMsgGetWithHttpInfo(localAccountId, msgId);
    return response.data;
  }

  async openApiV30LocalImQueryMsgGetWithHttpInfo(localAccountId: number, msgId: string): Promise<ApiResponse<LocalImQueryMsgV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalImQueryMsgGet");
    }

    if (msgId == null) {
      throw new ApiException("Missing the required parameter 'msgId' when calling openApiV30LocalImQueryMsgGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalImQueryMsgV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/im/query/msg/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "msg_id", value: msgId }
      ]
    });
  }
}


