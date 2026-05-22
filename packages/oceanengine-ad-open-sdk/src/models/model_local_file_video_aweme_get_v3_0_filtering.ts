// Generated from oceanengine/ad_open_sdk_go models/model_local_file_video_aweme_get_v3_0_filtering.go
// Do not edit manually.

import type { LocalFileVideoAwemeGetV30FilteringAnchorInfo, LocalFileVideoAwemeGetV30FilteringItemStatus } from "../models/index";

export interface LocalFileVideoAwemeGetV30Filtering {
  anchor_info: LocalFileVideoAwemeGetV30FilteringAnchorInfo;
  aweme_ids?: string[];
  end_time?: string;
  item_ids?: (number | string)[];
  item_status?: LocalFileVideoAwemeGetV30FilteringItemStatus;
  start_time?: string;
}

