import type { BusinessScenario } from "../models";
export interface CreateLabel {
    label_name?: string;
    first_label_level_name?: string;
    second_label_level_name?: string;
    business_scenario?: BusinessScenario;
}
