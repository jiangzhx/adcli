import type { UnionPackageType } from "../models";
export interface UnionPositionPackagesAddRequest {
    account_id?: number | string;
    union_package_name?: string;
    union_package_type?: UnionPackageType;
    union_position_id_list?: number[];
}
