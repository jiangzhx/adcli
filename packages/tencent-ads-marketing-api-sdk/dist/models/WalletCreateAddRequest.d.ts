import type { ContactInfoStruct, ContactNotifyCondition } from "../models";
export interface WalletCreateAddRequest {
    account_id?: number | string;
    mdm_id?: number | string;
    wallet_name?: string;
    tag_list?: string[];
    contact_info_list?: ContactInfoStruct[];
    contact_notify_condition?: ContactNotifyCondition;
}
