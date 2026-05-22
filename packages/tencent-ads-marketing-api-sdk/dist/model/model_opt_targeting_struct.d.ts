import type { LocardBehaviorsListItem, LocardInterestsListItem } from "../model/index";
export interface OptTargetingStruct {
    open_auto_expand_flag?: boolean;
    expand_targeting_rule?: string[];
    open_expand_seed_population_flag?: boolean;
    open_expand_seed_population_selected_flag?: boolean;
    expand_seed_populations?: number[];
    add_more_locard_labels_flag?: boolean;
    locard_behaviors?: LocardBehaviorsListItem[];
    locard_interests?: LocardInterestsListItem[];
}
