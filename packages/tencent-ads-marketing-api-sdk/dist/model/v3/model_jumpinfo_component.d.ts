import type { JumpinfoStruct } from "../v3/index";
export interface JumpinfoComponent {
    component_id?: number | string;
    value?: JumpinfoStruct;
    is_deleted?: boolean;
}
