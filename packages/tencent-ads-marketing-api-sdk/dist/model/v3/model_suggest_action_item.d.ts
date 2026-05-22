import type { CoverageActionType } from "../v3/index";
export interface SuggestActionItem {
    action_id?: CoverageActionType;
    material_type?: string;
    tips?: string;
    site_set?: string[];
}
