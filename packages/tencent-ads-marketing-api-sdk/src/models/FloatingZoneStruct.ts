// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { CreativeFloatingZoneType, FloatingZoneInfoType, JumpinfoStruct } from "../models";

export interface FloatingZoneStruct {
  floating_zone_switch?: boolean;
  floating_zone_image_id?: string;
  floating_zone_name?: string;
  floating_zone_desc?: string;
  floating_zone_button_text?: string;
  floating_zone_show_app_property_switch?: boolean;
  floating_zone_type?: CreativeFloatingZoneType;
  floating_zone_single_image_id?: string;
  button_base_text?: string;
  jump_info?: JumpinfoStruct;
  floating_zone_info_type?: FloatingZoneInfoType;
}

