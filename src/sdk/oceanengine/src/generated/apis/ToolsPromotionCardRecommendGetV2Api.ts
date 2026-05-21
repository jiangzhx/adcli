// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsPromotionCardRecommendGetV2AdvancedCreativeType, ToolsPromotionCardRecommendGetV2DownloadType, ToolsPromotionCardRecommendGetV2RecommendType, ToolsPromotionCardRecommendGetV2Response, ToolsPromotionCardRecommendGetV2TitleListInner } from "../models";


export class ToolsPromotionCardRecommendGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPromotionCardRecommendGetGet(adId: number, advancedCreativeType: ToolsPromotionCardRecommendGetV2AdvancedCreativeType, advertiserId: number, downloadType: ToolsPromotionCardRecommendGetV2DownloadType, recommendType: ToolsPromotionCardRecommendGetV2RecommendType, titleList: ToolsPromotionCardRecommendGetV2TitleListInner[]): Promise<ToolsPromotionCardRecommendGetV2Response> {
    const response = await this.openApi2ToolsPromotionCardRecommendGetGetWithHttpInfo(adId, advancedCreativeType, advertiserId, downloadType, recommendType, titleList);
    return response.data;
  }

  async openApi2ToolsPromotionCardRecommendGetGetWithHttpInfo(adId: number, advancedCreativeType: ToolsPromotionCardRecommendGetV2AdvancedCreativeType, advertiserId: number, downloadType: ToolsPromotionCardRecommendGetV2DownloadType, recommendType: ToolsPromotionCardRecommendGetV2RecommendType, titleList: ToolsPromotionCardRecommendGetV2TitleListInner[]): Promise<ApiResponse<ToolsPromotionCardRecommendGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPromotionCardRecommendGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/promotion_card/recommend/get/",
      queryParams: [
        { name: "ad_id", value: adId },
        { name: "advanced_creative_type", value: advancedCreativeType },
        { name: "advertiser_id", value: advertiserId },
        { name: "download_type", value: downloadType },
        { name: "recommend_type", value: recommendType },
        { name: "title_list", value: titleList, collectionFormat: "multi" }
      ]
    });
  }
}


