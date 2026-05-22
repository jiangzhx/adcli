import type { AdcreativeElement, AdcreativeSampleImage, LandingPageConfig, SupportBillingSpec, SupportDynamicAbilitySpecList, UnsupportBidModeStruct, UnsupportBillingSpec, UnsupportSite, UnsupportSpec } from "../models";
export interface AdcreativeTemplateDetailGetAdcreativeTemplateListStruct {
    adcreative_template_id?: number | string;
    adcreative_template_name?: string;
    adcreative_template_description?: string;
    adcreative_template_size?: string;
    adcreative_template_style?: string;
    adcreative_sample_image_list?: AdcreativeSampleImage[];
    ad_attributes?: AdcreativeElement[];
    adcreative_attributes?: AdcreativeElement[];
    adcreative_elements?: AdcreativeElement[];
    support_billing_spec_list?: SupportBillingSpec[];
    support_page_type?: string[];
    landing_page_config?: LandingPageConfig;
    unsupport_billing_spec_list?: UnsupportBillingSpec[];
    unsupport_ad_attributes_spec_list?: UnsupportSpec[];
    unsupport_adcreative_attributes_spec_list?: UnsupportSpec[];
    unsupport_siteset_detail_spec?: UnsupportSite[];
    support_dynamic_ability_spec_list?: SupportDynamicAbilitySpecList;
    support_bid_mode_list?: string[];
    unsupport_bid_mode_list?: UnsupportBidModeStruct[];
}
