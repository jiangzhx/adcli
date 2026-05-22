import type { WechatEcommerceProductSpec, WechatLinkAdSpec, WechatOcpaSpecStruct } from "../models";
export interface CapabilitiesGetResponseData {
    wechat_ecommerce_product_spec?: WechatEcommerceProductSpec;
    wechat_link_ad_spec?: WechatLinkAdSpec;
    wechat_ocpa_spec?: WechatOcpaSpecStruct[];
}
