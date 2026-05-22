import type { BehaviorTargetingTagSpec, InterestTargetingTagSpec } from "../models";
export interface TagSpec {
    behavior_spec?: BehaviorTargetingTagSpec;
    interest_spec?: InterestTargetingTagSpec;
}
