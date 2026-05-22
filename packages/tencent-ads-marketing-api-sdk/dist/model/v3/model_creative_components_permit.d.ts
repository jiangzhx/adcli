import type { ComponentSubTypeOption, ComponentType, CreativeComponentValid } from "../v3/index";
export interface CreativeComponentsPermit {
    name?: string;
    desc?: string;
    valid?: CreativeComponentValid;
    component_type?: ComponentType;
    component_sub_type_options?: ComponentSubTypeOption[];
}
