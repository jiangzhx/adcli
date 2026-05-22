// Generated from oceanengine/ad_open_sdk_go models/model_advertiser_attachment_upload_v3_0_request.go
// Do not edit manually.

import type { AdvertiserAttachmentUploadV30AttachmentType } from "../models/index";

export interface AdvertiserAttachmentUploadV30Request {
  advertiser_id: number | string;
  attachment_type: AdvertiserAttachmentUploadV30AttachmentType;
  filename: string;
  image_data: Blob;
}

