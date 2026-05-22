// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaCheckIndexEntryProgressV2Request, DpaCheckIndexEntryProgressV2Response } from "../models";


export class DpaCheckIndexEntryProgressV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaCheckIndexEntryProgressPost(request: DpaCheckIndexEntryProgressV2Request): Promise<DpaCheckIndexEntryProgressV2Response> {
    const response = await this.openApi2DpaCheckIndexEntryProgressPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaCheckIndexEntryProgressPostWithHttpInfo(request: DpaCheckIndexEntryProgressV2Request): Promise<ApiResponse<DpaCheckIndexEntryProgressV2Response>> {
    return this.apiClient.requestWithHttpInfo<DpaCheckIndexEntryProgressV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/check_index_entry_progress/",
      queryParams: [

      ],
      body: request
    });
  }
}


