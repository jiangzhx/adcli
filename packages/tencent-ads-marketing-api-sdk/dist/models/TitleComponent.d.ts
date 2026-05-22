import type { TitleStruct } from "../models";
export interface TitleComponent {
    component_id?: number | string;
    value?: TitleStruct;
    is_deleted?: boolean;
}
