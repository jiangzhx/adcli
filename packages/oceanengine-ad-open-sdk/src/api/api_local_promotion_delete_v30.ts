// 由 oceanengine/ad_open_sdk_go api/api_local_promotion_delete_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalPromotionDeleteV30Request, LocalPromotionDeleteV30Response } from "../models/index";


export interface LocalPromotionDeleteV30ApiOpenApiV30LocalPromotionDeletePostRequest {
  localPromotionDeleteV30Request?: LocalPromotionDeleteV30Request;
}

export class LocalPromotionDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionDeletePost(request: LocalPromotionDeleteV30ApiOpenApiV30LocalPromotionDeletePostRequest): Promise<LocalPromotionDeleteV30Response> {
    const response = await this.openApiV30LocalPromotionDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPromotionDeletePostWithHttpInfo(request: LocalPromotionDeleteV30ApiOpenApiV30LocalPromotionDeletePostRequest): Promise<ApiResponse<LocalPromotionDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalPromotionDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/promotion/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localPromotionDeleteV30Request
    });
  }
}


