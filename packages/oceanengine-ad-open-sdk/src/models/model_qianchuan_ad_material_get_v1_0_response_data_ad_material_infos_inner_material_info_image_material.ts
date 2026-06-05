// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_material_get_v1_0_response_data_ad_material_infos_inner_material_info_image_material.go 生成
// 不要手动编辑。

import type { QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoImageMaterialImageMode, QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoImageMaterialSource, QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoImageMaterialImagesInner } from "../models/index";

export interface QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoImageMaterial {
  description?: string;
  image_mode?: QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoImageMaterialImageMode;
  images?: QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoImageMaterialImagesInner[];
  material_id?: number | string;
  music_url?: string;
  source?: QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoImageMaterialSource;
  title?: string;
}

