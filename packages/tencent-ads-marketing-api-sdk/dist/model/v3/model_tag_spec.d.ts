import type { BehaviorTargetingTagSpec, InterestTargetingTagSpec } from "../v3/index";
export interface TagSpec {
    behavior_spec?: BehaviorTargetingTagSpec;
    interest_spec?: InterestTargetingTagSpec;
}
