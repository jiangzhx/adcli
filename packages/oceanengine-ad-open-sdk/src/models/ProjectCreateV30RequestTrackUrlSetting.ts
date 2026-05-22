// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ProjectCreateV30TrackUrlSettingSendType, ProjectCreateV30TrackUrlSettingTrackUrlType } from "../models";

export interface ProjectCreateV30RequestTrackUrlSetting {
  action_track_url?: string[];
  active_track_url?: string[];
  send_type?: ProjectCreateV30TrackUrlSettingSendType;
  track_url?: string[];
  track_url_group_id?: number;
  track_url_type?: ProjectCreateV30TrackUrlSettingTrackUrlType;
  video_play_done_track_url?: string[];
  video_play_effective_track_url?: string[];
  video_play_first_track_url?: string[];
}

