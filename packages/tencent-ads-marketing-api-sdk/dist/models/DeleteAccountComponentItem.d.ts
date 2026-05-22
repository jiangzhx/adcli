import type { DeleteStrategy } from "../models";
export interface DeleteAccountComponentItem {
    component_id?: number | string;
    delete_strategy?: DeleteStrategy;
}
