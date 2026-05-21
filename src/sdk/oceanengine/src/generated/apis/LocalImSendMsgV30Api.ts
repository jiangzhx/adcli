// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalImSendMsgV30Request, LocalImSendMsgV30Response } from "../models";


export class LocalImSendMsgV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalImSendMsgPost(localImSendMsgV30Request: LocalImSendMsgV30Request): Promise<LocalImSendMsgV30Response> {
    const response = await this.openApiV30LocalImSendMsgPostWithHttpInfo(localImSendMsgV30Request);
    return response.data;
  }

  async openApiV30LocalImSendMsgPostWithHttpInfo(localImSendMsgV30Request: LocalImSendMsgV30Request): Promise<ApiResponse<LocalImSendMsgV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalImSendMsgV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/im/send/msg/",
      queryParams: [

      ],
      body: localImSendMsgV30Request
    });
  }
}


