// Generated from oceanengine/ad_open_sdk_go api/api_tools_promotion_card_recommend_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPromotionCardRecommendGetV2AdvancedCreativeType, ToolsPromotionCardRecommendGetV2DownloadType, ToolsPromotionCardRecommendGetV2RecommendType, ToolsPromotionCardRecommendGetV2Response, ToolsPromotionCardRecommendGetV2TitleListInner } from "../models/index";


export interface ToolsPromotionCardRecommendGetV2ApiOpenApi2ToolsPromotionCardRecommendGetGetRequest {
  adId?: number | string;
  advancedCreativeType?: ToolsPromotionCardRecommendGetV2AdvancedCreativeType;
  advertiserId?: number | string;
  downloadType?: ToolsPromotionCardRecommendGetV2DownloadType;
  recommendType?: ToolsPromotionCardRecommendGetV2RecommendType;
  titleList?: ToolsPromotionCardRecommendGetV2TitleListInner[];
}

export class ToolsPromotionCardRecommendGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPromotionCardRecommendGetGet(request: ToolsPromotionCardRecommendGetV2ApiOpenApi2ToolsPromotionCardRecommendGetGetRequest): Promise<ToolsPromotionCardRecommendGetV2Response> {
    const response = await this.openApi2ToolsPromotionCardRecommendGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPromotionCardRecommendGetGetWithHttpInfo(request: ToolsPromotionCardRecommendGetV2ApiOpenApi2ToolsPromotionCardRecommendGetGetRequest): Promise<ApiResponse<ToolsPromotionCardRecommendGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPromotionCardRecommendGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/promotion_card/recommend/get/",
      queryParams: [
        { name: "ad_id", value: request.adId },
        { name: "advanced_creative_type", value: request.advancedCreativeType },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "download_type", value: request.downloadType },
        { name: "recommend_type", value: request.recommendType },
        { name: "title_list", value: request.titleList }
      ]
    });
  }
}


