// 由 oceanengine/ad_open_sdk_go models/model_douplus_order_create_v3_0_request_targeting.go 生成
// 不要手动编辑。

import type { DouplusOrderCreateV30TargetingAge, DouplusOrderCreateV30TargetingAudienceMode, DouplusOrderCreateV30TargetingGender } from "../models/index";

export interface DouplusOrderCreateV30RequestTargeting {
  age?: DouplusOrderCreateV30TargetingAge[];
  audience_mode: DouplusOrderCreateV30TargetingAudienceMode;
  audience_pkg_id?: number | string;
  dmp_pkg_ids?: (number | string)[];
  gender?: DouplusOrderCreateV30TargetingGender;
}

