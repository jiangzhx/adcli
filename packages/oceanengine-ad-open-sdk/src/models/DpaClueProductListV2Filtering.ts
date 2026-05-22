// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaClueProductListV2FilteringAuditStatus, DpaClueProductListV2FilteringCompletionStatus, DpaClueProductListV2FilteringRels, DpaClueProductListV2FilteringStatuses } from "../models";

export interface DpaClueProductListV2Filtering {
  audit_status?: DpaClueProductListV2FilteringAuditStatus[];
  category_ids?: number | string[];
  category_name?: string;
  completion_status?: DpaClueProductListV2FilteringCompletionStatus[];
  product_id_or_name_search?: string;
  product_ids?: number | string[];
  product_name?: string;
  rels?: DpaClueProductListV2FilteringRels[];
  statuses?: DpaClueProductListV2FilteringStatuses[];
}

