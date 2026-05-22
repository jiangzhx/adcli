import type { ComponentSubType, ComponentValue } from "../v3/index";
export interface ComponentsAddRequest {
    account_id?: number | string;
    component_custom_name?: string;
    component_value?: ComponentValue;
    component_sub_type?: ComponentSubType;
    organization_id?: number | string;
}
