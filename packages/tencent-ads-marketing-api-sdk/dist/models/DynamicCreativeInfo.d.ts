import type { ConfiguredStatus, CreativeComponents, DeliveryMode, DynamicCreativeType, ProgramCreativeInfo } from "../models";
export interface DynamicCreativeInfo {
    account_id?: number | string;
    adgroup_id?: number | string;
    dynamic_creative_name?: string;
    creative_template_id?: number | string;
    delivery_mode?: DeliveryMode;
    dynamic_creative_type?: DynamicCreativeType;
    creative_components?: CreativeComponents;
    impression_tracking_url?: string;
    click_tracking_url?: string;
    program_creative_info?: ProgramCreativeInfo;
    page_track_url?: string;
    auto_derived_program_creative_switch?: boolean;
    configured_status?: ConfiguredStatus;
}
