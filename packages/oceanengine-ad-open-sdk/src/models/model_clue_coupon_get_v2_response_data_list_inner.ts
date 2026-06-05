// 由 oceanengine/ad_open_sdk_go models/model_clue_coupon_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { ClueCouponGetV2DataListActivityType, ClueCouponGetV2ResponseDataListInnerCoupon } from "../models/index";

export interface ClueCouponGetV2ResponseDataListInner {
  activity_id?: number | string;
  activity_type?: ClueCouponGetV2DataListActivityType;
  bind_form_id?: number | string;
  coupon?: ClueCouponGetV2ResponseDataListInnerCoupon;
}

