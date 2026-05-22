// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CreativeProceduralCreativeUpdateV2RequestCreativeTitleMaterialsInnerBidwordListInner, CreativeProceduralCreativeUpdateV2RequestCreativeTitleMaterialsInnerDpaWordListInner, CreativeProceduralCreativeUpdateV2RequestCreativeTitleMaterialsInnerWordListInner } from "../models";

export interface CreativeProceduralCreativeUpdateV2RequestCreativeTitleMaterialsInner {
  bidword_list?: CreativeProceduralCreativeUpdateV2RequestCreativeTitleMaterialsInnerBidwordListInner[];
  dpa_word_list?: CreativeProceduralCreativeUpdateV2RequestCreativeTitleMaterialsInnerDpaWordListInner[];
  material_id?: number;
  title: string;
  word_list?: CreativeProceduralCreativeUpdateV2RequestCreativeTitleMaterialsInnerWordListInner[];
}

