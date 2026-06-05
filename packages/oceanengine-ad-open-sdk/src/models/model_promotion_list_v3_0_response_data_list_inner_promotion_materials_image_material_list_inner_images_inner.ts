// 由 oceanengine/ad_open_sdk_go models/model_promotion_list_v3_0_response_data_list_inner_promotion_materials_image_material_list_inner_images_inner.go 生成
// 不要手动编辑。

import type { PromotionListV30DataListPromotionMaterialsImageMaterialListImagesMaterialOptStatus, PromotionListV30DataListPromotionMaterialsImageMaterialListImagesMaterialStatus } from "../models/index";

export interface PromotionListV30ResponseDataListInnerPromotionMaterialsImageMaterialListInnerImagesInner {
  image_id?: string;
  material_id?: number | string;
  material_opt_status?: PromotionListV30DataListPromotionMaterialsImageMaterialListImagesMaterialOptStatus;
  material_status?: PromotionListV30DataListPromotionMaterialsImageMaterialListImagesMaterialStatus;
  template_id?: number | string;
}

