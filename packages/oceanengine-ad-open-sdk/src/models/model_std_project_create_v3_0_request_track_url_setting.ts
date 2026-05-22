// Generated from oceanengine/ad_open_sdk_go models/model_std_project_create_v3_0_request_track_url_setting.go
// Do not edit manually.

import type { StdProjectCreateV30TrackUrlSettingSendType, StdProjectCreateV30TrackUrlSettingTrackUrlType } from "../models/index";

export interface StdProjectCreateV30RequestTrackUrlSetting {
  action_track_url?: string[];
  active_track_url?: string[];
  send_type?: StdProjectCreateV30TrackUrlSettingSendType;
  track_url?: string[];
  track_url_group_id?: number | string;
  track_url_type?: StdProjectCreateV30TrackUrlSettingTrackUrlType;
  video_play_done_track_url?: string[];
  video_play_effective_track_url?: string[];
  video_play_first_track_url?: string[];
}

