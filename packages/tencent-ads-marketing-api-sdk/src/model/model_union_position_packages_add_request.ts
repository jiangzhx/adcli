// Generated from tencentad/marketing-api-go-sdk pkg/model/model_union_position_packages_add_request.go
// Do not edit manually.

import type { PromotedObjectType, UnionPackageType } from "../model/index";

export interface UnionPositionPackagesAddRequest {
  account_id?: number | string;
  union_package_name?: string;
  promoted_object_type?: PromotedObjectType;
  promoted_object_id?: string;
  union_package_type?: UnionPackageType;
  union_position_id_list?: number[];
}

