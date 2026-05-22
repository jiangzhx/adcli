import type { JumpinfoStruct } from "../models";
export interface JumpinfoComponent {
    component_id?: number | string;
    value?: JumpinfoStruct;
    is_deleted?: boolean;
}
