import type { BehaviorStruct, Intention, Interest } from "../models";
export interface BehaviorOrInterest {
    interest?: Interest;
    behavior?: BehaviorStruct[];
    intention?: Intention;
}
