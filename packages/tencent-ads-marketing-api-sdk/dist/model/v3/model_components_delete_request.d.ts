import type { DeleteStrategy } from "../v3/index";
export interface ComponentsDeleteRequest {
    account_id?: number | string;
    component_id?: number | string;
    organization_id?: number | string;
    delete_strategy?: DeleteStrategy;
}
