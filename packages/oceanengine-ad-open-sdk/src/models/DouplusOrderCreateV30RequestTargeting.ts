// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DouplusOrderCreateV30TargetingAge, DouplusOrderCreateV30TargetingAudienceMode, DouplusOrderCreateV30TargetingGender } from "../models";

export interface DouplusOrderCreateV30RequestTargeting {
  age?: DouplusOrderCreateV30TargetingAge[];
  audience_mode: DouplusOrderCreateV30TargetingAudienceMode;
  audience_pkg_id?: number | string;
  dmp_pkg_ids?: number | string[];
  gender?: DouplusOrderCreateV30TargetingGender;
}

