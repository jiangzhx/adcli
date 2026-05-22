// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_ad_control_task_create_v1_0_request_audience.go
// Do not edit manually.

import type { QianchuanUniPromotionAdControlTaskCreateV10AudienceAge, QianchuanUniPromotionAdControlTaskCreateV10AudienceAwemeFanBehaviors, QianchuanUniPromotionAdControlTaskCreateV10AudienceAwemeFanBehaviorsDays, QianchuanUniPromotionAdControlTaskCreateV10AudienceDistrict, QianchuanUniPromotionAdControlTaskCreateV10AudienceGender, QianchuanUniPromotionAdControlTaskCreateV10AudienceLocationType } from "../models/index";

export interface QianchuanUniPromotionAdControlTaskCreateV10RequestAudience {
  age?: QianchuanUniPromotionAdControlTaskCreateV10AudienceAge[];
  aweme_fan_accounts?: number[];
  aweme_fan_behaviors?: QianchuanUniPromotionAdControlTaskCreateV10AudienceAwemeFanBehaviors[];
  aweme_fan_behaviors_days?: QianchuanUniPromotionAdControlTaskCreateV10AudienceAwemeFanBehaviorsDays;
  aweme_fan_categories?: number[];
  city?: number[];
  district?: QianchuanUniPromotionAdControlTaskCreateV10AudienceDistrict;
  district_type?: boolean;
  gender?: QianchuanUniPromotionAdControlTaskCreateV10AudienceGender;
  location_type?: QianchuanUniPromotionAdControlTaskCreateV10AudienceLocationType;
}

