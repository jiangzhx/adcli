import type { ReadTargetingSetting, TargetingSourceType } from "../v3/index";
export interface TargetingsGetListStruct {
    targeting_name?: string;
    targeting?: ReadTargetingSetting;
    targeting_translation?: string;
    is_deleted?: boolean;
    created_time?: number;
    last_modified_time?: number;
    targeting_source_type?: TargetingSourceType;
    share_from_account_id?: number | string;
    share_from_targeting_id?: number | string;
    targeting_id?: number | string;
    targeting_source_msg?: string;
}
