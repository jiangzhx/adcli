// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_audience_file_part_upload_v1_0_request.go 生成
// 不要手动编辑。

export interface QianchuanAudienceFilePartUploadV10Request {
  advertiser_id: number | string;
  file: Blob;
  file_key?: string;
  is_finished: number;
  part_num: number;
}

