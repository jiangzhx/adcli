import type { TargetOption } from "../v3/index";
export interface ComponentDependItem {
    target_path?: string;
    depend_paths?: string[];
    target_options?: TargetOption[];
}
