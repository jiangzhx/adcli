// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvConvertOleConvertV2Request, AdvConvertOleConvertV2Response } from "../models";


export interface OpenApi2AdvConvertOleConvertPostRequest {
  advConvertOleConvertV2Request?: AdvConvertOleConvertV2Request;
}

export class AdvConvertOleConvertV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvConvertOleConvertPost(request: OpenApi2AdvConvertOleConvertPostRequest): Promise<AdvConvertOleConvertV2Response> {
    const response = await this.openApi2AdvConvertOleConvertPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvConvertOleConvertPostWithHttpInfo(request: OpenApi2AdvConvertOleConvertPostRequest): Promise<ApiResponse<AdvConvertOleConvertV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvConvertOleConvertV2Response>({
      method: "POST",
      path: "/open_api/2/adv_convert/ole/convert/",
      queryParams: [

      ],
      body: request.advConvertOleConvertV2Request
    });
  }
}


