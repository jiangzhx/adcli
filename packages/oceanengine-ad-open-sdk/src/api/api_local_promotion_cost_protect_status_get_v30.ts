// 由 oceanengine/ad_open_sdk_go api/api_local_promotion_cost_protect_status_get_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalPromotionCostProtectStatusGetV30Response } from "../models/index";


export interface LocalPromotionCostProtectStatusGetV30ApiOpenApiV30LocalPromotionCostProtectStatusGetGetRequest {
  localAccountId: number | string;
  promotionIds?: (number | string)[];
}

export class LocalPromotionCostProtectStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionCostProtectStatusGetGet(request: LocalPromotionCostProtectStatusGetV30ApiOpenApiV30LocalPromotionCostProtectStatusGetGetRequest): Promise<LocalPromotionCostProtectStatusGetV30Response> {
    const response = await this.openApiV30LocalPromotionCostProtectStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPromotionCostProtectStatusGetGetWithHttpInfo(request: LocalPromotionCostProtectStatusGetV30ApiOpenApiV30LocalPromotionCostProtectStatusGetGetRequest): Promise<ApiResponse<LocalPromotionCostProtectStatusGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalPromotionCostProtectStatusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/promotion/cost_protect_status/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "promotion_ids", value: request.promotionIds }
      ]
    });
  }
}


