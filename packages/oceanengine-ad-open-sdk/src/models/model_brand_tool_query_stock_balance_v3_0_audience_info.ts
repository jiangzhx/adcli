// 由 oceanengine/ad_open_sdk_go models/model_brand_tool_query_stock_balance_v3_0_audience_info.go 生成
// 不要手动编辑。

import type { BrandToolQueryStockBalanceV30AudienceInfoAc, BrandToolQueryStockBalanceV30AudienceInfoAges, BrandToolQueryStockBalanceV30AudienceInfoDistrictInfo, BrandToolQueryStockBalanceV30AudienceInfoGender, BrandToolQueryStockBalanceV30AudienceInfoPlatform, BrandToolQueryStockBalanceV30AudienceInfoRetargetingInfo } from "../models/index";

export interface BrandToolQueryStockBalanceV30AudienceInfo {
  ac?: BrandToolQueryStockBalanceV30AudienceInfoAc;
  action_categories?: number[];
  ages?: BrandToolQueryStockBalanceV30AudienceInfoAges[];
  district_info?: BrandToolQueryStockBalanceV30AudienceInfoDistrictInfo;
  gender?: BrandToolQueryStockBalanceV30AudienceInfoGender;
  platform?: BrandToolQueryStockBalanceV30AudienceInfoPlatform;
  retargeting_info?: BrandToolQueryStockBalanceV30AudienceInfoRetargetingInfo;
}

