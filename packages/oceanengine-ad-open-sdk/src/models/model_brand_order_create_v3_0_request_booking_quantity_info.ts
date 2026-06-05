// 由 oceanengine/ad_open_sdk_go models/model_brand_order_create_v3_0_request_booking_quantity_info.go 生成
// 不要手动编辑。

import type { BrandOrderCreateV30BookingQuantityInfoStockIncreasePackageType, BrandOrderCreateV30RequestBookingQuantityInfoDailyQuantityInner } from "../models/index";

export interface BrandOrderCreateV30RequestBookingQuantityInfo {
  daily_quantity: BrandOrderCreateV30RequestBookingQuantityInfoDailyQuantityInner[];
  stock_increase_package_type?: BrandOrderCreateV30BookingQuantityInfoStockIncreasePackageType;
}

