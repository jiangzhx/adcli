// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { StardeliveryTaskDetailV30DataBriefType, StardeliveryTaskDetailV30DataStarTaskAnchorType, StardeliveryTaskDetailV30DataStarTaskExternalAction, StardeliveryTaskDetailV30DataStarTaskMaterialPurchaseMethod, StardeliveryTaskDetailV30DataStarTaskSource, StardeliveryTaskDetailV30DataStarTaskStatus, StardeliveryTaskDetailV30DataStarTaskSubStatus, StardeliveryTaskDetailV30ResponseDataAudienceSettings, StardeliveryTaskDetailV30ResponseDataProductAdditionalIntroduction, StardeliveryTaskDetailV30ResponseDataStarTaskAlbumMicroAppInfo, StardeliveryTaskDetailV30ResponseDataStarTaskAssetInfo, StardeliveryTaskDetailV30ResponseDataStarTaskMaterialsRequirements, StardeliveryTaskDetailV30ResponseDataTaskContactInfo } from "../models";

export interface StardeliveryTaskDetailV30ResponseData {
  android_app_package_name?: string;
  android_download_url?: string;
  android_external_url?: string;
  audience_settings?: StardeliveryTaskDetailV30ResponseDataAudienceSettings;
  author_submit_frequency?: number;
  author_task_name?: string;
  brief_type?: StardeliveryTaskDetailV30DataBriefType;
  first_industry_id?: number;
  first_industry_name?: string;
  ios_app_package_name?: string;
  ios_download_url?: string;
  ios_external_url?: string;
  micro_app_id?: string;
  micro_app_link?: string;
  micro_app_name?: string;
  micro_app_path?: string;
  product_additional_introduction?: StardeliveryTaskDetailV30ResponseDataProductAdditionalIntroduction;
  product_introduction?: string;
  product_name?: string;
  second_industry_id?: number;
  second_industry_name?: string;
  star_account_name?: string;
  star_ad_cost_divide_ratio?: number;
  star_id?: number;
  star_material_bid?: number;
  star_material_bid_range?: number[];
  star_task_album_micro_app_info?: StardeliveryTaskDetailV30ResponseDataStarTaskAlbumMicroAppInfo;
  star_task_anchor_id?: number;
  star_task_anchor_type?: StardeliveryTaskDetailV30DataStarTaskAnchorType;
  star_task_asset_info?: StardeliveryTaskDetailV30ResponseDataStarTaskAssetInfo;
  star_task_ban_reason_detail?: string;
  star_task_bid?: number;
  star_task_bid_android?: number;
  star_task_bid_ios?: number;
  star_task_budget?: number;
  star_task_create_time?: string;
  star_task_delayed_post_end_time?: string;
  star_task_external_action?: StardeliveryTaskDetailV30DataStarTaskExternalAction;
  star_task_id?: number;
  star_task_introduction_text?: string;
  star_task_material_purchase_method?: StardeliveryTaskDetailV30DataStarTaskMaterialPurchaseMethod;
  star_task_materials_requirements?: StardeliveryTaskDetailV30ResponseDataStarTaskMaterialsRequirements;
  star_task_name?: string;
  star_task_post_end_time?: string;
  star_task_source?: StardeliveryTaskDetailV30DataStarTaskSource;
  star_task_start_time?: string;
  star_task_status?: StardeliveryTaskDetailV30DataStarTaskStatus;
  star_task_sub_status?: StardeliveryTaskDetailV30DataStarTaskSubStatus;
  star_task_tags?: string;
  task_avatar_id?: string;
  task_avatar_url?: string;
  task_contact_info?: StardeliveryTaskDetailV30ResponseDataTaskContactInfo;
  task_head_image_id?: string;
}

