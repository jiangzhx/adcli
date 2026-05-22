import type { SysStatus } from "../models";
export interface ImageSetDataStruct {
    image_id?: string;
    status?: SysStatus;
    audit_msg?: string;
}
