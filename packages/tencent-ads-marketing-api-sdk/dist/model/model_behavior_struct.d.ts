import type { BehaviorInterestTimeWindow } from "../model/index";
export interface BehaviorStruct {
    targeting_tags?: string[];
    category_id_list?: number[];
    keyword_list?: string[];
    scene?: string[];
    time_window?: BehaviorInterestTimeWindow;
    intensity?: string[];
}
