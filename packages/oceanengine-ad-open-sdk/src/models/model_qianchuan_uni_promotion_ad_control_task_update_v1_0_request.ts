// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_ad_control_task_update_v1_0_request.go 生成
// 不要手动编辑。

import type { QianchuanUniPromotionAdControlTaskUpdateV10RequestAudience } from "../models/index";

export interface QianchuanUniPromotionAdControlTaskUpdateV10Request {
  advertiser_id: number | string;
  audience?: QianchuanUniPromotionAdControlTaskUpdateV10RequestAudience;
  bid?: number;
  budget?: number;
  duration?: number;
  material_ids?: (number | string)[];
  name: string;
  roi2_goal?: number;
  task_id: number | string;
}

