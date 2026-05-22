import type { ConversionLinkNodeStruct, GoldLinkType, LandingPageAccess, MarketingCarrierType } from "../models";
export interface ConversionLinksGetListStruct {
    conversion_link_id?: number | string;
    marketing_goal?: string[];
    marketing_target_type?: string;
    marketing_carrier_type?: MarketingCarrierType;
    gold_link_type?: GoldLinkType;
    landing_page_access?: LandingPageAccess;
    conversion_link_nodes?: ConversionLinkNodeStruct[];
}
