// Generated from oceanengine/ad_open_sdk_go api/api_adv_convert_ole_convert_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvConvertOleConvertV2Request, AdvConvertOleConvertV2Response } from "../models/index";


export interface AdvConvertOleConvertV2ApiOpenApi2AdvConvertOleConvertPostRequest {
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

  async openApi2AdvConvertOleConvertPost(request: AdvConvertOleConvertV2ApiOpenApi2AdvConvertOleConvertPostRequest): Promise<AdvConvertOleConvertV2Response> {
    const response = await this.openApi2AdvConvertOleConvertPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvConvertOleConvertPostWithHttpInfo(request: AdvConvertOleConvertV2ApiOpenApi2AdvConvertOleConvertPostRequest): Promise<ApiResponse<AdvConvertOleConvertV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvConvertOleConvertV2Response>({
      method: "POST",
      path: "/open_api/2/adv_convert/ole/convert/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.advConvertOleConvertV2Request
    });
  }
}


