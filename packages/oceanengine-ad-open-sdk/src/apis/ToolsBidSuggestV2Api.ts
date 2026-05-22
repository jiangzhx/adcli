// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsBidSuggestV2Ac, ToolsBidSuggestV2ActionDays, ToolsBidSuggestV2ActionScene, ToolsBidSuggestV2ActivateType, ToolsBidSuggestV2Age, ToolsBidSuggestV2AndroidOsv, ToolsBidSuggestV2AppBehaviorTarget, ToolsBidSuggestV2ArticleCategory, ToolsBidSuggestV2AutoExtendTargets, ToolsBidSuggestV2AwemeFanBehaviors, ToolsBidSuggestV2AwemeFanTimeScope, ToolsBidSuggestV2BidMode, ToolsBidSuggestV2BudgetMode, ToolsBidSuggestV2Career, ToolsBidSuggestV2Carrier, ToolsBidSuggestV2ConvertedTimeDuration, ToolsBidSuggestV2DeviceBrand, ToolsBidSuggestV2DeviceType, ToolsBidSuggestV2District, ToolsBidSuggestV2DpaLocalAudience, ToolsBidSuggestV2DpaRtaRecommendType, ToolsBidSuggestV2DpaRtaSwitch, ToolsBidSuggestV2ExcludeCustomActionsInner, ToolsBidSuggestV2FilterAwemeAbnormalActive, ToolsBidSuggestV2FilterOwnAwemeFans, ToolsBidSuggestV2FlowControlMode, ToolsBidSuggestV2Gender, ToolsBidSuggestV2GeolocationInner, ToolsBidSuggestV2HideIfConverted, ToolsBidSuggestV2HideIfExists, ToolsBidSuggestV2IncludeCustomActionsInner, ToolsBidSuggestV2InterestActionMode, ToolsBidSuggestV2IosOsv, ToolsBidSuggestV2LocationType, ToolsBidSuggestV2Platform, ToolsBidSuggestV2Pricing, ToolsBidSuggestV2Response, ToolsBidSuggestV2RetargetingType, ToolsBidSuggestV2ScheduleType, ToolsBidSuggestV2SuperiorPopularityType } from "../models";


export interface OpenApi2ToolsBidSuggestGetRequest {
  ac?: ToolsBidSuggestV2Ac[];
  actionCategories?: number[];
  actionDays?: ToolsBidSuggestV2ActionDays;
  actionScene?: ToolsBidSuggestV2ActionScene[];
  actionWords?: number[];
  activateType?: ToolsBidSuggestV2ActivateType[];
  adId?: number;
  adTag?: number[];
  advertiserId?: number;
  age?: ToolsBidSuggestV2Age[];
  androidOsv?: ToolsBidSuggestV2AndroidOsv;
  appBehaviorTarget?: ToolsBidSuggestV2AppBehaviorTarget;
  appCategory?: number[];
  appIds?: number[];
  articleCategory?: ToolsBidSuggestV2ArticleCategory[];
  audiencePackageId?: number;
  autoExtendTargets?: ToolsBidSuggestV2AutoExtendTargets[];
  awemeFanAccounts?: number[];
  awemeFanBehaviors?: ToolsBidSuggestV2AwemeFanBehaviors[];
  awemeFanCategories?: number[];
  awemeFanTimeScope?: ToolsBidSuggestV2AwemeFanTimeScope;
  awemeFansNumbers?: number[];
  bidMode?: ToolsBidSuggestV2BidMode;
  budget?: number;
  budgetMode?: ToolsBidSuggestV2BudgetMode;
  businessIds?: number[];
  campaignId?: number;
  career?: ToolsBidSuggestV2Career[];
  carrier?: ToolsBidSuggestV2Carrier[];
  city?: number[];
  convertId?: number;
  convertedTimeDuration?: ToolsBidSuggestV2ConvertedTimeDuration;
  deviceBrand?: ToolsBidSuggestV2DeviceBrand[];
  deviceType?: ToolsBidSuggestV2DeviceType[];
  district?: ToolsBidSuggestV2District;
  dpaLocalAudience?: ToolsBidSuggestV2DpaLocalAudience;
  dpaRtaRecommendType?: ToolsBidSuggestV2DpaRtaRecommendType;
  dpaRtaSwitch?: ToolsBidSuggestV2DpaRtaSwitch;
  excludeCustomActions?: ToolsBidSuggestV2ExcludeCustomActionsInner[];
  excludeFlowPackage?: number[];
  filterAwemeAbnormalActive?: ToolsBidSuggestV2FilterAwemeAbnormalActive;
  filterAwemeFansCount?: number;
  filterOwnAwemeFans?: ToolsBidSuggestV2FilterOwnAwemeFans;
  flowControlMode?: ToolsBidSuggestV2FlowControlMode;
  flowPackage?: number[];
  gender?: ToolsBidSuggestV2Gender;
  geolocation?: ToolsBidSuggestV2GeolocationInner[];
  hideIfConverted?: ToolsBidSuggestV2HideIfConverted;
  hideIfExists?: ToolsBidSuggestV2HideIfExists;
  includeCustomActions?: ToolsBidSuggestV2IncludeCustomActionsInner[];
  interestActionMode?: ToolsBidSuggestV2InterestActionMode;
  interestCategories?: number[];
  interestTags?: number[];
  interestWords?: number[];
  iosOsv?: ToolsBidSuggestV2IosOsv;
  launchPrice?: number[];
  locationType?: ToolsBidSuggestV2LocationType;
  platform?: ToolsBidSuggestV2Platform[];
  pricing?: ToolsBidSuggestV2Pricing;
  regionVersion?: string;
  retargetingTags?: number[];
  retargetingTagsExclude?: number[];
  retargetingTagsInclude?: number[];
  retargetingType?: ToolsBidSuggestV2RetargetingType;
  scheduleType?: ToolsBidSuggestV2ScheduleType;
  superiorPopularityType?: ToolsBidSuggestV2SuperiorPopularityType;
  userType?: number[];
}

