// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PenaltyTaskGetV30DataPenaltyTaskListBusinessLine, PenaltyTaskGetV30DataPenaltyTaskListTaskStatus } from "../models";

export interface PenaltyTaskGetV30ResponseDataPenaltyTaskListInner {
  account_penalty_amount?: number;
  account_penalty_multiple?: number;
  advertiser_id: number;
  advertiser_name?: string;
  ban_adv_reason?: string;
  ban_adv_term?: string;
  business_line: PenaltyTaskGetV30DataPenaltyTaskListBusinessLine;
  company_id: number;
  customer_id?: number;
  customer_name?: string;
  diposal_date?: string;
  disposal_level?: string;
  id: string;
  task_status: PenaltyTaskGetV30DataPenaltyTaskListTaskStatus;
  ticket_id?: number;
}

