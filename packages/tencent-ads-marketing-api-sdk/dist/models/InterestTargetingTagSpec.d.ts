import type { QuerySpec, TargetingTagQueryMode } from "../models";
export interface InterestTargetingTagSpec {
    query_mode?: TargetingTagQueryMode;
    query_spec?: QuerySpec;
}
