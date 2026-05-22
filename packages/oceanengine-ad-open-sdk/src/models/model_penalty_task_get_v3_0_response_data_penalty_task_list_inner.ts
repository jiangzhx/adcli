// Generated from oceanengine/ad_open_sdk_go models/model_penalty_task_get_v3_0_response_data_penalty_task_list_inner.go
// Do not edit manually.

import type { PenaltyTaskGetV30DataPenaltyTaskListBusinessLine, PenaltyTaskGetV30DataPenaltyTaskListTaskStatus } from "../models/index";

export interface PenaltyTaskGetV30ResponseDataPenaltyTaskListInner {
  account_penalty_amount?: number;
  account_penalty_multiple?: number;
  advertiser_id: number | string;
  advertiser_name?: string;
  ban_adv_reason?: string;
  ban_adv_term?: string;
  business_line: PenaltyTaskGetV30DataPenaltyTaskListBusinessLine;
  company_id: number | string;
  customer_id?: number | string;
  customer_name?: string;
  diposal_date?: string;
  disposal_level?: string;
  id: string;
  task_status: PenaltyTaskGetV30DataPenaltyTaskListTaskStatus;
  ticket_id?: number | string;
}

