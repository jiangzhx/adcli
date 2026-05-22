// Generated from tencentad/marketing-api-go-sdk pkg/model/model_unsupport_billing_spec_adpermit.go
// Do not edit manually.

import type { BillingEvent, UnsupportType } from "../model/index";

export interface UnsupportBillingSpecAdpermit {
  site_set?: string[];
  billing_event?: BillingEvent;
  min_price?: number;
  max_price?: number;
  unsupport_type?: UnsupportType;
}

