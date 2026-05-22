import type { TargetOption } from "../models";
export interface ComponentDependItem {
    target_path?: string;
    depend_paths?: string[];
    target_options?: TargetOption[];
}
