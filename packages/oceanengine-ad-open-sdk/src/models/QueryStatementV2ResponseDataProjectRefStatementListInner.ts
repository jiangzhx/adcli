// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QueryStatementV2ResponseDataProjectRefStatementListInnerAttachListInner } from "../models";

export interface QueryStatementV2ResponseDataProjectRefStatementListInner {
  archive_status?: number;
  archive_status_name?: string;
  attach_list?: QueryStatementV2ResponseDataProjectRefStatementListInnerAttachListInner[];
  project_id?: number;
  ref_statement_amount?: string;
  stamp_status?: number;
  stamp_status_name?: string;
  statement_id?: number;
  statement_serial?: string;
  status?: number;
  status_name?: string;
}

