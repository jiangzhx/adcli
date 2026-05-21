// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsBidSuggestV2Ac, ToolsBidSuggestV2ActionDays, ToolsBidSuggestV2ActionScene, ToolsBidSuggestV2ActivateType, ToolsBidSuggestV2Age, ToolsBidSuggestV2AndroidOsv, ToolsBidSuggestV2AppBehaviorTarget, ToolsBidSuggestV2ArticleCategory, ToolsBidSuggestV2AutoExtendTargets, ToolsBidSuggestV2AwemeFanBehaviors, ToolsBidSuggestV2AwemeFanTimeScope, ToolsBidSuggestV2BidMode, ToolsBidSuggestV2BudgetMode, ToolsBidSuggestV2Career, ToolsBidSuggestV2Carrier, ToolsBidSuggestV2ConvertedTimeDuration, ToolsBidSuggestV2DeviceBrand, ToolsBidSuggestV2DeviceType, ToolsBidSuggestV2District, ToolsBidSuggestV2DpaLocalAudience, ToolsBidSuggestV2DpaRtaRecommendType, ToolsBidSuggestV2DpaRtaSwitch, ToolsBidSuggestV2ExcludeCustomActionsInner, ToolsBidSuggestV2FilterAwemeAbnormalActive, ToolsBidSuggestV2FilterOwnAwemeFans, ToolsBidSuggestV2FlowControlMode, ToolsBidSuggestV2Gender, ToolsBidSuggestV2GeolocationInner, ToolsBidSuggestV2HideIfConverted, ToolsBidSuggestV2HideIfExists, ToolsBidSuggestV2IncludeCustomActionsInner, ToolsBidSuggestV2InterestActionMode, ToolsBidSuggestV2IosOsv, ToolsBidSuggestV2LocationType, ToolsBidSuggestV2Platform, ToolsBidSuggestV2Pricing, ToolsBidSuggestV2Response, ToolsBidSuggestV2RetargetingType, ToolsBidSuggestV2ScheduleType, ToolsBidSuggestV2SuperiorPopularityType } from "../models";


