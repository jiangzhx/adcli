import type { ComponentDependItem, ComponentType } from "../v3/index";
export interface ComponentDependsGetResponseData {
    component_type?: ComponentType;
    component_name?: string;
    component_depends?: ComponentDependItem[];
}
