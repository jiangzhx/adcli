import type { ControlListItemDetailData, FormConfigDetailData } from "../models";
export interface LeadsFormGetResponseData {
    account_id?: number | string;
    component_id?: string;
    component_name?: string;
    created_time?: string;
    form_config?: FormConfigDetailData;
    item_list?: ControlListItemDetailData[];
}
