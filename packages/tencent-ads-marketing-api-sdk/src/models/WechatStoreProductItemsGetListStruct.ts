// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { SpuLinkStatus, StorePriceItem } from "../models";

export interface WechatStoreProductItemsGetListStruct {
  product_outer_id?: string;
  product_name?: string;
  description?: string;
  product_primary_image_urls?: string[];
  product_detail_image_urls?: string[];
  price?: number;
  first_category_id?: number | string;
  first_category_name?: string;
  second_category_id?: number | string;
  second_category_name?: string;
  third_category_id?: number | string;
  third_category_name?: string;
  fourth_category_id?: number | string;
  fourth_category_name?: string;
  brand_name?: string;
  sales_volume?: number;
  comment_num?: number;
  spu_link_status?: SpuLinkStatus;
  link_spu_id?: string;
  link_spu_name?: string;
  wechat_store_product_status?: number;
  wechat_store_product_ad_status?: number;
  wechat_store_product_ad_unavailable_cause?: string[];
  store_price_item_list?: StorePriceItem[];
  store_id?: string;
  wx_store_product_operate_type?: number;
  sku_stock_status?: number;
}

