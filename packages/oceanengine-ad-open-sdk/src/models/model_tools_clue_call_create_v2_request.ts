// 由 oceanengine/ad_open_sdk_go models/model_tools_clue_call_create_v2_request.go 生成
// 不要手动编辑。

export interface ToolsClueCallCreateV2Request {
  advertiser_id: number | string;
  call_type: number;
  callee_number: string;
  caller_number?: string;
  clue_id: number | string;
  user_id: number | string;
}

