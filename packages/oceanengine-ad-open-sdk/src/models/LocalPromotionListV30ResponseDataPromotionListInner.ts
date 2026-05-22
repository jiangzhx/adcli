// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalPromotionListV30DataPromotionListAdType, LocalPromotionListV30DataPromotionListLearningPhase, LocalPromotionListV30DataPromotionListLocalDeliveryScene, LocalPromotionListV30DataPromotionListPromotionStatusFirst, LocalPromotionListV30DataPromotionListPromotionStatusSecond } from "../models";

export interface LocalPromotionListV30ResponseDataPromotionListInner {
  ad_type?: LocalPromotionListV30DataPromotionListAdType;
  aweme_id?: string;
  aweme_name?: string;
  learning_phase?: LocalPromotionListV30DataPromotionListLearningPhase;
  local_account_id?: number | string;
  local_delivery_scene?: LocalPromotionListV30DataPromotionListLocalDeliveryScene;
  project_id?: number | string;
  promotion_create_time?: string;
  promotion_id?: number | string;
  promotion_modify_time?: string;
  promotion_name?: string;
  promotion_status_first?: LocalPromotionListV30DataPromotionListPromotionStatusFirst;
  promotion_status_second?: LocalPromotionListV30DataPromotionListPromotionStatusSecond[];
}

