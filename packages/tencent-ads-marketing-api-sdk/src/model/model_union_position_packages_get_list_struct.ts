// Generated from tencentad/marketing-api-go-sdk pkg/model/model_union_position_packages_get_list_struct.go
// Do not edit manually.

import type { UnionPackageType } from "../model/index";

export interface UnionPositionPackagesGetListStruct {
  union_package_id?: number | string;
  union_package_name?: string;
  union_package_type?: UnionPackageType;
  union_position_id_list?: number[];
  created_time?: number;
  last_modified_time?: number;
}

