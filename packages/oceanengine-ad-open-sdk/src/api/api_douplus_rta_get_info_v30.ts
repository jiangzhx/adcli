// Generated from oceanengine/ad_open_sdk_go api/api_douplus_rta_get_info_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DouplusRtaGetInfoV30Response } from "../models/index";


export interface DouplusRtaGetInfoV30ApiOpenApiV30DouplusRtaGetInfoGetRequest {
  awemeSecUid: string;
}

export class DouplusRtaGetInfoV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusRtaGetInfoGet(request: DouplusRtaGetInfoV30ApiOpenApiV30DouplusRtaGetInfoGetRequest): Promise<DouplusRtaGetInfoV30Response> {
    const response = await this.openApiV30DouplusRtaGetInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DouplusRtaGetInfoGetWithHttpInfo(request: DouplusRtaGetInfoV30ApiOpenApiV30DouplusRtaGetInfoGetRequest): Promise<ApiResponse<DouplusRtaGetInfoV30Response>> {
    if (request.awemeSecUid == null) {
      throw new ApiException("awemeSecUid is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<DouplusRtaGetInfoV30Response>({
      method: "GET",
      path: "/open_api/v3.0/douplus/rta/get_info/",
      queryParams: [
        { name: "aweme_sec_uid", value: request.awemeSecUid }
      ]
    });
  }
}


