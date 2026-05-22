// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { LandingPageStructure, PlotOriginalMaterial, PlotType } from "../models";

export interface RedEnvelopeStruct {
  red_envelope_switch?: boolean;
  red_envelope_image_id?: string;
  red_envelope_extra_scene_id?: string;
  red_envelope_appear_time_ms?: number;
  red_envelope_disappear_time_ms?: number;
  red_envelope_origin_extra_scene_id?: string;
  red_barrage_switch?: boolean;
  plot_type?: PlotType;
  plot_wechat_status_footer_switch?: boolean;
  plot_frame_color?: string;
  plot_send_word?: string;
  plot_sign_text?: string;
  plot_sign_image?: string;
  plot_brand_logo?: string;
  plot_original_material?: PlotOriginalMaterial;
  red_envelope_brand_name?: string;
  gift_story_product_desc?: string;
  gift_story_product_name?: string;
  gift_story_button_text?: string;
  plot_button_jump_info?: LandingPageStructure;
}

