// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_audience_file_part_upload_v1_0_request.go
// Do not edit manually.

export interface QianchuanAudienceFilePartUploadV10Request {
  advertiser_id: number | string;
  file: Blob;
  file_key?: string;
  is_finished: number;
  part_num: number;
}

