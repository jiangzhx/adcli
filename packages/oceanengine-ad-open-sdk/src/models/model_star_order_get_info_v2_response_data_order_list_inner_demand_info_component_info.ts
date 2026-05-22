// Generated from oceanengine/ad_open_sdk_go models/model_star_order_get_info_v2_response_data_order_list_inner_demand_info_component_info.go
// Do not edit manually.

import type { StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfoComponentInfoEcomCartInner } from "../models/index";

export interface StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfoComponentInfo {
  cocreate_douyin_id?: string;
  ecom_cart?: StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfoComponentInfoEcomCartInner[];
  industry_component_id?: number | string;
  link_component_ids?: (number | string)[];
  live_attract_component_id?: number | string;
  search_word?: string;
}

