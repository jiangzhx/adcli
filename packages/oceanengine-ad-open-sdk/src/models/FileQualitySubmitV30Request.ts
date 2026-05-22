// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { FileQualitySubmitV30MaterialChannel, FileQualitySubmitV30MaterialType } from "../models";

export interface FileQualitySubmitV30Request {
  advertiser_id: number | string;
  material_channel: FileQualitySubmitV30MaterialChannel;
  material_type: FileQualitySubmitV30MaterialType;
  video_url: string;
}

