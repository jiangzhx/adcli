// 由 oceanengine/ad_open_sdk_go models/model_diagnosis_task_adv_create_v2_response_data.go 生成
// 不要手动编辑。

export interface DiagnosisTaskAdvCreateV2ResponseData {
  err_code?: string;
  err_message?: string;
  fail_video_ids?: Record<string, Record<string, unknown>>;
  task_ids?: (number | string)[];
}

