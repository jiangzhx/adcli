// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_card_recommend_title_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionCardRecommendTitleGetV2ContentType, ToolsPromotionCardRecommendTitleGetV2Response, ToolsPromotionCardRecommendTitleGetV2TextType } from "../models/index";


export interface ToolsPromotionCardRecommendTitleGetV2ApiOpenApi2ToolsPromotionCardRecommendTitleGetGetRequest {
  adId?: number | string;
  advertiserId?: number | string;
  contentType?: ToolsPromotionCardRecommendTitleGetV2ContentType;
  externalUrl?: string;
  industryId?: number | string;
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

  async openApi2ToolsPromotionCardRecommendTitleGetGet(request: ToolsPromotionCardRecommendTitleGetV2ApiOpenApi2ToolsPromotionCardRecommendTitleGetGetRequest): Promise<ToolsPromotionCardRecommendTitleGetV2Response> {
    const response = await this.openApi2ToolsPromotionCardRecommendTitleGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPromotionCardRecommendTitleGetGetWithHttpInfo(request: ToolsPromotionCardRecommendTitleGetV2ApiOpenApi2ToolsPromotionCardRecommendTitleGetGetRequest): Promise<ApiResponse<ToolsPromotionCardRecommendTitleGetV2Response>> {

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


