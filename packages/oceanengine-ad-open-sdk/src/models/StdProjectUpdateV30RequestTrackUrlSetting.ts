// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StdProjectUpdateV30TrackUrlSettingSendType, StdProjectUpdateV30TrackUrlSettingTrackUrlType } from "../models";

export interface StdProjectUpdateV30RequestTrackUrlSetting {
  action_track_url?: string[];
  active_track_url?: string[];
  send_type?: StdProjectUpdateV30TrackUrlSettingSendType;
  track_url?: string[];
  track_url_group_id?: number;
  track_url_type?: StdProjectUpdateV30TrackUrlSettingTrackUrlType;
  video_play_done_track_url?: string[];
  video_play_effective_track_url?: string[];
  video_play_first_track_url?: string[];
}

