// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPromotionCardRecommendTitleGetV2ContentType, ToolsPromotionCardRecommendTitleGetV2Response, ToolsPromotionCardRecommendTitleGetV2TextType } from "../models";


export interface OpenApi2ToolsPromotionCardRecommendTitleGetGetRequest {
  adId?: number;
  advertiserId?: number;
  contentType?: ToolsPromotionCardRecommendTitleGetV2ContentType;
  externalUrl?: string;
  industryId?: number;
  textType?: ToolsPromotionCardRecommendTitleGetV2TextType;
}

export class ToolsPromotionCardRecommendTitleGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPromotionCardRecommendTitleGetGet(request: OpenApi2ToolsPromotionCardRecommendTitleGetGetRequest): Promise<ToolsPromotionCardRecommendTitleGetV2Response> {
    const response = await this.openApi2ToolsPromotionCardRecommendTitleGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPromotionCardRecommendTitleGetGetWithHttpInfo(request: OpenApi2ToolsPromotionCardRecommendTitleGetGetRequest): Promise<ApiResponse<ToolsPromotionCardRecommendTitleGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPromotionCardRecommendTitleGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/promotion_card/recommend_title/get/",
      queryParams: [
        { name: "ad_id", value: request.adId },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "content_type", value: request.contentType },
        { name: "external_url", value: request.externalUrl },
        { name: "industry_id", value: request.industryId },
        { name: "text_type", value: request.textType }
      ]
    });
  }
}


