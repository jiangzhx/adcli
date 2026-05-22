// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeAuthorizedGetV10DataAwemeIdListAwemeStatus, QianchuanAwemeAuthorizedGetV10DataAwemeIdListBindType } from "../models";

export interface QianchuanAwemeAuthorizedGetV10ResponseDataAwemeIdListInner {
  aweme_avatar?: string;
  aweme_has_live_permission?: boolean;
  aweme_has_publish_permission?: boolean;
  aweme_has_uni_prom?: boolean;
  aweme_has_video_permission?: boolean;
  aweme_id?: number;
  aweme_name?: string;
  aweme_show_id?: string;
  aweme_status?: QianchuanAwemeAuthorizedGetV10DataAwemeIdListAwemeStatus;
  bind_type?: QianchuanAwemeAuthorizedGetV10DataAwemeIdListBindType[];
}

