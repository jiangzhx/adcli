import type { PromotedObjectType, UnionPackageType } from "../model/index";
export interface UnionPositionPackagesAddRequest {
    account_id?: number | string;
    union_package_name?: string;
    promoted_object_type?: PromotedObjectType;
    promoted_object_id?: string;
    union_package_type?: UnionPackageType;
    union_position_id_list?: number[];
}
