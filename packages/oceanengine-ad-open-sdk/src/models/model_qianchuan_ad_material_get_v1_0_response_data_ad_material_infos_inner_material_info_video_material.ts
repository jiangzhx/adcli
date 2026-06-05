// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_material_get_v1_0_response_data_ad_material_infos_inner_material_info_video_material.go 生成
// 不要手动编辑。

import type { QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialImageMode, QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialSource, QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterialCoverImage } from "../models/index";

export interface QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterial {
  cover_image?: QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterialCoverImage;
  image_mode?: QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialImageMode;
  material_id?: number | string;
  source?: QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialSource;
  title?: string;
  video_duration?: number;
  video_id?: string;
}

