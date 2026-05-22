// Generated from oceanengine/ad_open_sdk_go models/model_local_report_material_get_v3_0_filtering.go
// Do not edit manually.

import type { LocalReportMaterialGetV30FilteringCampaignType, LocalReportMaterialGetV30FilteringDeliveryMode, LocalReportMaterialGetV30FilteringExternalAction, LocalReportMaterialGetV30FilteringLocalDeliveryScene, LocalReportMaterialGetV30FilteringMaterialType } from "../models/index";

export interface LocalReportMaterialGetV30Filtering {
  campaign_type?: LocalReportMaterialGetV30FilteringCampaignType;
  cdp_project_ids?: number | string[];
  delivery_mode?: LocalReportMaterialGetV30FilteringDeliveryMode[];
  external_action?: LocalReportMaterialGetV30FilteringExternalAction[];
  local_delivery_scene?: LocalReportMaterialGetV30FilteringLocalDeliveryScene;
  material_ids?: number | string[];
  material_type?: LocalReportMaterialGetV30FilteringMaterialType;
  promotion_ids?: number | string[];
}

