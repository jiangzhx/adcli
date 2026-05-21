// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QueryRebateAccountingInfoV2FilteringApprovalStatus, QueryRebateAccountingInfoV2FilteringIsCreateRebate, QueryRebateAccountingInfoV2FilteringMonthQuarter, QueryRebateAccountingInfoV2FilteringPlatforms, QueryRebateAccountingInfoV2FilteringUseType } from "../models";

export interface QueryRebateAccountingInfoV2Filtering {
  approval_status?: QueryRebateAccountingInfoV2FilteringApprovalStatus;
  contract_serial?: string;
  is_create_rebate?: QueryRebateAccountingInfoV2FilteringIsCreateRebate;
  month_quarter?: QueryRebateAccountingInfoV2FilteringMonthQuarter;
  platforms?: QueryRebateAccountingInfoV2FilteringPlatforms[];
  rebate_accounting_info_serial?: string;
  rebate_balance_serial?: string;
  use_type?: QueryRebateAccountingInfoV2FilteringUseType;
  year?: number;
}

