// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adcreative_templates_get_adcreative_template_list_struct.go
// Do not edit manually.

import type { AdcreativeElement, AdcreativeSampleImage, LandingPageConfig, PromotedObjectTypeWithoutJd, SiteSetDefinition, SupportBillingSpec, SupportDynamicAbilitySpecList } from "../model/index";

export interface AdcreativeTemplatesGetAdcreativeTemplateListStruct {
  adcreative_template_id?: number | string;
  adcreative_template_name?: string;
  adcreative_template_description?: string;
  adcreative_template_size?: string;
  adcreative_template_style?: string;
  adcreative_template_appellation?: string;
  site_set?: SiteSetDefinition;
  promoted_object_type?: PromotedObjectTypeWithoutJd;
  adcreative_sample_image_list?: AdcreativeSampleImage[];
  ad_attributes?: AdcreativeElement[];
  adcreative_attributes?: AdcreativeElement[];
  adcreative_elements?: AdcreativeElement[];
  support_page_type?: string[];
  landing_page_config?: LandingPageConfig;
  support_billing_spec_list?: SupportBillingSpec[];
  support_dynamic_ability_spec_list?: SupportDynamicAbilitySpecList;
  support_bid_mode_list?: string[];
}

