// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeTemplateListGetResponseData } from "../models";

export interface V3CreativeTemplateListApiGetRequest {
  accountId: number | string;
  marketingGoal?: string;
  marketingSubGoal?: string;
  marketingTargetType?: string;
  marketingCarrierType?: string;
  siteSet?: string;
  dynamicAbilityType?: string;
  wechatSceneSpecPosition?: unknown;
  creativeTemplateId?: number | string;
  page?: number;
  pageSize?: number;
  dynamicAdType?: string;
  dynamicCreativeType?: string;
  supportSiteSet?: unknown;
  bidMode?: string;
  wechatChannelsScene?: unknown;
  displayScene?: unknown;
  pcScene?: unknown;
  adgroupId?: number | string;
  adgroupType?: string;
  mpaSpec?: unknown;
  fields?: unknown;
}


export class V3CreativeTemplateListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3CreativeTemplateListApiGetRequest): Promise<CreativeTemplateListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3CreativeTemplateListApiGetRequest): Promise<ApiResponse<CreativeTemplateListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CreativeTemplateListGetResponseData>({
      method: "GET",
      path: "/creative_template_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "marketing_sub_goal", value: request.marketingSubGoal },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "marketing_carrier_type", value: request.marketingCarrierType },
        { name: "site_set", value: request.siteSet },
        { name: "dynamic_ability_type", value: request.dynamicAbilityType },
        { name: "wechat_scene_spec_position", value: request.wechatSceneSpecPosition, collectionFormat: "multi" },
        { name: "creative_template_id", value: request.creativeTemplateId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "dynamic_ad_type", value: request.dynamicAdType },
        { name: "dynamic_creative_type", value: request.dynamicCreativeType },
        { name: "support_site_set", value: request.supportSiteSet, collectionFormat: "multi" },
        { name: "bid_mode", value: request.bidMode },
        { name: "wechat_channels_scene", value: request.wechatChannelsScene, collectionFormat: "multi" },
        { name: "display_scene", value: request.displayScene, collectionFormat: "multi" },
        { name: "pc_scene", value: request.pcScene, collectionFormat: "multi" },
        { name: "adgroup_id", value: request.adgroupId },
        { name: "adgroup_type", value: request.adgroupType },
        { name: "mpa_spec", value: request.mpaSpec },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


