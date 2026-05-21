// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DouplusRtaSetScopeV30Request, DouplusRtaSetScopeV30Response } from "../models";


export class DouplusRtaSetScopeV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusRtaSetScopePost(douplusRtaSetScopeV30Request: DouplusRtaSetScopeV30Request): Promise<DouplusRtaSetScopeV30Response> {
    const response = await this.openApiV30DouplusRtaSetScopePostWithHttpInfo(douplusRtaSetScopeV30Request);
    return response.data;
  }

  async openApiV30DouplusRtaSetScopePostWithHttpInfo(douplusRtaSetScopeV30Request: DouplusRtaSetScopeV30Request): Promise<ApiResponse<DouplusRtaSetScopeV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusRtaSetScopeV30Response>({
      method: "POST",
      path: "/open_api/v3.0/douplus/rta/set_scope/",
      queryParams: [

      ],
      body: douplusRtaSetScopeV30Request
    });
  }
}


