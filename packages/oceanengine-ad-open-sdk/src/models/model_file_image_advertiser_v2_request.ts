// 由 oceanengine/ad_open_sdk_go models/model_file_image_advertiser_v2_request.go 生成
// 不要手动编辑。

import type { FileImageAdvertiserV2UploadTo, FileImageAdvertiserV2UploadType } from "../models/index";

export interface FileImageAdvertiserV2Request {
  advertiser_id: number | string;
  image_file?: Blob;
  image_signature?: string;
  image_url?: string;
  upload_to: FileImageAdvertiserV2UploadTo;
  upload_type?: FileImageAdvertiserV2UploadType;
}

