// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_update_v1_0_request_creative_list_inner_title_material.go 生成
// 不要手动编辑。

import type { QianchuanAdUpdateV10CreativeListTitleMaterialTitleType, QianchuanAdUpdateV10RequestCreativeListInnerTitleMaterialDynamicWordsInner } from "../models/index";

export interface QianchuanAdUpdateV10RequestCreativeListInnerTitleMaterial {
  dynamic_words?: QianchuanAdUpdateV10RequestCreativeListInnerTitleMaterialDynamicWordsInner[];
  id?: number | string;
  title: string;
  title_type?: QianchuanAdUpdateV10CreativeListTitleMaterialTitleType;
}

