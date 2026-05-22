import type { ComponentDetail } from "../models";
export interface ComponentDetailGetListStruct {
    account_id?: number | string;
    organization_id?: number | string;
    component_id?: number | string;
    component_detail?: ComponentDetail;
}
