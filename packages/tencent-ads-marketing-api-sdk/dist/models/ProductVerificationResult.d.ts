import type { ProductVerificationStatus } from "../models";
export interface ProductVerificationResult {
    product_verification_status?: ProductVerificationStatus;
    product_verification_message?: string;
}
