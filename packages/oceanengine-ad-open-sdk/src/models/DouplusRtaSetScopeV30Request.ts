// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DouplusRtaSetScopeV30TargetType } from "../models";

export interface DouplusRtaSetScopeV30Request {
  aweme_sec_uid: string;
  rta_id: number | string;
  target_ids?: number | string[];
  target_type: DouplusRtaSetScopeV30TargetType;
}

