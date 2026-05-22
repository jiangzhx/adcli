import type { QuerySpec, TargetingTagQueryMode } from "../v3/index";
export interface InterestTargetingTagSpec {
    query_mode?: TargetingTagQueryMode;
    query_spec?: QuerySpec;
}
