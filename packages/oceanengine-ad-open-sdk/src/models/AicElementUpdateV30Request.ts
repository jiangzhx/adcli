// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AicElementUpdateV30AccountType } from "../models";

export interface AicElementUpdateV30Request {
  account_id: number;
  account_type: AicElementUpdateV30AccountType;
  element_id: number;
  element_name?: string;
  path_name?: string;
}

