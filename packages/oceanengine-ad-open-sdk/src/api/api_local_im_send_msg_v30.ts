// Generated from oceanengine/ad_open_sdk_go api/api_local_im_send_msg_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalImSendMsgV30Request, LocalImSendMsgV30Response } from "../models/index";


export interface LocalImSendMsgV30ApiOpenApiV30LocalImSendMsgPostRequest {
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

  async openApiV30LocalImSendMsgPost(request: LocalImSendMsgV30ApiOpenApiV30LocalImSendMsgPostRequest): Promise<LocalImSendMsgV30Response> {
    const response = await this.openApiV30LocalImSendMsgPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalImSendMsgPostWithHttpInfo(request: LocalImSendMsgV30ApiOpenApiV30LocalImSendMsgPostRequest): Promise<ApiResponse<LocalImSendMsgV30Response>> {

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


