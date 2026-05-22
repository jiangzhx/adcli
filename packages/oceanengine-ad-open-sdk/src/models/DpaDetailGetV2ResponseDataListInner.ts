// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaDetailGetV2DataListSpuSource, DpaDetailGetV2ResponseDataListInnerAuditReasonsInner, DpaDetailGetV2ResponseDataListInnerBrandInfo, DpaDetailGetV2ResponseDataListInnerImageUrlsInner, DpaDetailGetV2ResponseDataListInnerLandingInfo, DpaDetailGetV2ResponseDataListInnerPriceInfo, DpaDetailGetV2ResponseDataListInnerShopKeeperInfo, DpaDetailGetV2ResponseDataListInnerVideosInner } from "../models";

export interface DpaDetailGetV2ResponseDataListInner {
  age?: number[];
  audit_hit_field?: string;
  audit_reason_text?: string;
  audit_reasons?: DpaDetailGetV2ResponseDataListInnerAuditReasonsInner[];
  audit_status?: number;
  bought?: number;
  brand_info?: DpaDetailGetV2ResponseDataListInnerBrandInfo;
  city?: string[];
  comments?: number;
  description?: string;
  feature?: string;
  first_category?: string;
  first_category_id?: string;
  has_video?: number;
  image_url?: string;
  image_urls?: DpaDetailGetV2ResponseDataListInnerImageUrlsInner[];
  label?: string[];
  landing_info?: DpaDetailGetV2ResponseDataListInnerLandingInfo;
  mark?: number;
  name?: string;
  offline_time?: number;
  online_time?: number;
  outer_id?: string;
  platform_id?: number | string;
  price_info?: DpaDetailGetV2ResponseDataListInnerPriceInfo;
  product_id?: number | string;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaDetailGetV2ResponseDataListInnerShopKeeperInfo;
  spu_id?: string;
  spu_source?: DpaDetailGetV2DataListSpuSource;
  status?: number;
  stock?: number;
  sub_category?: string;
  sub_category_id?: string;
  tags?: string[];
  third_category?: string;
  third_category_id?: string;
  title?: string;
  titles?: string[];
  video?: string;
  videos?: DpaDetailGetV2ResponseDataListInnerVideosInner[];
}

