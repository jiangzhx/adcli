import type { AdcreativeElement, CreativePermissions, LivePromotedType, SupportDynamicAbilitySpecList, UnsupportSiteAdpermit } from "../v3/index";
export interface AdcreativeTemplateStructAdpermit {
    creative_template_id?: number | string;
    creative_template_style?: string;
    creative_template_appellation?: string;
    creative_sample_image?: string;
    site_set?: string[];
    creative_components?: AdcreativeElement[];
    unsupport_siteset_detail_spec?: UnsupportSiteAdpermit[];
    support_dynamic_ability_spec_list?: SupportDynamicAbilitySpecList;
    support_mpa?: boolean;
    support_mpa_image_template?: boolean;
    support_mpa_video_template?: boolean;
    creative_permissions?: CreativePermissions;
    live_promoted_type?: LivePromotedType;
}
