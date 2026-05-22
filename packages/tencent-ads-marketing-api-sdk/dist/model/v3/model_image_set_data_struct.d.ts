import type { SysStatus } from "../v3/index";
export interface ImageSetDataStruct {
    image_id?: string;
    status?: SysStatus;
    audit_msg?: string;
}
