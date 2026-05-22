// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_ad_update_v1_0_request_creative_list_inner_title_material.go
// Do not edit manually.

import type { QianchuanAdUpdateV10CreativeListTitleMaterialTitleType, QianchuanAdUpdateV10RequestCreativeListInnerTitleMaterialDynamicWordsInner } from "../models/index";

export interface QianchuanAdUpdateV10RequestCreativeListInnerTitleMaterial {
  dynamic_words?: QianchuanAdUpdateV10RequestCreativeListInnerTitleMaterialDynamicWordsInner[];
  id?: number | string;
  title: string;
  title_type?: QianchuanAdUpdateV10CreativeListTitleMaterialTitleType;
}