export class ToolsBidSuggestV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsBidSuggestGet(ac: ToolsBidSuggestV2Ac[], actionCategories: number[], actionDays: ToolsBidSuggestV2ActionDays, actionScene: ToolsBidSuggestV2ActionScene[], actionWords: number[], activateType: ToolsBidSuggestV2ActivateType[], adId: number, adTag: number[], advertiserId: number, age: ToolsBidSuggestV2Age[], androidOsv: ToolsBidSuggestV2AndroidOsv, appBehaviorTarget: ToolsBidSuggestV2AppBehaviorTarget, appCategory: number[], appIds: number[], articleCategory: ToolsBidSuggestV2ArticleCategory[], audiencePackageId: number, autoExtendTargets: ToolsBidSuggestV2AutoExtendTargets[], awemeFanAccounts: number[], awemeFanBehaviors: ToolsBidSuggestV2AwemeFanBehaviors[], awemeFanCategories: number[], awemeFanTimeScope: ToolsBidSuggestV2AwemeFanTimeScope, awemeFansNumbers: number[], bidMode: ToolsBidSuggestV2BidMode, budget: number, budgetMode: ToolsBidSuggestV2BudgetMode, businessIds: number[], campaignId: number, career: ToolsBidSuggestV2Career[], carrier: ToolsBidSuggestV2Carrier[], city: number[], convertId: number, convertedTimeDuration: ToolsBidSuggestV2ConvertedTimeDuration, deviceBrand: ToolsBidSuggestV2DeviceBrand[], deviceType: ToolsBidSuggestV2DeviceType[], district: ToolsBidSuggestV2District, dpaLocalAudience: ToolsBidSuggestV2DpaLocalAudience, dpaRtaRecommendType: ToolsBidSuggestV2DpaRtaRecommendType, dpaRtaSwitch: ToolsBidSuggestV2DpaRtaSwitch, excludeCustomActions: ToolsBidSuggestV2ExcludeCustomActionsInner[], excludeFlowPackage: number[], filterAwemeAbnormalActive: ToolsBidSuggestV2FilterAwemeAbnormalActive, filterAwemeFansCount: number, filterOwnAwemeFans: ToolsBidSuggestV2FilterOwnAwemeFans, flowControlMode: ToolsBidSuggestV2FlowControlMode, flowPackage: number[], gender: ToolsBidSuggestV2Gender, geolocation: ToolsBidSuggestV2GeolocationInner[], hideIfConverted: ToolsBidSuggestV2HideIfConverted, hideIfExists: ToolsBidSuggestV2HideIfExists, includeCustomActions: ToolsBidSuggestV2IncludeCustomActionsInner[], interestActionMode: ToolsBidSuggestV2InterestActionMode, interestCategories: number[], interestTags: number[], interestWords: number[], iosOsv: ToolsBidSuggestV2IosOsv, launchPrice: number[], locationType: ToolsBidSuggestV2LocationType, platform: ToolsBidSuggestV2Platform[], pricing: ToolsBidSuggestV2Pricing, regionVersion: string, retargetingTags: number[], retargetingTagsExclude: number[], retargetingTagsInclude: number[], retargetingType: ToolsBidSuggestV2RetargetingType, scheduleType: ToolsBidSuggestV2ScheduleType, superiorPopularityType: ToolsBidSuggestV2SuperiorPopularityType, userType: number[]): Promise<ToolsBidSuggestV2Response> {
    const response = await this.openApi2ToolsBidSuggestGetWithHttpInfo(ac, actionCategories, actionDays, actionScene, actionWords, activateType, adId, adTag, advertiserId, age, androidOsv, appBehaviorTarget, appCategory, appIds, articleCategory, audiencePackageId, autoExtendTargets, awemeFanAccounts, awemeFanBehaviors, awemeFanCategories, awemeFanTimeScope, awemeFansNumbers, bidMode, budget, budgetMode, businessIds, campaignId, career, carrier, city, convertId, convertedTimeDuration, deviceBrand, deviceType, district, dpaLocalAudience, dpaRtaRecommendType, dpaRtaSwitch, excludeCustomActions, excludeFlowPackage, filterAwemeAbnormalActive, filterAwemeFansCount, filterOwnAwemeFans, flowControlMode, flowPackage, gender, geolocation, hideIfConverted, hideIfExists, includeCustomActions, interestActionMode, interestCategories, interestTags, interestWords, iosOsv, launchPrice, locationType, platform, pricing, regionVersion, retargetingTags, retargetingTagsExclude, retargetingTagsInclude, retargetingType, scheduleType, superiorPopularityType, userType);
    return response.data;
  }

  async openApi2ToolsBidSuggestGetWithHttpInfo(ac: ToolsBidSuggestV2Ac[], actionCategories: number[], actionDays: ToolsBidSuggestV2ActionDays, actionScene: ToolsBidSuggestV2ActionScene[], actionWords: number[], activateType: ToolsBidSuggestV2ActivateType[], adId: number, adTag: number[], advertiserId: number, age: ToolsBidSuggestV2Age[], androidOsv: ToolsBidSuggestV2AndroidOsv, appBehaviorTarget: ToolsBidSuggestV2AppBehaviorTarget, appCategory: number[], appIds: number[], articleCategory: ToolsBidSuggestV2ArticleCategory[], audiencePackageId: number, autoExtendTargets: ToolsBidSuggestV2AutoExtendTargets[], awemeFanAccounts: number[], awemeFanBehaviors: ToolsBidSuggestV2AwemeFanBehaviors[], awemeFanCategories: number[], awemeFanTimeScope: ToolsBidSuggestV2AwemeFanTimeScope, awemeFansNumbers: number[], bidMode: ToolsBidSuggestV2BidMode, budget: number, budgetMode: ToolsBidSuggestV2BudgetMode, businessIds: number[], campaignId: number, career: ToolsBidSuggestV2Career[], carrier: ToolsBidSuggestV2Carrier[], city: number[], convertId: number, convertedTimeDuration: ToolsBidSuggestV2ConvertedTimeDuration, deviceBrand: ToolsBidSuggestV2DeviceBrand[], deviceType: ToolsBidSuggestV2DeviceType[], district: ToolsBidSuggestV2District, dpaLocalAudience: ToolsBidSuggestV2DpaLocalAudience, dpaRtaRecommendType: ToolsBidSuggestV2DpaRtaRecommendType, dpaRtaSwitch: ToolsBidSuggestV2DpaRtaSwitch, excludeCustomActions: ToolsBidSuggestV2ExcludeCustomActionsInner[], excludeFlowPackage: number[], filterAwemeAbnormalActive: ToolsBidSuggestV2FilterAwemeAbnormalActive, filterAwemeFansCount: number, filterOwnAwemeFans: ToolsBidSuggestV2FilterOwnAwemeFans, flowControlMode: ToolsBidSuggestV2FlowControlMode, flowPackage: number[], gender: ToolsBidSuggestV2Gender, geolocation: ToolsBidSuggestV2GeolocationInner[], hideIfConverted: ToolsBidSuggestV2HideIfConverted, hideIfExists: ToolsBidSuggestV2HideIfExists, includeCustomActions: ToolsBidSuggestV2IncludeCustomActionsInner[], interestActionMode: ToolsBidSuggestV2InterestActionMode, interestCategories: number[], interestTags: number[], interestWords: number[], iosOsv: ToolsBidSuggestV2IosOsv, launchPrice: number[], locationType: ToolsBidSuggestV2LocationType, platform: ToolsBidSuggestV2Platform[], pricing: ToolsBidSuggestV2Pricing, regionVersion: string, retargetingTags: number[], retargetingTagsExclude: number[], retargetingTagsInclude: number[], retargetingType: ToolsBidSuggestV2RetargetingType, scheduleType: ToolsBidSuggestV2ScheduleType, superiorPopularityType: ToolsBidSuggestV2SuperiorPopularityType, userType: number[]): Promise<ApiResponse<ToolsBidSuggestV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsBidSuggestV2Response>({
      method: "GET",
      path: "/open_api/2/tools/bid/suggest/",
      queryParams: [
        { name: "action_days", value: actionDays },
        { name: "ad_id", value: adId },
        { name: "advertiser_id", value: advertiserId },
        { name: "android_osv", value: androidOsv },
        { name: "app_behavior_target", value: appBehaviorTarget },
        { name: "audience_package_id", value: audiencePackageId },
        { name: "aweme_fan_time_scope", value: awemeFanTimeScope },
        { name: "bid_mode", value: bidMode },
        { name: "budget", value: budget },
        { name: "budget_mode", value: budgetMode },
        { name: "campaign_id", value: campaignId },
        { name: "convert_id", value: convertId },
        { name: "converted_time_duration", value: convertedTimeDuration },
        { name: "district", value: district },
        { name: "dpa_local_audience", value: dpaLocalAudience },
        { name: "dpa_rta_recommend_type", value: dpaRtaRecommendType },
        { name: "dpa_rta_switch", value: dpaRtaSwitch },
        { name: "filter_aweme_abnormal_active", value: filterAwemeAbnormalActive },
        { name: "filter_aweme_fans_count", value: filterAwemeFansCount },
        { name: "filter_own_aweme_fans", value: filterOwnAwemeFans },
        { name: "flow_control_mode", value: flowControlMode },
        { name: "gender", value: gender },
        { name: "hide_if_converted", value: hideIfConverted },
        { name: "hide_if_exists", value: hideIfExists },
        { name: "interest_action_mode", value: interestActionMode },
        { name: "ios_osv", value: iosOsv },
        { name: "location_type", value: locationType },
        { name: "pricing", value: pricing },
        { name: "region_version", value: regionVersion },
        { name: "retargeting_type", value: retargetingType },
        { name: "schedule_type", value: scheduleType },
        { name: "superior_popularity_type", value: superiorPopularityType },
        { name: "ac", value: ac, collectionFormat: "multi" },
        { name: "action_categories", value: actionCategories, collectionFormat: "multi" },
        { name: "action_scene", value: actionScene, collectionFormat: "multi" },
        { name: "action_words", value: actionWords, collectionFormat: "multi" },
        { name: "activate_type", value: activateType, collectionFormat: "multi" },
        { name: "ad_tag", value: adTag, collectionFormat: "multi" },
        { name: "age", value: age, collectionFormat: "multi" },
        { name: "app_category", value: appCategory, collectionFormat: "multi" },
        { name: "app_ids", value: appIds, collectionFormat: "multi" },
        { name: "article_category", value: articleCategory, collectionFormat: "multi" },
        { name: "auto_extend_targets", value: autoExtendTargets, collectionFormat: "multi" },
        { name: "aweme_fan_accounts", value: awemeFanAccounts, collectionFormat: "multi" },
        { name: "aweme_fan_behaviors", value: awemeFanBehaviors, collectionFormat: "multi" },
        { name: "aweme_fan_categories", value: awemeFanCategories, collectionFormat: "multi" },
        { name: "aweme_fans_numbers", value: awemeFansNumbers, collectionFormat: "multi" },
        { name: "business_ids", value: businessIds, collectionFormat: "multi" },
        { name: "career", value: career, collectionFormat: "multi" },
        { name: "carrier", value: carrier, collectionFormat: "multi" },
        { name: "city", value: city, collectionFormat: "multi" },
        { name: "device_brand", value: deviceBrand, collectionFormat: "multi" },
        { name: "device_type", value: deviceType, collectionFormat: "multi" },
        { name: "exclude_custom_actions", value: excludeCustomActions, collectionFormat: "multi" },
        { name: "exclude_flow_package", value: excludeFlowPackage, collectionFormat: "multi" },
        { name: "flow_package", value: flowPackage, collectionFormat: "multi" },
        { name: "geolocation", value: geolocation, collectionFormat: "multi" },
        { name: "include_custom_actions", value: includeCustomActions, collectionFormat: "multi" },
        { name: "interest_categories", value: interestCategories, collectionFormat: "multi" },
        { name: "interest_tags", value: interestTags, collectionFormat: "multi" },
        { name: "interest_words", value: interestWords, collectionFormat: "multi" },
        { name: "launch_price", value: launchPrice, collectionFormat: "multi" },
        { name: "platform", value: platform, collectionFormat: "multi" },
        { name: "retargeting_tags", value: retargetingTags, collectionFormat: "multi" },
        { name: "retargeting_tags_exclude", value: retargetingTagsExclude, collectionFormat: "multi" },
        { name: "retargeting_tags_include", value: retargetingTagsInclude, collectionFormat: "multi" },
        { name: "user_type", value: userType, collectionFormat: "multi" }
      ]
    });
  }
}


