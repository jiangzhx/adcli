// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AicImageMixcutCreateV30AccountType, AicImageMixcutCreateV30RequestAudioOption, AicImageMixcutCreateV30RequestGenElement, AicImageMixcutCreateV30RequestProductInfo, AicImageMixcutCreateV30RequestRenderOption, AicImageMixcutCreateV30RequestSubtitleStyle } from "../models";

export interface AicImageMixcutCreateV30Request {
  account_id: number;
  account_type: AicImageMixcutCreateV30AccountType;
  audio_option?: AicImageMixcutCreateV30RequestAudioOption;
  count?: number;
  gen_element?: AicImageMixcutCreateV30RequestGenElement;
  image_element_ids: number[];
  is_auto_save_all_result?: boolean;
  product_info?: AicImageMixcutCreateV30RequestProductInfo;
  render_option?: AicImageMixcutCreateV30RequestRenderOption;
  subtitle_style?: AicImageMixcutCreateV30RequestSubtitleStyle;
  task_name?: string;
}

