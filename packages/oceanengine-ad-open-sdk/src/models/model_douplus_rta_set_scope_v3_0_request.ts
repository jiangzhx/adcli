// 由 oceanengine/ad_open_sdk_go models/model_douplus_rta_set_scope_v3_0_request.go 生成
// 不要手动编辑。

import type { DouplusRtaSetScopeV30TargetType } from "../models/index";

export interface DouplusRtaSetScopeV30Request {
  aweme_sec_uid: string;
  rta_id: number | string;
  target_ids?: (number | string)[];
  target_type: DouplusRtaSetScopeV30TargetType;
}

