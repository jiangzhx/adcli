// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAdDetailGetV10DataProgrammaticCreativeMediaListImageMode, QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeMediaListInnerCarouselAudio, QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeMediaListInnerCarouselImagesInner } from "../models";

export interface QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeMediaListInner {
  aweme_carousel_id?: number;
  aweme_item_id?: number;
  carousel_audio?: QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeMediaListInnerCarouselAudio;
  carousel_description?: string;
  carousel_id?: number;
  carousel_images?: QianchuanAdDetailGetV10ResponseDataProgrammaticCreativeMediaListInnerCarouselImagesInner[];
  image_ids?: string[];
  image_mode?: QianchuanAdDetailGetV10DataProgrammaticCreativeMediaListImageMode;
  is_auto_generate?: number;
  title?: string;
  video_cover_id?: string;
  video_id?: string;
  video_poster_url?: string;
  video_url?: string;
}

