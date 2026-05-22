// Generated from oceanengine/ad_open_sdk_go api/api_ad_convert_signal_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdConvertSignalV2Request } from "../models/index";


export interface AdConvertSignalV2ApiOpenApi2AdConvertSignalPostRequest {
  adConvertSignalV2Request?: AdConvertSignalV2Request;
}

export class AdConvertSignalV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdConvertSignalPost(request: AdConvertSignalV2ApiOpenApi2AdConvertSignalPostRequest): Promise<ArrayBuffer> {
    const response = await this.openApi2AdConvertSignalPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdConvertSignalPostWithHttpInfo(request: AdConvertSignalV2ApiOpenApi2AdConvertSignalPostRequest): Promise<ApiResponse<ArrayBuffer>> {

    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "POST",
      path: "/open_api/2/ad_convert/signal/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.adConvertSignalV2Request,
      responseType: "arrayBuffer"
    });
  }
}


