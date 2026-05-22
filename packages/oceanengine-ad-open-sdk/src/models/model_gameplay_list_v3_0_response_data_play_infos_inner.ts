// Generated from oceanengine/ad_open_sdk_go models/model_gameplay_list_v3_0_response_data_play_infos_inner.go
// Do not edit manually.

import type { GameplayListV30DataPlayInfosPlayTypes } from "../models/index";

export interface GameplayListV30ResponseDataPlayInfosInner {
  create_time: number;
  guide_video_id: string;
  play_desc?: string;
  play_id: number | string;
  play_name: string;
  play_types: GameplayListV30DataPlayInfosPlayTypes[];
  verify_video_id: string;
}

