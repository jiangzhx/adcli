import type { AdLockStatus, ReadTargetingSetting, TargetingSourceType } from "../model/index";
export interface TargetingsGetListStruct {
    targeting_id?: number | string;
    targeting_name?: string;
    is_include_unsupported_targeting?: boolean;
    description?: string;
    is_deleted?: boolean;
    created_time?: number;
    last_modified_time?: number;
    ad_lock_status?: AdLockStatus;
    targeting_translation?: string;
    targeting_source_type?: TargetingSourceType;
    share_from_account_id?: number | string;
    share_from_targeting_id?: number | string;
    targeting?: ReadTargetingSetting;
}
