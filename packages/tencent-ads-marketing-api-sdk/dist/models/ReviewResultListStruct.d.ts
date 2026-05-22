import type { ElementResultListStruct, RejectComponentComposeInfoStruct, SiteSetResultListStruct } from "../models";
export interface ReviewResultListStruct {
    dynamic_creative_id?: number | string;
    element_result_list?: ElementResultListStruct[];
    site_set_result_list?: SiteSetResultListStruct[];
    reject_message_list?: string[];
    delay_message_list?: string[];
    is_all_component_compose_pending?: boolean;
    total_component_compose_count?: number;
    reject_component_compose_count?: number;
    pass_component_compose_count?: number;
    reject_component_compose_info_list?: RejectComponentComposeInfoStruct[];
}
