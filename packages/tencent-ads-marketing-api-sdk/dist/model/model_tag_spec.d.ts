import type { BehaviorTargetingTagSpec, InterestTargetingTagSpec } from "../model/index";
export interface TagSpec {
    behavior_spec?: BehaviorTargetingTagSpec;
    interest_spec?: InterestTargetingTagSpec;
}
