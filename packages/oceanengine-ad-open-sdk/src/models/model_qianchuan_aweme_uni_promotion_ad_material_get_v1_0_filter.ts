// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_uni_promotion_ad_material_get_v1_0_filter.go 生成
// 不要手动编辑。

import type { QianchuanAwemeUniPromotionAdMaterialGetV10FilterMaterialStatus, QianchuanAwemeUniPromotionAdMaterialGetV10FilterMaterialType } from "../models/index";

export interface QianchuanAwemeUniPromotionAdMaterialGetV10Filter {
  end_date?: string;
  material_status?: QianchuanAwemeUniPromotionAdMaterialGetV10FilterMaterialStatus;
  material_type: QianchuanAwemeUniPromotionAdMaterialGetV10FilterMaterialType;
  start_date?: string;
}

