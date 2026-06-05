// 由 oceanengine/ad_open_sdk_go api/api_dpa_offline_product_batch_delete_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaOfflineProductBatchDeleteV30Request, DpaOfflineProductBatchDeleteV30Response } from "../models/index";


export interface DpaOfflineProductBatchDeleteV30ApiOpenApiV30DpaOfflineProductBatchDeletePostRequest {
  dpaOfflineProductBatchDeleteV30Request?: DpaOfflineProductBatchDeleteV30Request;
}

export class DpaOfflineProductBatchDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaOfflineProductBatchDeletePost(request: DpaOfflineProductBatchDeleteV30ApiOpenApiV30DpaOfflineProductBatchDeletePostRequest): Promise<DpaOfflineProductBatchDeleteV30Response> {
    const response = await this.openApiV30DpaOfflineProductBatchDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaOfflineProductBatchDeletePostWithHttpInfo(request: DpaOfflineProductBatchDeleteV30ApiOpenApiV30DpaOfflineProductBatchDeletePostRequest): Promise<ApiResponse<DpaOfflineProductBatchDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaOfflineProductBatchDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/offline_product_batch/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaOfflineProductBatchDeleteV30Request
    });
  }
}


