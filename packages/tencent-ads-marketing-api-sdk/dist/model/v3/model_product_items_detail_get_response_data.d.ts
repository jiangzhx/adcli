import type { AuditStatus, ProductInfoSpec, ProductVerificationResult, SpuLinkStatus } from "../v3/index";
export interface ProductItemsDetailGetResponseData {
    feed_id?: number | string;
    system_status?: AuditStatus;
    reject_message?: string;
    spu_link_status?: SpuLinkStatus;
    product_verification_results?: ProductVerificationResult[];
    product_item_spec?: ProductInfoSpec;
}
