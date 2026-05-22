// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionListV30DataListPromotionMaterialsTrialPlayMaterialListImageMode, PromotionListV30DataListPromotionMaterialsTrialPlayMaterialListMaterialOptStatus, PromotionListV30DataListPromotionMaterialsTrialPlayMaterialListMaterialStatus } from "../models";

export interface PromotionListV30ResponseDataListInnerPromotionMaterialsTrialPlayMaterialListInner {
  app_play_uri?: string;
  app_play_version?: string;
  file_name?: string;
  guide_video_id?: string;
  image_mode?: PromotionListV30DataListPromotionMaterialsTrialPlayMaterialListImageMode;
  material_id?: number | string;
  material_opt_status?: PromotionListV30DataListPromotionMaterialsTrialPlayMaterialListMaterialOptStatus;
  material_status?: PromotionListV30DataListPromotionMaterialsTrialPlayMaterialListMaterialStatus;
}

