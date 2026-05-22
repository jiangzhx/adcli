// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanProductAvailableGetV10FilterMarketingScene, QianchuanProductAvailableGetV10FilterTab } from "../models";

export interface QianchuanProductAvailableGetV10Filter {
  is_adlab?: boolean;
  marketing_scene?: QianchuanProductAvailableGetV10FilterMarketingScene;
  product_ids?: number | string[];
  product_name?: string;
  tab?: QianchuanProductAvailableGetV10FilterTab;
}

