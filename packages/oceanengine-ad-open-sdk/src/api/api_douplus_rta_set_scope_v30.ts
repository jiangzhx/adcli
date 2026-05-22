// Generated from oceanengine/ad_open_sdk_go api/api_douplus_rta_set_scope_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DouplusRtaSetScopeV30Request, DouplusRtaSetScopeV30Response } from "../models/index";


export interface DouplusRtaSetScopeV30ApiOpenApiV30DouplusRtaSetScopePostRequest {
  douplusRtaSetScopeV30Request?: DouplusRtaSetScopeV30Request;
}

export class DouplusRtaSetScopeV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusRtaSetScopePost(request: DouplusRtaSetScopeV30ApiOpenApiV30DouplusRtaSetScopePostRequest): Promise<DouplusRtaSetScopeV30Response> {
    const response = await this.openApiV30DouplusRtaSetScopePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DouplusRtaSetScopePostWithHttpInfo(request: DouplusRtaSetScopeV30ApiOpenApiV30DouplusRtaSetScopePostRequest): Promise<ApiResponse<DouplusRtaSetScopeV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusRtaSetScopeV30Response>({
      method: "POST",
      path: "/open_api/v3.0/douplus/rta/set_scope/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.douplusRtaSetScopeV30Request
    });
  }
}


