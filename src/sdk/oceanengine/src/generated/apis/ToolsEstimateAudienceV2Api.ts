// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEstimateAudienceV2Ac, ToolsEstimateAudienceV2ActionDays, ToolsEstimateAudienceV2ActivateType, ToolsEstimateAudienceV2Age, ToolsEstimateAudienceV2AndroidOsv, ToolsEstimateAudienceV2AppBehaviorTarget, ToolsEstimateAudienceV2ArticleCategory, ToolsEstimateAudienceV2AutoExtendEnabled, ToolsEstimateAudienceV2AutoExtendTargets, ToolsEstimateAudienceV2Carrier, ToolsEstimateAudienceV2DeviceBrand, ToolsEstimateAudienceV2DeviceType, ToolsEstimateAudienceV2District, ToolsEstimateAudienceV2DpaLocalAudience, ToolsEstimateAudienceV2ExcludeCustomActionsInner, ToolsEstimateAudienceV2FilterAwemeAbnormalActive, ToolsEstimateAudienceV2FilterOwnAwemeFans, ToolsEstimateAudienceV2Gender, ToolsEstimateAudienceV2GeolocationInner, ToolsEstimateAudienceV2IncludeCustomActionsInner, ToolsEstimateAudienceV2InterestActionMode, ToolsEstimateAudienceV2IosOsv, ToolsEstimateAudienceV2LocationType, ToolsEstimateAudienceV2Platform, ToolsEstimateAudienceV2Response, ToolsEstimateAudienceV2RetargetingType, ToolsEstimateAudienceV2SuperiorPopularityType } from "../models";


