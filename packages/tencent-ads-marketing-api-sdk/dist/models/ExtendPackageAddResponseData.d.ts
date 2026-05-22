import type { ResultDataStruct } from "../models";
export interface ExtendPackageAddResponseData {
    package_id?: number | string;
    success_results?: ResultDataStruct[];
    failed_results?: ResultDataStruct[];
}
