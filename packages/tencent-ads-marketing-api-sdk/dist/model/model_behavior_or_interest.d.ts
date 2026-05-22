import type { BehaviorStruct, Intention, Interest } from "../model/index";
export interface BehaviorOrInterest {
    interest?: Interest;
    behavior?: BehaviorStruct[];
    intention?: Intention;
}
