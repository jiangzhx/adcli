// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AicVideoMixcutCreateV30AccountType, AicVideoMixcutCreateV30RequestAudioOption, AicVideoMixcutCreateV30RequestGenElement, AicVideoMixcutCreateV30RequestProductInfo, AicVideoMixcutCreateV30RequestRenderOption, AicVideoMixcutCreateV30RequestSubtitleStyle } from "../models";

export interface AicVideoMixcutCreateV30Request {
  account_id: number;
  account_type: AicVideoMixcutCreateV30AccountType;
  audio_option?: AicVideoMixcutCreateV30RequestAudioOption;
  count?: number;
  gen_element?: AicVideoMixcutCreateV30RequestGenElement;
  is_auto_save_all_result?: boolean;
  product_info?: AicVideoMixcutCreateV30RequestProductInfo;
  render_option?: AicVideoMixcutCreateV30RequestRenderOption;
  subtitle_style?: AicVideoMixcutCreateV30RequestSubtitleStyle;
  task_name?: string;
  video_element_ids: number[];
}

