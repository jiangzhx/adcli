// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAdDetailGetV10DataMultiProductCreativeListProgrammaticCreativeProgrammaticCreativeMediaListImageMode, QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInnerProgrammaticCreativeProgrammaticCreativeMediaListInnerCarouselAudio, QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInnerProgrammaticCreativeProgrammaticCreativeMediaListInnerCarouselImagesInner } from "../models";

export interface QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInnerProgrammaticCreativeProgrammaticCreativeMediaListInner {
  aweme_carousel_id?: number;
  aweme_item_id?: number;
  carousel_audio?: QianchuanAdDetailGetV10ResponseDataMultiProductCreativeListInnerProgrammaticCreativeProgrammaticCreativeMediaListInnerCarouselAudio;
  carousel_description?: string;
  carousel_id?: number;
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