export class ToolsBidSuggestV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsBidSuggestGet(request: OpenApi2ToolsBidSuggestGetRequest): Promise<ToolsBidSuggestV2Response> {
    const response = await this.openApi2ToolsBidSuggestGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsBidSuggestGetWithHttpInfo(request: OpenApi2ToolsBidSuggestGetRequest): Promise<ApiResponse<ToolsBidSuggestV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsBidSuggestV2Response>({
      method: "GET",
      path: "/open_api/2/tools/bid/suggest/",
      queryParams: [
        { name: "ac", value: request.ac, collectionFormat: "csv" },
        { name: "action_categories", value: request.actionCategories, collectionFormat: "csv" },
        { name: "action_days", value: request.actionDays },
        { name: "action_scene", value: request.actionScene, collectionFormat: "csv" },
        { name: "action_words", value: request.actionWords, collectionFormat: "csv" },
        { name: "activate_type", value: request.activateType, collectionFormat: "csv" },
        { name: "ad_id", value: request.adId },
        { name: "ad_tag", value: request.adTag, collectionFormat: "csv" },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "age", value: request.age, collectionFormat: "csv" },
        { name: "android_osv", value: request.androidOsv },
        { name: "app_behavior_target", value: request.appBehaviorTarget },
        { name: "app_category", value: request.appCategory, collectionFormat: "csv" },
        { name: "app_ids", value: request.appIds, collectionFormat: "csv" },
        { name: "article_category", value: request.articleCategory, collectionFormat: "csv" },
        { name: "audience_package_id", value: request.audiencePackageId },
        { name: "auto_extend_targets", value: request.autoExtendTargets, collectionFormat: "csv" },
        { name: "aweme_fan_accounts", value: request.awemeFanAccounts, collectionFormat: "csv" },
        { name: "aweme_fan_behaviors", value: request.awemeFanBehaviors, collectionFormat: "csv" },
        { name: "aweme_fan_categories", value: request.awemeFanCategories, collectionFormat: "csv" },
        { name: "aweme_fan_time_scope", value: request.awemeFanTimeScope },
        { name: "aweme_fans_numbers", value: request.awemeFansNumbers, collectionFormat: "csv" },
        { name: "bid_mode", value: request.bidMode },
        { name: "budget", value: request.budget },
        { name: "budget_mode", value: request.budgetMode },
        { name: "business_ids", value: request.businessIds, collectionFormat: "csv" },
        { name: "campaign_id", value: request.campaignId },
        { name: "career", value: request.career, collectionFormat: "csv" },
        { name: "carrier", value: request.carrier, collectionFormat: "csv" },
        { name: "city", value: request.city, collectionFormat: "csv" },
        { name: "convert_id", value: request.convertId },
        { name: "converted_time_duration", value: request.convertedTimeDuration },
        { name: "device_brand", value: request.deviceBrand, collectionFormat: "csv" },
        { name: "device_type", value: request.deviceType, collectionFormat: "csv" },
        { name: "district", value: request.district },
        { name: "dpa_local_audience", value: request.dpaLocalAudience },
        { name: "dpa_rta_recommend_type", value: request.dpaRtaRecommendType },
        { name: "dpa_rta_switch", value: request.dpaRtaSwitch },
        { name: "exclude_custom_actions", value: request.excludeCustomActions, collectionFormat: "csv" },
        { name: "exclude_flow_package", value: request.excludeFlowPackage, collectionFormat: "csv" },
        { name: "filter_aweme_abnormal_active", value: request.filterAwemeAbnormalActive },
        { name: "filter_aweme_fans_count", value: request.filterAwemeFansCount },
        { name: "filter_own_aweme_fans", value: request.filterOwnAwemeFans },
        { name: "flow_control_mode", value: request.flowControlMode },
        { name: "flow_package", value: request.flowPackage, collectionFormat: "csv" },
        { name: "gender", value: request.gender },
        { name: "geolocation", value: request.geolocation, collectionFormat: "csv" },
        { name: "hide_if_converted", value: request.hideIfConverted },
        { name: "hide_if_exists", value: request.hideIfExists },
        { name: "include_custom_actions", value: request.includeCustomActions, collectionFormat: "csv" },
        { name: "interest_action_mode", value: request.interestActionMode },
        { name: "interest_categories", value: request.interestCategories, collectionFormat: "csv" },
        { name: "interest_tags", value: request.interestTags, collectionFormat: "csv" },
        { name: "interest_words", value: request.interestWords, collectionFormat: "csv" },
        { name: "ios_osv", value: request.iosOsv },
        { name: "launch_price", value: request.launchPrice, collectionFormat: "csv" },
        { name: "location_type", value: request.locationType },
        { name: "platform", value: request.platform, collectionFormat: "csv" },
        { name: "pricing", value: request.pricing },
        { name: "region_version", value: request.regionVersion },
        { name: "retargeting_tags", value: request.retargetingTags, collectionFormat: "csv" },
        { name: "retargeting_tags_exclude", value: request.retargetingTagsExclude, collectionFormat: "csv" },
        { name: "retargeting_tags_include", value: request.retargetingTagsInclude, collectionFormat: "csv" },
        { name: "retargeting_type", value: request.retargetingType },
        { name: "schedule_type", value: request.scheduleType },
        { name: "superior_popularity_type", value: request.superiorPopularityType },
        { name: "user_type", value: request.userType, collectionFormat: "csv" }
      ]
    });
  }
}


