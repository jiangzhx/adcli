// Generated from oceanengine/ad_open_sdk_go api/api_tools_estimate_audience_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEstimateAudienceV2Ac, ToolsEstimateAudienceV2ActionDays, ToolsEstimateAudienceV2ActivateType, ToolsEstimateAudienceV2Age, ToolsEstimateAudienceV2AndroidOsv, ToolsEstimateAudienceV2AppBehaviorTarget, ToolsEstimateAudienceV2ArticleCategory, ToolsEstimateAudienceV2AutoExtendEnabled, ToolsEstimateAudienceV2AutoExtendTargets, ToolsEstimateAudienceV2Carrier, ToolsEstimateAudienceV2DeviceBrand, ToolsEstimateAudienceV2DeviceType, ToolsEstimateAudienceV2District, ToolsEstimateAudienceV2DpaLocalAudience, ToolsEstimateAudienceV2ExcludeCustomActionsInner, ToolsEstimateAudienceV2FilterAwemeAbnormalActive, ToolsEstimateAudienceV2FilterOwnAwemeFans, ToolsEstimateAudienceV2Gender, ToolsEstimateAudienceV2GeolocationInner, ToolsEstimateAudienceV2IncludeCustomActionsInner, ToolsEstimateAudienceV2InterestActionMode, ToolsEstimateAudienceV2IosOsv, ToolsEstimateAudienceV2LocationType, ToolsEstimateAudienceV2Platform, ToolsEstimateAudienceV2Response, ToolsEstimateAudienceV2RetargetingType, ToolsEstimateAudienceV2SuperiorPopularityType } from "../models/index";


export interface ToolsEstimateAudienceV2ApiOpenApi2ToolsEstimateAudienceGetRequest {
  ac?: ToolsEstimateAudienceV2Ac[];
  actionCategories?: number[];
  actionDays?: ToolsEstimateAudienceV2ActionDays;
  actionWords?: number[];
  activateType?: ToolsEstimateAudienceV2ActivateType[];
  adTag?: number[];
  advertiserId?: number | string;
  age?: ToolsEstimateAudienceV2Age[];
  androidOsv?: ToolsEstimateAudienceV2AndroidOsv;
  appBehaviorTarget?: ToolsEstimateAudienceV2AppBehaviorTarget;
  appCategory?: number[];
  appIds?: number | string[];
  articleCategory?: ToolsEstimateAudienceV2ArticleCategory[];
  audiencePackageId?: number | string;
  autoExtendEnabled?: ToolsEstimateAudienceV2AutoExtendEnabled;
  autoExtendTargets?: ToolsEstimateAudienceV2AutoExtendTargets[];
  awemeFansNumbers?: number[];
  carrier?: ToolsEstimateAudienceV2Carrier[];
  city?: number[];
  deviceBrand?: ToolsEstimateAudienceV2DeviceBrand[];
  deviceType?: ToolsEstimateAudienceV2DeviceType[];
  district?: ToolsEstimateAudienceV2District;
  dpaLocalAudience?: ToolsEstimateAudienceV2DpaLocalAudience;
  excludeCustomActions?: ToolsEstimateAudienceV2ExcludeCustomActionsInner[];
  excludeFlowPackage?: number[];
  filterAwemeAbnormalActive?: ToolsEstimateAudienceV2FilterAwemeAbnormalActive;
  filterAwemeFansCount?: number;
  filterOwnAwemeFans?: ToolsEstimateAudienceV2FilterOwnAwemeFans;
  flowPackage?: number[];
  gender?: ToolsEstimateAudienceV2Gender;
  geolocation?: ToolsEstimateAudienceV2GeolocationInner[];
  includeCustomActions?: ToolsEstimateAudienceV2IncludeCustomActionsInner[];
  interestActionMode?: ToolsEstimateAudienceV2InterestActionMode;
  interestCategories?: number[];
  interestTags?: number[];
  interestWords?: number[];
  iosOsv?: ToolsEstimateAudienceV2IosOsv;
  launchPrice?: number[];
  locationType?: ToolsEstimateAudienceV2LocationType;
  platform?: ToolsEstimateAudienceV2Platform[];
  retargetingTags?: number[];
  retargetingTagsExclude?: number[];
  retargetingTagsInclude?: number[];
  retargetingType?: ToolsEstimateAudienceV2RetargetingType;
  superiorPopularityType?: ToolsEstimateAudienceV2SuperiorPopularityType;
  userType?: number[];
}

export class ToolsEstimateAudienceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEstimateAudienceGet(request: ToolsEstimateAudienceV2ApiOpenApi2ToolsEstimateAudienceGetRequest): Promise<ToolsEstimateAudienceV2Response> {
    const response = await this.openApi2ToolsEstimateAudienceGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsEstimateAudienceGetWithHttpInfo(request: ToolsEstimateAudienceV2ApiOpenApi2ToolsEstimateAudienceGetRequest): Promise<ApiResponse<ToolsEstimateAudienceV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEstimateAudienceV2Response>({
      method: "GET",
      path: "/open_api/2/tools/estimate_audience/",
      queryParams: [
        { name: "ac", value: request.ac },
        { name: "action_categories", value: request.actionCategories },
        { name: "action_days", value: request.actionDays },
        { name: "action_words", value: request.actionWords },
        { name: "activate_type", value: request.activateType },
        { name: "ad_tag", value: request.adTag },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "age", value: request.age },
        { name: "android_osv", value: request.androidOsv },
        { name: "app_behavior_target", value: request.appBehaviorTarget },
        { name: "app_category", value: request.appCategory },
        { name: "app_ids", value: request.appIds },
        { name: "article_category", value: request.articleCategory },
        { name: "audience_package_id", value: request.audiencePackageId },
        { name: "auto_extend_enabled", value: request.autoExtendEnabled },
        { name: "auto_extend_targets", value: request.autoExtendTargets },
        { name: "aweme_fans_numbers", value: request.awemeFansNumbers },
        { name: "carrier", value: request.carrier },
        { name: "city", value: request.city },
        { name: "device_brand", value: request.deviceBrand },
        { name: "device_type", value: request.deviceType },
        { name: "district", value: request.district },
        { name: "dpa_local_audience", value: request.dpaLocalAudience },
        { name: "exclude_custom_actions", value: request.excludeCustomActions },
        { name: "exclude_flow_package", value: request.excludeFlowPackage },
        { name: "filter_aweme_abnormal_active", value: request.filterAwemeAbnormalActive },
        { name: "filter_aweme_fans_count", value: request.filterAwemeFansCount },
        { name: "filter_own_aweme_fans", value: request.filterOwnAwemeFans },
        { name: "flow_package", value: request.flowPackage },
        { name: "gender", value: request.gender },
        { name: "geolocation", value: request.geolocation },
        { name: "include_custom_actions", value: request.includeCustomActions },
        { name: "interest_action_mode", value: request.interestActionMode },
        { name: "interest_categories", value: request.interestCategories },
        { name: "interest_tags", value: request.interestTags },
        { name: "interest_words", value: request.interestWords },
        { name: "ios_osv", value: request.iosOsv },
        { name: "launch_price", value: request.launchPrice },
        { name: "location_type", value: request.locationType },
        { name: "platform", value: request.platform },
        { name: "retargeting_tags", value: request.retargetingTags },
        { name: "retargeting_tags_exclude", value: request.retargetingTagsExclude },
        { name: "retargeting_tags_include", value: request.retargetingTagsInclude },
        { name: "retargeting_type", value: request.retargetingType },
        { name: "superior_popularity_type", value: request.superiorPopularityType },
        { name: "user_type", value: request.userType }
      ]
    });
  }
}


