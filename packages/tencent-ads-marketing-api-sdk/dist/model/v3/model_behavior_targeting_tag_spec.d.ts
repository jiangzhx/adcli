import type { QuerySpec, TargetingTagQueryMode } from "../v3/index";
export interface BehaviorTargetingTagSpec {
    query_mode?: TargetingTagQueryMode;
    query_spec?: QuerySpec;
}
