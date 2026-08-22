// Generated from github.com/bububa/kwai-marketing-api/model/file/video.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface Video {
  cursor?: number;
  photo_id?: string;
  width?: number;
  height?: number;
  url?: string;
  cover_url?: string;
  signature?: string;
  upload_time?: string;
  photo_name?: string;
  photo_tag?: string[];
  new_status?: number;
  duration?: number;
  source?: number;
  photo_valuate_info?: PhotoValuateInfo;
  photo_tag_identify_items?: unknown[];
  outer_loop_native?: number;
  photo_user_id?: KuaishouId;
  atlas_pic_ids?: string[];
  atlas_audio_bs_key?: string;
  atlas_audio_url?: string;
  shield_status?: number;
  photo_dup_status?: number;
  native_good_info?: number;
}

export interface PhotoValuateInfo {
  simLabel?: string;
  qualityLabel?: string;
  quotaMsg?: string;
  isDupPhoto?: boolean;
  isDelayReview?: unknown;
  optimizationSuggestions?: string;
  runningScore?: number;
  hitTagCombination?: number;
}
