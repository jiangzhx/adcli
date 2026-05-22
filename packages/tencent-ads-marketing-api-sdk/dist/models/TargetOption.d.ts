import type { ComponentDependUseType, DependItem, SupportOption } from "../models";
export interface TargetOption {
    depends?: DependItem[];
    support_options?: SupportOption[];
    use?: ComponentDependUseType;
    tip?: string;
}
