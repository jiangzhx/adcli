// 由 oceanengine/ad_open_sdk_go models/model_star_fe_common_service_talent_day_judge_checked_in_v2_response_data.go 生成
// 不要手动编辑。

import type { StarFeCommonServiceTalentDayJudgeCheckedInV2ResponseDataPlatformMeetingsInner, StarFeCommonServiceTalentDayJudgeCheckedInV2ResponseDataSchedulesInner } from "../models/index";

export interface StarFeCommonServiceTalentDayJudgeCheckedInV2ResponseData {
  name?: string;
  platform_meetings?: StarFeCommonServiceTalentDayJudgeCheckedInV2ResponseDataPlatformMeetingsInner[];
  role?: number;
  role_name?: string;
  schedules?: StarFeCommonServiceTalentDayJudgeCheckedInV2ResponseDataSchedulesInner[];
  uid?: string;
}

