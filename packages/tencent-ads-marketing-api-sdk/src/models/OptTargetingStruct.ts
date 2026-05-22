// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { LocardBehaviorsListItem, LocardInterestsListItem } from "../models";

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

