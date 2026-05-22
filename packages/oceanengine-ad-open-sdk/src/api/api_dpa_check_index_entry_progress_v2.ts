// Generated from oceanengine/ad_open_sdk_go api/api_dpa_check_index_entry_progress_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaCheckIndexEntryProgressV2Request, DpaCheckIndexEntryProgressV2Response } from "../models/index";


export interface DpaCheckIndexEntryProgressV2ApiOpenApi2DpaCheckIndexEntryProgressPostRequest {
  dpaCheckIndexEntryProgressV2Request?: DpaCheckIndexEntryProgressV2Request;
}

export class DpaCheckIndexEntryProgressV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaCheckIndexEntryProgressPost(request: DpaCheckIndexEntryProgressV2ApiOpenApi2DpaCheckIndexEntryProgressPostRequest): Promise<DpaCheckIndexEntryProgressV2Response> {
    const response = await this.openApi2DpaCheckIndexEntryProgressPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaCheckIndexEntryProgressPostWithHttpInfo(request: DpaCheckIndexEntryProgressV2ApiOpenApi2DpaCheckIndexEntryProgressPostRequest): Promise<ApiResponse<DpaCheckIndexEntryProgressV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaCheckIndexEntryProgressV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/check_index_entry_progress/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaCheckIndexEntryProgressV2Request
    });
  }
}


