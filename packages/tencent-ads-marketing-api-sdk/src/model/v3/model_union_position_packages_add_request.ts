// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_union_position_packages_add_request.go
// Do not edit manually.

import type { UnionPackageType } from "../v3/index";

export interface UnionPositionPackagesAddRequest {
  account_id?: number | string;
  union_package_name?: string;
  union_package_type?: UnionPackageType;
  union_position_id_list?: number[];
}

