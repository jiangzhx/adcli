import type { BusinessScenario, MaterialLabelSource } from "../models";
export interface MaterialLabel {
    account_id?: number | string;
    label_id?: number | string;
    label_name?: string;
    first_label_level_id?: number | string;
    first_label_level_name?: string;
    second_label_level_id?: number | string;
    second_label_level_name?: string;
    create_time?: string;
    label_source?: MaterialLabelSource;
    relation_image_count?: number;
    relation_media_count?: number;
    business_scenario_val?: BusinessScenario;
}
