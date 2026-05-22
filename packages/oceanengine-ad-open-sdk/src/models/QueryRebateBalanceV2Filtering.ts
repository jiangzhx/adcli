// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QueryRebateBalanceV2FilteringApprovalStatus, QueryRebateBalanceV2FilteringArchiveStatusList, QueryRebateBalanceV2FilteringInvoiceStatusList, QueryRebateBalanceV2FilteringMonthQuarter, QueryRebateBalanceV2FilteringPlatforms, QueryRebateBalanceV2FilteringStampStatusList, QueryRebateBalanceV2FilteringStampType, QueryRebateBalanceV2FilteringStandard, QueryRebateBalanceV2FilteringUseType } from "../models";

export interface QueryRebateBalanceV2Filtering {
  approval_status?: QueryRebateBalanceV2FilteringApprovalStatus;
  archive_status_list?: QueryRebateBalanceV2FilteringArchiveStatusList[];
  contract_serial?: string;
  create_end_date?: string;
  create_start_date?: string;
  invoice_status_list?: QueryRebateBalanceV2FilteringInvoiceStatusList[];
  month_quarter?: QueryRebateBalanceV2FilteringMonthQuarter;
  platforms?: QueryRebateBalanceV2FilteringPlatforms[];
  rebate_balance_serial?: string;
  stamp_status_list?: QueryRebateBalanceV2FilteringStampStatusList[];
  stamp_type?: QueryRebateBalanceV2FilteringStampType;
  standard?: QueryRebateBalanceV2FilteringStandard;
  use_type?: QueryRebateBalanceV2FilteringUseType;
  year?: number;
}

