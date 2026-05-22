// Generated from oceanengine/ad_open_sdk_go models/model_aic_image_mixcut_create_v3_0_request.go
// Do not edit manually.

import type { AicImageMixcutCreateV30AccountType, AicImageMixcutCreateV30RequestAudioOption, AicImageMixcutCreateV30RequestGenElement, AicImageMixcutCreateV30RequestProductInfo, AicImageMixcutCreateV30RequestRenderOption, AicImageMixcutCreateV30RequestSubtitleStyle } from "../models/index";

export interface AicImageMixcutCreateV30Request {
  account_id: number | string;
  account_type: AicImageMixcutCreateV30AccountType;
  audio_option?: AicImageMixcutCreateV30RequestAudioOption;
  count?: number;
  gen_element?: AicImageMixcutCreateV30RequestGenElement;
  image_element_ids: (number | string)[];
  is_auto_save_all_result?: boolean;
  product_info?: AicImageMixcutCreateV30RequestProductInfo;
  render_option?: AicImageMixcutCreateV30RequestRenderOption;
  subtitle_style?: AicImageMixcutCreateV30RequestSubtitleStyle;
  task_name?: string;
}

