import type { AdvertiserPicMaterialSwitch, AdvertiserSublinkSwitch, CreativeComponents, DeliveryMode, ModelSwitch } from "../models";
export interface SearchDynamicCreativesAddRequest {
    account_id?: number | string;
    adgroup_id?: number | string;
    dynamic_creative_name?: string;
    creative_template_id?: number | string;
    delivery_mode?: DeliveryMode;
    creative_components?: CreativeComponents;
    search_intelligent_extension?: ModelSwitch;
    sublink_switch?: AdvertiserSublinkSwitch;
    pic_material_switch?: AdvertiserPicMaterialSwitch;
}
