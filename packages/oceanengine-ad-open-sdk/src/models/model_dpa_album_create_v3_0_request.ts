// Generated from oceanengine/ad_open_sdk_go models/model_dpa_album_create_v3_0_request.go
// Do not edit manually.

import type { DpaAlbumCreateV30RequestVideoMetaMicoInner } from "../models/index";

export interface DpaAlbumCreateV30Request {
  album_title: string;
  app_id: number | string;
  seq_num: number;
  video_meta_mico: DpaAlbumCreateV30RequestVideoMetaMicoInner[];
}

