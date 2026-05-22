// Generated from oceanengine/ad_open_sdk_go models/model_star_order_get_component_v2_response_data_order_component_list_inner.go
// Do not edit manually.

import type { StarOrderGetComponentV2ResponseDataOrderComponentListInnerEcomInfoInner, StarOrderGetComponentV2ResponseDataOrderComponentListInnerLinkComponentListInner } from "../models/index";

export interface StarOrderGetComponentV2ResponseDataOrderComponentListInner {
  cocreate_douyin_id?: string;
  ecom_info?: StarOrderGetComponentV2ResponseDataOrderComponentListInnerEcomInfoInner[];
  industry_component_id?: number | string;
  link_component_list?: StarOrderGetComponentV2ResponseDataOrderComponentListInnerLinkComponentListInner[];
  live_attract_component_id?: number | string;
  order_id?: number | string;
  search_word?: string;
}

