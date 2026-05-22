import type { ContactInfoStruct, ContactNotifyCondition } from "../models";
export interface WalletEditAddRequest {
    account_id?: number | string;
    wallet_id?: number | string;
    wallet_name?: string;
    tag_list?: string[];
    contact_info_list?: ContactInfoStruct[];
    contact_notify_condition?: ContactNotifyCondition;
}
