// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalFileVideoAwemeGetV30DataVideoListImageMode } from "../models";

export interface LocalFileVideoAwemeGetV30ResponseDataVideoListInner {
  aweme_id?: string;
  aweme_name?: string;
  aweme_video_url?: string;
  can_delivery?: boolean;
  cover_image_url?: string;
  duration: string;
  image_mode: LocalFileVideoAwemeGetV30DataVideoListImageMode;
  item_id: string;
  lego_material_id?: number;
  not_delivery_reason?: string[];
  title: string;
  video_heigh?: number;
  video_id: string;
  video_width?: number;
}

