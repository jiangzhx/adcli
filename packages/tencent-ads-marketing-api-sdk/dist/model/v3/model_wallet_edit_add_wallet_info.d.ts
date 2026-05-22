import type { ContactInfoStruct, ContactNotifyCondition } from "../v3/index";
export interface WalletEditAddWalletInfo {
    wallet_id?: number | string;
    wallet_name?: string;
    agency_id?: number | string;
    mdm_id?: number | string;
    tag_list?: string[];
    contact_info_list?: ContactInfoStruct[];
    contact_notify_condition?: ContactNotifyCondition;
}
