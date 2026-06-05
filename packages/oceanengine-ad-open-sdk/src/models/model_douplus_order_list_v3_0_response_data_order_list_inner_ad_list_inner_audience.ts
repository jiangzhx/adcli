// 由 oceanengine/ad_open_sdk_go models/model_douplus_order_list_v3_0_response_data_order_list_inner_ad_list_inner_audience.go 生成
// 不要手动编辑。

import type { DouplusOrderListV30DataOrderListAdListAudienceDistrict } from "../models/index";

export interface DouplusOrderListV30ResponseDataOrderListInnerAdListInnerAudience {
  age?: string[];
  author_pkgs?: string[];
  business?: string[];
  city?: string[];
  delivery_type?: string;
  district?: DouplusOrderListV30DataOrderListAdListAudienceDistrict;
  gender?: string;
  interest_categories?: string[];
  platform?: string[];
  province?: string[];
}

