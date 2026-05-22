// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ProjectUpdateV30TrackUrlSettingSendType, ProjectUpdateV30TrackUrlSettingTrackUrlType } from "../models";

export interface ProjectUpdateV30RequestTrackUrlSetting {
  action_track_url?: string[];
  active_track_url?: string[];
  send_type?: ProjectUpdateV30TrackUrlSettingSendType;
  track_url?: string[];
  track_url_group_id?: number;
  track_url_type?: ProjectUpdateV30TrackUrlSettingTrackUrlType;
  video_play_done_track_url?: string[];
  video_play_effective_track_url?: string[];
  video_play_first_track_url?: string[];
}

