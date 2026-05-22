// Generated from tencentad/marketing-api-go-sdk pkg/model/model_aggregate_account_detail.go
// Do not edit manually.

import type { InvalidPayLeadsDetail } from "../model/index";

export interface AggregateAccountDetail {
  account_id?: number | string;
  account_name?: string;
  is_real_pay?: boolean;
  no_pay_reason?: string;
  pay_total_amount?: number;
  pay_details?: InvalidPayLeadsDetail[];
}

