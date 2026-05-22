// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_dynamic_creatives_get_list_struct.go
// Do not edit manually.

import type { AdCreativeSource, AssetInconsistentStatus, ConfiguredStatus, CreativeComponents, CreativeInsight, CreativeSetApprovalStatus, DeliveryMode, DynamicCreativeType, MarketingAssetVerification, ProgramCreativeInfo } from "../v3/index";

export interface DynamicCreativesGetListStruct {
  adgroup_id?: number | string;
  dynamic_creative_id?: number | string;
  dynamic_creative_name?: string;
  creative_template_id?: number | string;
  delivery_mode?: DeliveryMode;
  dynamic_creative_type?: DynamicCreativeType;
  creative_components?: CreativeComponents;
  impression_tracking_url?: string;
  click_tracking_url?: string;
  program_creative_info?: ProgramCreativeInfo;
  page_track_url?: string;
  configured_status?: ConfiguredStatus;
  is_deleted?: boolean;
  created_time?: number;
  last_modified_time?: number;
  marketing_asset_verification?: MarketingAssetVerification;
  creative_set_approval_status?: CreativeSetApprovalStatus;
  source?: AdCreativeSource;
  asset_inconsistent_status?: AssetInconsistentStatus;
  source_dynamic_creative_id?: number | string;
  creative_insight?: CreativeInsight;
}

