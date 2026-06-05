// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_ad_status_update_v1_0_request.go 生成
// 不要手动编辑。

import type { QianchuanUniPromotionAdStatusUpdateV10OptStatus } from "../models/index";

export interface QianchuanUniPromotionAdStatusUpdateV10Request {
  ad_ids: (number | string)[];
  advertiser_id: number | string;
  opt_status: QianchuanUniPromotionAdStatusUpdateV10OptStatus;
}

