// 由 oceanengine/ad_open_sdk_go models/model_std_project_list_v3_0_response_data_list_inner_track_url_setting.go 生成
// 不要手动编辑。

import type { StdProjectListV30DataListTrackUrlSettingSendType, StdProjectListV30DataListTrackUrlSettingTrackUrlType } from "../models/index";

export interface StdProjectListV30ResponseDataListInnerTrackUrlSetting {
  action_track_url?: string[];
  active_track_url?: string[];
  send_type?: StdProjectListV30DataListTrackUrlSettingSendType;
  track_url?: string[];
  track_url_group_id?: number | string;
  track_url_type?: StdProjectListV30DataListTrackUrlSettingTrackUrlType;
  video_play_done_track_url?: string[];
  video_play_effective_track_url?: string[];
  video_play_first_track_url?: string[];
}

