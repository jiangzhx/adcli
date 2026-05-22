// Generated from oceanengine/ad_open_sdk_go api/api_local_im_query_msg_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalImQueryMsgV30Response } from "../models/index";


export interface LocalImQueryMsgV30ApiOpenApiV30LocalImQueryMsgGetRequest {
  localAccountId: number | string;
  msgId: string;
}

export class LocalImQueryMsgV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalImQueryMsgGet(request: LocalImQueryMsgV30ApiOpenApiV30LocalImQueryMsgGetRequest): Promise<LocalImQueryMsgV30Response> {
    const response = await this.openApiV30LocalImQueryMsgGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalImQueryMsgGetWithHttpInfo(request: LocalImQueryMsgV30ApiOpenApiV30LocalImQueryMsgGetRequest): Promise<ApiResponse<LocalImQueryMsgV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalImQueryMsgGet");
    }

    if (request.msgId == null) {
      throw new ApiException("Missing the required parameter 'msgId' when calling openApiV30LocalImQueryMsgGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalImQueryMsgV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/im/query/msg/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "msg_id", value: request.msgId }
      ]
    });
  }
}


