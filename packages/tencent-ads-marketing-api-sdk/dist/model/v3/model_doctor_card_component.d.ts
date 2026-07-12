import type { DoctorCardStruct } from "../v3/index";
export interface DoctorCardComponent {
    component_id?: number | string;
    value?: DoctorCardStruct;
    is_deleted?: boolean;
}
