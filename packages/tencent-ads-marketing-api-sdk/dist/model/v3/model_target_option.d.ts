import type { ComponentDependUseType, DependItem, SupportOption } from "../v3/index";
export interface TargetOption {
    depends?: DependItem[];
    support_options?: SupportOption[];
    use?: ComponentDependUseType;
    tip?: string;
}
