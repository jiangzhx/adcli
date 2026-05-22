// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsAwemeAuthListV2DataListAuthStatus, ToolsAwemeAuthListV2DataListAuthType, ToolsAwemeAuthListV2DataListAwemeUserType, ToolsAwemeAuthListV2DataListShareType, ToolsAwemeAuthListV2DataListSubStatus, ToolsAwemeAuthListV2DataListWarningTypes, ToolsAwemeAuthListV2ResponseDataListInnerAuthThresholdInfo, ToolsAwemeAuthListV2ResponseDataListInnerVideoInfo } from "../models";

export interface ToolsAwemeAuthListV2ResponseDataListInner {
  auth_auto_expire_date?: string;
  auth_status?: ToolsAwemeAuthListV2DataListAuthStatus;
  auth_threshold_info?: ToolsAwemeAuthListV2ResponseDataListInnerAuthThresholdInfo;
  auth_type?: ToolsAwemeAuthListV2DataListAuthType;
  aweme_cancel_image_list?: string[];
  aweme_cancel_note?: string;
  aweme_cancel_reason?: string;
  aweme_id?: string;
  aweme_name?: string;
  aweme_user_type?: ToolsAwemeAuthListV2DataListAwemeUserType;
  end_time?: string;
  has_video_hp_visibility_limit?: boolean;
  note?: string;
  open_id?: string;
  share_type?: ToolsAwemeAuthListV2DataListShareType;
  start_time?: string;
  sub_status?: ToolsAwemeAuthListV2DataListSubStatus;
  video_info?: ToolsAwemeAuthListV2ResponseDataListInnerVideoInfo;
  warning_content?: string[];
  warning_types?: ToolsAwemeAuthListV2DataListWarningTypes[];
}

