// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_local_store_packages_update_request.go
// Do not edit manually.

import type { LocalStoreListStruct } from "../v3/index";

export interface LocalStorePackagesUpdateRequest {
  account_id?: number | string;
  local_store_package_id?: number | string;
  local_store_package_name?: string;
  local_store_list?: LocalStoreListStruct[];
}

