// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarOrderGetComponentV2ResponseDataOrderComponentListInnerEcomInfoInner, StarOrderGetComponentV2ResponseDataOrderComponentListInnerLinkComponentListInner } from "../models";

export interface StarOrderGetComponentV2ResponseDataOrderComponentListInner {
  cocreate_douyin_id?: string;
  ecom_info?: StarOrderGetComponentV2ResponseDataOrderComponentListInnerEcomInfoInner[];
  industry_component_id?: number;
  link_component_list?: StarOrderGetComponentV2ResponseDataOrderComponentListInnerLinkComponentListInner[];
  live_attract_component_id?: number;
  order_id?: number;
  search_word?: string;
}

