// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_call_list_struct.go
// Do not edit manually.

export interface CallListStruct {
  call_id?: string;
  account_id?: number | string;
  leads_id?: number | string;
  caller?: string;
  callee?: string;
  call_direction?: string;
  duration?: number;
  call_start_time?: string;
  call_end_time?: string;
  ring_time?: string;
  answer_time?: string;
  end_status?: number;
  call_record_url?: string;
}

