// Generated from oceanengine/ad_open_sdk_go models/model_project_list_v3_0_response_data_list_inner_track_url_setting.go
// Do not edit manually.

import type { ProjectListV30DataListTrackUrlSettingSendType, ProjectListV30DataListTrackUrlSettingTrackUrlType } from "../models/index";

export interface ProjectListV30ResponseDataListInnerTrackUrlSetting {
  action_track_url?: string[];
  active_track_url?: string[];
  send_type?: ProjectListV30DataListTrackUrlSettingSendType;
  track_url?: string[];
  track_url_group_id?: number | string;
  track_url_type?: ProjectListV30DataListTrackUrlSettingTrackUrlType;
  video_play_done_track_url?: string[];
  video_play_effective_track_url?: string[];
  video_play_first_track_url?: string[];
}

