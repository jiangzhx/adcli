// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DouplusRtaGetInfoV30Response } from "../models";


export class DouplusRtaGetInfoV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusRtaGetInfoGet(awemeSecUid: string): Promise<DouplusRtaGetInfoV30Response> {
    const response = await this.openApiV30DouplusRtaGetInfoGetWithHttpInfo(awemeSecUid);
    return response.data;
  }

  async openApiV30DouplusRtaGetInfoGetWithHttpInfo(awemeSecUid: string): Promise<ApiResponse<DouplusRtaGetInfoV30Response>> {
    if (awemeSecUid == null) {
      throw new ApiException("Missing the required parameter 'awemeSecUid' when calling openApiV30DouplusRtaGetInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<DouplusRtaGetInfoV30Response>({
      method: "GET",
      path: "/open_api/v3.0/douplus/rta/get_info/",
      queryParams: [
        { name: "aweme_sec_uid", value: awemeSecUid }
      ]
    });
  }
}


