// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CreativeGetV2DataListImageMode, CreativeGetV2DataListOptStatus, CreativeGetV2DataListStatus, CreativeGetV2ResponseDataListInnerMaterialsInner } from "../models";

export interface CreativeGetV2ResponseDataListInner {
  ad_id?: number | string;
  advertiser_id?: number | string;
  aweme_item_id?: number | string;
  creative_create_time?: string;
  creative_id?: number | string;
  creative_modify_time?: string;
  creative_word_ids?: number | string[];
  image_id?: string;
  image_ids?: string[];
  image_mode?: CreativeGetV2DataListImageMode;
  materials?: CreativeGetV2ResponseDataListInnerMaterialsInner[];
  opt_status?: CreativeGetV2DataListOptStatus;
  status?: CreativeGetV2DataListStatus;
  third_party_id?: string;
  title?: string;
  video_id?: string;
}

