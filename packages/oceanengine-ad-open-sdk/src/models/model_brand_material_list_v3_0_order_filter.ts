// 由 oceanengine/ad_open_sdk_go models/model_brand_material_list_v3_0_order_filter.go 生成
// 不要手动编辑。

import type { BrandMaterialListV30OrderFilterAdForm, BrandMaterialListV30OrderFilterAdvancedOption, BrandMaterialListV30OrderFilterAppOrigin, BrandMaterialListV30OrderFilterGdSendType, BrandMaterialListV30OrderFilterOrderStatus, BrandMaterialListV30OrderFilterProType } from "../models/index";

export interface BrandMaterialListV30OrderFilter {
  ad_form?: BrandMaterialListV30OrderFilterAdForm[];
  advanced_option?: BrandMaterialListV30OrderFilterAdvancedOption;
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

