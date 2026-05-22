// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ShopBonusCreateV30CouponShopPlatform, ShopBonusCreateV30CouponType, ShopBonusCreateV30RequestCouponInfosInner } from "../models";

export interface ShopBonusCreateV30Request {
  advertiser_id: number;
  coupon_infos?: ShopBonusCreateV30RequestCouponInfosInner[];
  coupon_shop_platform: ShopBonusCreateV30CouponShopPlatform;
  coupon_type?: ShopBonusCreateV30CouponType[];
  enable_coupon: boolean;
  promotion_id: number;
}

