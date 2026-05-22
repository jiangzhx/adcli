// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_ad_control_task_update_v1_0_request_audience.go
// Do not edit manually.

import type { QianchuanUniPromotionAdControlTaskUpdateV10AudienceAge, QianchuanUniPromotionAdControlTaskUpdateV10AudienceAwemeFanBehaviors, QianchuanUniPromotionAdControlTaskUpdateV10AudienceAwemeFanBehaviorsDays, QianchuanUniPromotionAdControlTaskUpdateV10AudienceDistrict, QianchuanUniPromotionAdControlTaskUpdateV10AudienceGender, QianchuanUniPromotionAdControlTaskUpdateV10AudienceLocationType } from "../models/index";

export interface QianchuanUniPromotionAdControlTaskUpdateV10RequestAudience {
  age?: QianchuanUniPromotionAdControlTaskUpdateV10AudienceAge[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: QianchuanUniPromotionAdControlTaskUpdateV10AudienceAwemeFanBehaviors[];
  aweme_fan_behaviors_days?: QianchuanUniPromotionAdControlTaskUpdateV10AudienceAwemeFanBehaviorsDays;
  aweme_fan_categories?: number[];
  city?: number[];
  district?: QianchuanUniPromotionAdControlTaskUpdateV10AudienceDistrict;
  district_type?: boolean;
  gender?: QianchuanUniPromotionAdControlTaskUpdateV10AudienceGender;
  location_type?: QianchuanUniPromotionAdControlTaskUpdateV10AudienceLocationType;
}

