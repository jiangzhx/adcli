import type { ShowDataStruct } from "../models";
export interface ShowDataComponent {
    component_id?: number | string;
    value?: ShowDataStruct;
    is_deleted?: boolean;
}
