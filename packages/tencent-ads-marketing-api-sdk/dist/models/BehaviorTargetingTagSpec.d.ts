import type { QuerySpec, TargetingTagQueryMode } from "../models";
export interface BehaviorTargetingTagSpec {
    query_mode?: TargetingTagQueryMode;
    query_spec?: QuerySpec;
}
