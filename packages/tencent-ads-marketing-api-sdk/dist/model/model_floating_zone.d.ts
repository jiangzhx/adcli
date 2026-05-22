import type { FloatingZoneInfoType, FloatingZoneType, LandingPageStructure } from "../model/index";
export interface FloatingZone {
    floating_zone_switch?: boolean;
    floating_zone_image_id?: string;
    floating_zone_name?: string;
    floating_zone_desc?: string;
    floating_zone_button_text?: string;
    floating_zone_type?: FloatingZoneType;
    floating_zone_single_image_id?: string;
    floating_zone_bgcolor?: string;
    floating_zone_jump_info?: LandingPageStructure[];
    floating_zone_info_type?: FloatingZoneInfoType;
}
