// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { SharedWalletSharedRelationCreateV30AccountPlatformList, SharedWalletSharedRelationCreateV30AccountType, SharedWalletSharedRelationCreateV30RelationChangeMode, SharedWalletSharedRelationCreateV30RequestAdvRangeParameter } from "../models";

export interface SharedWalletSharedRelationCreateV30Request {
  account_id: number;
  account_platform_list?: SharedWalletSharedRelationCreateV30AccountPlatformList[];
  account_type: SharedWalletSharedRelationCreateV30AccountType;
  adv_range_parameter: SharedWalletSharedRelationCreateV30RequestAdvRangeParameter;
  from_wallet_id: number;
  operation_id: number;
  relation_change_mode: SharedWalletSharedRelationCreateV30RelationChangeMode;
  to_wallet_id: number;
}

