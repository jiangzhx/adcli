import type { ConsultStruct } from "../models";
export interface ConsultComponent {
    component_id?: number | string;
    value?: ConsultStruct;
    is_deleted?: boolean;
}
