// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_audience_create_v3_0_request_delivery_setting.go 生成
// 不要手动编辑。

import type { OcProjectToolsAudienceCreateV30DeliverySettingSettingType } from "../models/index";

export interface OcProjectToolsAudienceCreateV30RequestDeliverySetting {
  cpa_bid?: number;
  cpa_bid_rate?: number;
  deep_bid?: number;
  deep_bid_rate?: number;
  first_roi_goal?: number;
  first_roi_goal_rate?: number;
  roi_goal?: number;
  roi_goal_rate?: number;
  setting_type: OcProjectToolsAudienceCreateV30DeliverySettingSettingType;
}

