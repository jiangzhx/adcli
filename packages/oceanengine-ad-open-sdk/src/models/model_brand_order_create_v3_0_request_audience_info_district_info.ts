// 由 oceanengine/ad_open_sdk_go models/model_brand_order_create_v3_0_request_audience_info_district_info.go 生成
// 不要手动编辑。

import type { BrandOrderCreateV30AudienceInfoDistrictInfoCitySelectType, BrandOrderCreateV30AudienceInfoDistrictInfoDistrictType, BrandOrderCreateV30AudienceInfoDistrictInfoLocationType } from "../models/index";

export interface BrandOrderCreateV30RequestAudienceInfoDistrictInfo {
  city?: number[];
  city_select_type?: BrandOrderCreateV30AudienceInfoDistrictInfoCitySelectType;
  district_type?: BrandOrderCreateV30AudienceInfoDistrictInfoDistrictType;
  location_type?: BrandOrderCreateV30AudienceInfoDistrictInfoLocationType;
}

