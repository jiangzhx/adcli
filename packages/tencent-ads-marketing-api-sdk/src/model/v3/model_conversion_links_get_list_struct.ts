// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_conversion_links_get_list_struct.go
// Do not edit manually.

import type { ConversionLinkNodeStruct, GoldLinkType, LandingPageAccess, MarketingCarrierType } from "../v3/index";

export interface ConversionLinksGetListStruct {
  conversion_link_id?: number | string;
  marketing_goal?: string[];
  marketing_target_type?: string;
  marketing_carrier_type?: MarketingCarrierType;
  gold_link_type?: GoldLinkType;
  landing_page_access?: LandingPageAccess;
  conversion_link_nodes?: ConversionLinkNodeStruct[];
}

