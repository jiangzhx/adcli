import type { ComponentDetail } from "../v3/index";
export interface ComponentDetailGetListStruct {
    account_id?: number | string;
    organization_id?: number | string;
    component_id?: number | string;
    component_detail?: ComponentDetail;
}
