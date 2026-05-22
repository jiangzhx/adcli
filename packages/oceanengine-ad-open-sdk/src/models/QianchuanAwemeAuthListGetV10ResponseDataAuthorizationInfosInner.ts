// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAwemeAuthListGetV10DataAuthorizationInfosAuthRange, QianchuanAwemeAuthListGetV10DataAuthorizationInfosAuthSource, QianchuanAwemeAuthListGetV10DataAuthorizationInfosAuthStatus, QianchuanAwemeAuthListGetV10DataAuthorizationInfosAuthType, QianchuanAwemeAuthListGetV10ResponseDataAuthorizationInfosInnerAuthVideoInfo } from "../models";

export interface QianchuanAwemeAuthListGetV10ResponseDataAuthorizationInfosInner {
  auth_range?: QianchuanAwemeAuthListGetV10DataAuthorizationInfosAuthRange;
  auth_source?: QianchuanAwemeAuthListGetV10DataAuthorizationInfosAuthSource;
  auth_status?: QianchuanAwemeAuthListGetV10DataAuthorizationInfosAuthStatus;
  auth_type?: QianchuanAwemeAuthListGetV10DataAuthorizationInfosAuthType[];
  auth_video_info?: QianchuanAwemeAuthListGetV10ResponseDataAuthorizationInfosInnerAuthVideoInfo;
  aweme_avatar?: string;
  aweme_id?: number;
  aweme_name?: string;
  aweme_show_id?: string;
  create_time?: string;
  end_time?: string;
  is_cancellation_progress?: boolean;
  start_time?: string;
}

