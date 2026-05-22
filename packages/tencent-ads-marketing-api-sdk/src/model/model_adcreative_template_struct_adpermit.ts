// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adcreative_template_struct_adpermit.go
// Do not edit manually.

import type { AdcreativeElement, AttributesStruct, LandingPageConfigPermit, PromotedObjectType, SupportBillingSpec, SupportDynamicAbilitySpecList, UnsupportBidModeStructAdpermit, UnsupportBillingSpecAdpermit, UnsupportSiteAdpermit } from "../model/index";

export interface AdcreativeTemplateStructAdpermit {
  adcreative_template_id?: number | string;
  adcreative_template_style?: string;
  adcreative_template_appellation?: string;
  adcreative_sample_image?: string;
  promoted_object_type?: PromotedObjectType;
  site_set?: string[];
  support_billing_spec_list?: SupportBillingSpec[];
  support_bid_mode_list?: string[];
  adcreative_elements?: AdcreativeElement[];
  landing_page_config?: LandingPageConfigPermit;
  adcreative_attributes?: AttributesStruct[];
  support_dynamic_ability_spec_list?: SupportDynamicAbilitySpecList;
  unsupport_siteset_detail_spec?: UnsupportSiteAdpermit[];
  unsupport_bid_mode_list?: UnsupportBidModeStructAdpermit[];
  unsupport_billing_spec_list?: UnsupportBillingSpecAdpermit[];
}

