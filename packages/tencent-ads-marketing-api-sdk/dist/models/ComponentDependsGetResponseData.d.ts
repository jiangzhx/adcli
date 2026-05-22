import type { ComponentDependItem, ComponentType } from "../models";
export interface ComponentDependsGetResponseData {
    component_type?: ComponentType;
    component_name?: string;
    component_depends?: ComponentDependItem[];
}
