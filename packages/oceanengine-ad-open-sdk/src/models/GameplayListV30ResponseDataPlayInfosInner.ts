// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { GameplayListV30DataPlayInfosPlayTypes } from "../models";

export interface GameplayListV30ResponseDataPlayInfosInner {
  create_time: number;
  guide_video_id: string;
  play_desc?: string;
  play_id: number | string;
  play_name: string;
  play_types: GameplayListV30DataPlayInfosPlayTypes[];
  verify_video_id: string;
}

