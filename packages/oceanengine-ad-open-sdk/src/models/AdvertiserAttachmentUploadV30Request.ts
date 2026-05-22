// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserAttachmentUploadV30AttachmentType } from "../models";

export interface AdvertiserAttachmentUploadV30Request {
  advertiser_id: number;
  attachment_type: AdvertiserAttachmentUploadV30AttachmentType;
  filename: string;
  image_data: File;
}

