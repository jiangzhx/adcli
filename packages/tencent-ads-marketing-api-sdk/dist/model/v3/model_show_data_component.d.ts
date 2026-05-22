import type { ShowDataStruct } from "../v3/index";
export interface ShowDataComponent {
    component_id?: number | string;
    value?: ShowDataStruct;
    is_deleted?: boolean;
}
