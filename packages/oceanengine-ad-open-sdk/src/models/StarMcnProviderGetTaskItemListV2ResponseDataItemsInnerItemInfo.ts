// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarMcnProviderGetTaskItemListV2ResponseDataItemsInnerItemInfoCoreUser, StarMcnProviderGetTaskItemListV2ResponseDataItemsInnerItemInfoData } from "../models";

export interface StarMcnProviderGetTaskItemListV2ResponseDataItemsInnerItemInfo {
  aweme_item_status?: number;
  common_tag_ids?: Record<string, string[]>;
  core_user?: StarMcnProviderGetTaskItemListV2ResponseDataItemsInnerItemInfoCoreUser;
  create_time?: number;
  data?: StarMcnProviderGetTaskItemListV2ResponseDataItemsInnerItemInfoData;
  duration?: number;
  item_id?: number;
  lego_mid?: number;
  release_time?: number;
  title?: string;
  url?: string;
  video_participate_provider_channel?: string;
}

