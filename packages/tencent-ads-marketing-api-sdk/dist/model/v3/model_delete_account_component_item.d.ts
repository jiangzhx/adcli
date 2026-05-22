import type { DeleteStrategy } from "../v3/index";
export interface DeleteAccountComponentItem {
    component_id?: number | string;
    delete_strategy?: DeleteStrategy;
}
