// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalChargeSubmitV30Request, LocalChargeSubmitV30Response } from "../models";


export class LocalChargeSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalChargeSubmitPost(localChargeSubmitV30Request: LocalChargeSubmitV30Request): Promise<LocalChargeSubmitV30Response> {
    const response = await this.openApiV30LocalChargeSubmitPostWithHttpInfo(localChargeSubmitV30Request);
    return response.data;
  }

  async openApiV30LocalChargeSubmitPostWithHttpInfo(localChargeSubmitV30Request: LocalChargeSubmitV30Request): Promise<ApiResponse<LocalChargeSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalChargeSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/charge/submit/",
      queryParams: [

      ],
      body: localChargeSubmitV30Request
    });
  }
}


