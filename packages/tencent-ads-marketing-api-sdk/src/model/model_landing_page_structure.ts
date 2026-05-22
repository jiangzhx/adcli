// Generated from tencentad/marketing-api-go-sdk pkg/model/model_landing_page_structure.go
// Do not edit manually.

import type { DestinationType, LandingPageInfo, LandingPageMediaQuery, LandingPagePlatform, LandingPageUrlType, LinkUrlLinkNameType, PageSpec } from "../model/index";

export interface LandingPageStructure {
  page_spec?: PageSpec;
  page_type?: DestinationType;
  link_name_type?: LinkUrlLinkNameType;
  landing_page_platform?: LandingPagePlatform;
  landing_page_info?: LandingPageInfo;
  media_query?: LandingPageMediaQuery;
  link_name_text?: string;
  landing_page_url_type?: LandingPageUrlType;
}

