import type { BindingType, BusinessScenario } from "../v3/index";
export interface MaterialLabelsBindRequest {
    account_id?: number | string;
    organization_id?: number | string;
    image_id_list?: string[];
    media_id_list?: string[];
    label_id_list?: number[];
    binding_type?: BindingType;
    business_scenario?: BusinessScenario;
}
