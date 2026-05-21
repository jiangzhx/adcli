// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { BrandMaterialListV30OrderFilterAdForm, BrandMaterialListV30OrderFilterAppOrigin, BrandMaterialListV30OrderFilterGdSendType, BrandMaterialListV30OrderFilterOrderStatus, BrandMaterialListV30OrderFilterProType } from "../models";

export interface BrandMaterialListV30OrderFilter {
  ad_form?: BrandMaterialListV30OrderFilterAdForm[];
  app_origin?: BrandMaterialListV30OrderFilterAppOrigin;
  create_end_time?: string;
  create_start_time?: string;
  end_time?: string;
  gd_send_type?: BrandMaterialListV30OrderFilterGdSendType;
  order_id?: string;
  order_name?: string;
  order_status?: BrandMaterialListV30OrderFilterOrderStatus[];
  pro_type?: BrandMaterialListV30OrderFilterProType;
  start_time?: string;
}

