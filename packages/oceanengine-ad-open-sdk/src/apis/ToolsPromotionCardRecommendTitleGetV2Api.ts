// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPromotionCardRecommendTitleGetV2ContentType, ToolsPromotionCardRecommendTitleGetV2Response, ToolsPromotionCardRecommendTitleGetV2TextType } from "../models";


export class ToolsPromotionCardRecommendTitleGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPromotionCardRecommendTitleGetGet(adId: number, advertiserId: number, contentType: ToolsPromotionCardRecommendTitleGetV2ContentType, externalUrl: string, industryId: number, textType: ToolsPromotionCardRecommendTitleGetV2TextType): Promise<ToolsPromotionCardRecommendTitleGetV2Response> {
    const response = await this.openApi2ToolsPromotionCardRecommendTitleGetGetWithHttpInfo(adId, advertiserId, contentType, externalUrl, industryId, textType);
    return response.data;
  }

  async openApi2ToolsPromotionCardRecommendTitleGetGetWithHttpInfo(adId: number, advertiserId: number, contentType: ToolsPromotionCardRecommendTitleGetV2ContentType, externalUrl: string, industryId: number, textType: ToolsPromotionCardRecommendTitleGetV2TextType): Promise<ApiResponse<ToolsPromotionCardRecommendTitleGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPromotionCardRecommendTitleGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/promotion_card/recommend_title/get/",
      queryParams: [
        { name: "ad_id", value: adId },
        { name: "advertiser_id", value: advertiserId },
        { name: "content_type", value: contentType },
        { name: "external_url", value: externalUrl },
        { name: "industry_id", value: industryId },
        { name: "text_type", value: textType }
      ]
    });
  }
}


