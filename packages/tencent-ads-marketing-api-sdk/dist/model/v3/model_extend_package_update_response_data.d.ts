import type { ResultDataStruct } from "../v3/index";
export interface ExtendPackageUpdateResponseData {
    package_id?: number | string;
    success_results?: ResultDataStruct[];
    failed_results?: ResultDataStruct[];
}
