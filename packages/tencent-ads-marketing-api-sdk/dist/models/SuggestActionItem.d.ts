import type { CoverageActionType } from "../models";
export interface SuggestActionItem {
    action_id?: CoverageActionType;
    material_type?: string;
    tips?: string;
    site_set?: string[];
}
