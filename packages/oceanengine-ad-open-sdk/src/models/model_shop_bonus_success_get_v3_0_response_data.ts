// 由 oceanengine/ad_open_sdk_go models/model_shop_bonus_success_get_v3_0_response_data.go 生成
// 不要手动编辑。

import type { ShopBonusSuccessGetV30ResponseDataCouponInfosInner } from "../models/index";

export interface ShopBonusSuccessGetV30ResponseData {
  coupon_infos?: ShopBonusSuccessGetV30ResponseDataCouponInfosInner[];
  coupon_type?: string[];
  enable_coupon?: boolean;
  promotion_id?: number | string;
}

