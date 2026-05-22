// Generated from oceanengine/ad_open_sdk_go models/model_aic_element_update_v3_0_request.go
// Do not edit manually.

import type { AicElementUpdateV30AccountType } from "../models/index";

export interface AicElementUpdateV30Request {
  account_id: number | string;
  account_type: AicElementUpdateV30AccountType;
  element_id: number | string;
  element_name?: string;
  path_name?: string;
}

