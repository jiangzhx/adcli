// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalImSendMsgV30Request, LocalImSendMsgV30Response } from "../models";


export interface OpenApiV30LocalImSendMsgPostRequest {
  localImSendMsgV30Request?: LocalImSendMsgV30Request;
}

export class LocalImSendMsgV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalImSendMsgPost(request: OpenApiV30LocalImSendMsgPostRequest): Promise<LocalImSendMsgV30Response> {
    const response = await this.openApiV30LocalImSendMsgPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalImSendMsgPostWithHttpInfo(request: OpenApiV30LocalImSendMsgPostRequest): Promise<ApiResponse<LocalImSendMsgV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalImSendMsgV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/im/send/msg/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localImSendMsgV30Request
    });
  }
}


