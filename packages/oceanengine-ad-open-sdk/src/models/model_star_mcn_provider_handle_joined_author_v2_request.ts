// Generated from oceanengine/ad_open_sdk_go models/model_star_mcn_provider_handle_joined_author_v2_request.go
// Do not edit manually.

export interface StarMcnProviderHandleJoinedAuthorV2Request {
  author_ids: (number | string)[];
  op_type: number;
  reason_type: number;
  reject_reason_detail?: string;
  star_id: number | string;
  task_id: number | string;
}

