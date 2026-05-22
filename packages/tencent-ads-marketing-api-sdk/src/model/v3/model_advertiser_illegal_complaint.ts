// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_advertiser_illegal_complaint.go
// Do not edit manually.

import type { IllegalComplaintStatus } from "../v3/index";

export interface AdvertiserIllegalComplaint {
  illegal_order_id?: string;
  advertiser_account_id?: number | string;
  advertiser_name?: string;
  first_industry?: string;
  second_industry?: string;
  action_type?: number;
  illegal_time?: string;
  illegal_level?: number;
  illegal_reason?: string;
  complaint_status?: IllegalComplaintStatus;
  reject_reason?: string;
  reject_evidence_list?: string[];
}

