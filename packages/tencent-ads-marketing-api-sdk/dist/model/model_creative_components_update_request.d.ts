import type { CreativeComponentSpecStruct, CreativeComponentType } from "../model/index";
export interface CreativeComponentsUpdateRequest {
    account_id?: number | string;
    component_id?: number | string;
    component_type?: CreativeComponentType;
    component_spec?: CreativeComponentSpecStruct;
}
