// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvConvertOleConvertV2Request, AdvConvertOleConvertV2Response } from "../models";


export class AdvConvertOleConvertV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvConvertOleConvertPost(advConvertOleConvertV2Request: AdvConvertOleConvertV2Request): Promise<AdvConvertOleConvertV2Response> {
    const response = await this.openApi2AdvConvertOleConvertPostWithHttpInfo(advConvertOleConvertV2Request);
    return response.data;
  }

  async openApi2AdvConvertOleConvertPostWithHttpInfo(advConvertOleConvertV2Request: AdvConvertOleConvertV2Request): Promise<ApiResponse<AdvConvertOleConvertV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvConvertOleConvertV2Response>({
      method: "POST",
      path: "/open_api/2/adv_convert/ole/convert/",
      queryParams: [

      ],
      body: advConvertOleConvertV2Request
    });
  }
}


