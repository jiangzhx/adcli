import type { ConsultStruct } from "../v3/index";
export interface ConsultComponent {
    component_id?: number | string;
    value?: ConsultStruct;
    is_deleted?: boolean;
}
