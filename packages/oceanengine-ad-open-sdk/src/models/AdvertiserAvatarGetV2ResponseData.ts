// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserAvatarGetV2DataAvatarStatus, AdvertiserAvatarGetV2DataSourceStatus, AdvertiserAvatarGetV2ResponseDataAvatarInfo } from "../models";

export interface AdvertiserAvatarGetV2ResponseData {
  advertiser_id?: number;
  avatar_info?: AdvertiserAvatarGetV2ResponseDataAvatarInfo;
  avatar_reason?: string;
  avatar_status?: AdvertiserAvatarGetV2DataAvatarStatus;
  source_info?: string;
  source_reason?: string;
  source_status?: AdvertiserAvatarGetV2DataSourceStatus;
}

