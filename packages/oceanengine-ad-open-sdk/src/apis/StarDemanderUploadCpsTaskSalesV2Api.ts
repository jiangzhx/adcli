// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemanderUploadCpsTaskSalesV2Request, StarDemanderUploadCpsTaskSalesV2Response } from "../models";


export interface OpenApi2StarDemanderUploadCpsTaskSalesPostRequest {
  starDemanderUploadCpsTaskSalesV2Request?: StarDemanderUploadCpsTaskSalesV2Request;
}

export class StarDemanderUploadCpsTaskSalesV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderUploadCpsTaskSalesPost(request: OpenApi2StarDemanderUploadCpsTaskSalesPostRequest): Promise<StarDemanderUploadCpsTaskSalesV2Response> {
    const response = await this.openApi2StarDemanderUploadCpsTaskSalesPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemanderUploadCpsTaskSalesPostWithHttpInfo(request: OpenApi2StarDemanderUploadCpsTaskSalesPostRequest): Promise<ApiResponse<StarDemanderUploadCpsTaskSalesV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarDemanderUploadCpsTaskSalesV2Response>({
      method: "POST",
      path: "/open_api/2/star/demander_upload_cps_task_sales/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starDemanderUploadCpsTaskSalesV2Request
    });
  }
}


