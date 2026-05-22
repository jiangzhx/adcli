import type { AigcFlag, AigcSource, AigcStatus } from "../models";
export interface AnnotationSuccessResult {
    resource_id?: string;
    resource_type?: string;
    aigc_flag?: AigcFlag;
    aigc_source?: AigcSource;
    user_aigc_status?: AigcStatus;
    system_aigc_status?: AigcStatus;
}
