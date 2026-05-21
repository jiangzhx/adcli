// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DmpDataSourceUpdateV2Request, DmpDataSourceUpdateV2Response } from "../models";


export class DmpDataSourceUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpDataSourceUpdatePost(dmpDataSourceUpdateV2Request: DmpDataSourceUpdateV2Request): Promise<DmpDataSourceUpdateV2Response> {
    const response = await this.openApi2DmpDataSourceUpdatePostWithHttpInfo(dmpDataSourceUpdateV2Request);
    return response.data;
  }

  async openApi2DmpDataSourceUpdatePostWithHttpInfo(dmpDataSourceUpdateV2Request: DmpDataSourceUpdateV2Request): Promise<ApiResponse<DmpDataSourceUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpDataSourceUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/data_source/update/",
      queryParams: [

      ],
      body: dmpDataSourceUpdateV2Request
    });
  }
}


