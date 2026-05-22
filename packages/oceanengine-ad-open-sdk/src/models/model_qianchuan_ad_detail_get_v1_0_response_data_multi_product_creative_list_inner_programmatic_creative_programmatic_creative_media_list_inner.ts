// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_ad_detail_get_v1_0_response_data_multi_product_creative_list_inner_programmatic_creative_programmatic_creative_media_list_inner.go
// Do not edit manually.

import type { QianchuanAdDetailGetV10DataMultiProductCreativeListProgrammaticCreativeProgrammaticCreativeMediaListImageMode, QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInnerProgrammaticCreativeProgrammaticCreativeMediaListInnerCarouselAudio, QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInnerProgrammaticCreativeProgrammaticCreativeMediaListInnerCarouselImagesInner } from "../models/index";

export interface QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInnerProgrammaticCreativeProgrammaticCreativeMediaListInner {
  aweme_carousel_id?: number | string;
  aweme_item_id?: number | string;
  carousel_audio?: QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInnerProgrammaticCreativeProgrammaticCreativeMediaListInnerCarouselAudio;
  carousel_description?: string;
  carousel_id?: number | string;
  carousel_images?: QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInnerProgrammaticCreativeProgrammaticCreativeMediaListInnerCarouselImagesInner[];
  image_ids?: string[];
  image_mode?: QianchuanAdDetailGetV10DataMultiProductCreativeListProgrammaticCreativeProgrammaticCreativeMediaListImageMode;
  is_auto_generate?: number;
  title?: string;
  video_cover_id?: string;
  video_id?: string;
  video_poster_url?: string;
  video_url?: string;
}

