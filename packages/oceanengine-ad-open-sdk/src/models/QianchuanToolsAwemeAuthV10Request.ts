// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanToolsAwemeAuthV10AuthType } from "../models";

export interface QianchuanToolsAwemeAuthV10Request {
  advertiser_id: number;
  auth_type: QianchuanToolsAwemeAuthV10AuthType;
  aweme_id?: string;
  aweme_show_id?: string;
  code: string;
  end_time: string;
  notes?: string;
}