export class ToolsEstimateAudienceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEstimateAudienceGet(ac: ToolsEstimateAudienceV2Ac[], actionCategories: number[], actionDays: ToolsEstimateAudienceV2ActionDays, actionWords: number[], activateType: ToolsEstimateAudienceV2ActivateType[], adTag: number[], advertiserId: number, age: ToolsEstimateAudienceV2Age[], androidOsv: ToolsEstimateAudienceV2AndroidOsv, appBehaviorTarget: ToolsEstimateAudienceV2AppBehaviorTarget, appCategory: number[], appIds: number[], articleCategory: ToolsEstimateAudienceV2ArticleCategory[], audiencePackageId: number, autoExtendEnabled: ToolsEstimateAudienceV2AutoExtendEnabled, autoExtendTargets: ToolsEstimateAudienceV2AutoExtendTargets[], awemeFansNumbers: number[], carrier: ToolsEstimateAudienceV2Carrier[], city: number[], deviceBrand: ToolsEstimateAudienceV2DeviceBrand[], deviceType: ToolsEstimateAudienceV2DeviceType[], district: ToolsEstimateAudienceV2District, dpaLocalAudience: ToolsEstimateAudienceV2DpaLocalAudience, excludeCustomActions: ToolsEstimateAudienceV2ExcludeCustomActionsInner[], excludeFlowPackage: number[], filterAwemeAbnormalActive: ToolsEstimateAudienceV2FilterAwemeAbnormalActive, filterAwemeFansCount: number, filterOwnAwemeFans: ToolsEstimateAudienceV2FilterOwnAwemeFans, flowPackage: number[], gender: ToolsEstimateAudienceV2Gender, geolocation: ToolsEstimateAudienceV2GeolocationInner[], includeCustomActions: ToolsEstimateAudienceV2IncludeCustomActionsInner[], interestActionMode: ToolsEstimateAudienceV2InterestActionMode, interestCategories: number[], interestTags: number[], interestWords: number[], iosOsv: ToolsEstimateAudienceV2IosOsv, launchPrice: number[], locationType: ToolsEstimateAudienceV2LocationType, platform: ToolsEstimateAudienceV2Platform[], retargetingTags: number[], retargetingTagsExclude: number[], retargetingTagsInclude: number[], retargetingType: ToolsEstimateAudienceV2RetargetingType, superiorPopularityType: ToolsEstimateAudienceV2SuperiorPopularityType, userType: number[]): Promise<ToolsEstimateAudienceV2Response> {
    const response = await this.openApi2ToolsEstimateAudienceGetWithHttpInfo(ac, actionCategories, actionDays, actionWords, activateType, adTag, advertiserId, age, androidOsv, appBehaviorTarget, appCategory, appIds, articleCategory, audiencePackageId, autoExtendEnabled, autoExtendTargets, awemeFansNumbers, carrier, city, deviceBrand, deviceType, district, dpaLocalAudience, excludeCustomActions, excludeFlowPackage, filterAwemeAbnormalActive, filterAwemeFansCount, filterOwnAwemeFans, flowPackage, gender, geolocation, includeCustomActions, interestActionMode, interestCategories, interestTags, interestWords, iosOsv, launchPrice, locationType, platform, retargetingTags, retargetingTagsExclude, retargetingTagsInclude, retargetingType, superiorPopularityType, userType);
    return response.data;
  }

  async openApi2ToolsEstimateAudienceGetWithHttpInfo(ac: ToolsEstimateAudienceV2Ac[], actionCategories: number[], actionDays: ToolsEstimateAudienceV2ActionDays, actionWords: number[], activateType: ToolsEstimateAudienceV2ActivateType[], adTag: number[], advertiserId: number, age: ToolsEstimateAudienceV2Age[], androidOsv: ToolsEstimateAudienceV2AndroidOsv, appBehaviorTarget: ToolsEstimateAudienceV2AppBehaviorTarget, appCategory: number[], appIds: number[], articleCategory: ToolsEstimateAudienceV2ArticleCategory[], audiencePackageId: number, autoExtendEnabled: ToolsEstimateAudienceV2AutoExtendEnabled, autoExtendTargets: ToolsEstimateAudienceV2AutoExtendTargets[], awemeFansNumbers: number[], carrier: ToolsEstimateAudienceV2Carrier[], city: number[], deviceBrand: ToolsEstimateAudienceV2DeviceBrand[], deviceType: ToolsEstimateAudienceV2DeviceType[], district: ToolsEstimateAudienceV2District, dpaLocalAudience: ToolsEstimateAudienceV2DpaLocalAudience, excludeCustomActions: ToolsEstimateAudienceV2ExcludeCustomActionsInner[], excludeFlowPackage: number[], filterAwemeAbnormalActive: ToolsEstimateAudienceV2FilterAwemeAbnormalActive, filterAwemeFansCount: number, filterOwnAwemeFans: ToolsEstimateAudienceV2FilterOwnAwemeFans, flowPackage: number[], gender: ToolsEstimateAudienceV2Gender, geolocation: ToolsEstimateAudienceV2GeolocationInner[], includeCustomActions: ToolsEstimateAudienceV2IncludeCustomActionsInner[], interestActionMode: ToolsEstimateAudienceV2InterestActionMode, interestCategories: number[], interestTags: number[], interestWords: number[], iosOsv: ToolsEstimateAudienceV2IosOsv, launchPrice: number[], locationType: ToolsEstimateAudienceV2LocationType, platform: ToolsEstimateAudienceV2Platform[], retargetingTags: number[], retargetingTagsExclude: number[], retargetingTagsInclude: number[], retargetingType: ToolsEstimateAudienceV2RetargetingType, superiorPopularityType: ToolsEstimateAudienceV2SuperiorPopularityType, userType: number[]): Promise<ApiResponse<ToolsEstimateAudienceV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEstimateAudienceV2Response>({
      method: "GET",
      path: "/open_api/2/tools/estimate_audience/",
      queryParams: [
        { name: "action_days", value: actionDays },
        { name: "advertiser_id", value: advertiserId },
        { name: "android_osv", value: androidOsv },
        { name: "app_behavior_target", value: appBehaviorTarget },
        { name: "audience_package_id", value: audiencePackageId },
        { name: "auto_extend_enabled", value: autoExtendEnabled },
        { name: "district", value: district },
        { name: "dpa_local_audience", value: dpaLocalAudience },
        { name: "filter_aweme_abnormal_active", value: filterAwemeAbnormalActive },
        { name: "filter_aweme_fans_count", value: filterAwemeFansCount },
        { name: "filter_own_aweme_fans", value: filterOwnAwemeFans },
        { name: "gender", value: gender },
        { name: "interest_action_mode", value: interestActionMode },
        { name: "ios_osv", value: iosOsv },
        { name: "location_type", value: locationType },
        { name: "retargeting_type", value: retargetingType },
        { name: "superior_popularity_type", value: superiorPopularityType },
        { name: "ac", value: ac, collectionFormat: "multi" },
        { name: "action_categories", value: actionCategories, collectionFormat: "multi" },
        { name: "action_words", value: actionWords, collectionFormat: "multi" },
        { name: "activate_type", value: activateType, collectionFormat: "multi" },
        { name: "ad_tag", value: adTag, collectionFormat: "multi" },
        { name: "age", value: age, collectionFormat: "multi" },
        { name: "app_category", value: appCategory, collectionFormat: "multi" },
        { name: "app_ids", value: appIds, collectionFormat: "multi" },
        { name: "article_category", value: articleCategory, collectionFormat: "multi" },
        { name: "auto_extend_targets", value: autoExtendTargets, collectionFormat: "multi" },
        { name: "aweme_fans_numbers", value: awemeFansNumbers, collectionFormat: "multi" },
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


