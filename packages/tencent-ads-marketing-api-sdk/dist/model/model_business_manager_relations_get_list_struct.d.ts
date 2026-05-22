import type { BmAccountType } from "../model/index";
export interface BusinessManagerRelationsGetListStruct {
    account_id?: number | string;
    corporation_name?: string;
    account_type?: BmAccountType;
}
