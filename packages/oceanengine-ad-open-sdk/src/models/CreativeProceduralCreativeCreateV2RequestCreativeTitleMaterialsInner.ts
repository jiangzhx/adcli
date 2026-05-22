// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CreativeProceduralCreativeCreateV2RequestCreativeTitleMaterialsInnerBidwordListInner, CreativeProceduralCreativeCreateV2RequestCreativeTitleMaterialsInnerDpaWordListInner, CreativeProceduralCreativeCreateV2RequestCreativeTitleMaterialsInnerWordListInner } from "../models";

export interface CreativeProceduralCreativeCreateV2RequestCreativeTitleMaterialsInner {
  bidword_list?: CreativeProceduralCreativeCreateV2RequestCreativeTitleMaterialsInnerBidwordListInner[];
  dpa_word_list?: CreativeProceduralCreativeCreateV2RequestCreativeTitleMaterialsInnerDpaWordListInner[];
  material_id?: number | string;
  title: string;
  word_list?: CreativeProceduralCreativeCreateV2RequestCreativeTitleMaterialsInnerWordListInner[];
}

