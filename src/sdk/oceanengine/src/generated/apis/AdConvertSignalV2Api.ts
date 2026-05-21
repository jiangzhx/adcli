// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdConvertSignalV2Request } from "../models";


export class AdConvertSignalV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdConvertSignalPost(adConvertSignalV2Request: AdConvertSignalV2Request): Promise<ArrayBuffer> {
    const response = await this.openApi2AdConvertSignalPostWithHttpInfo(adConvertSignalV2Request);
    return response.data;
  }

  async openApi2AdConvertSignalPostWithHttpInfo(adConvertSignalV2Request: AdConvertSignalV2Request): Promise<ApiResponse<ArrayBuffer>> {

    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "POST",
      path: "/open_api/2/ad_convert/signal/",
      queryParams: [

      ],
      body: adConvertSignalV2Request
    });
  }
}


