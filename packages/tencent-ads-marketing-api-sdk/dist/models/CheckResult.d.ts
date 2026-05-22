import type { PreCheckErrorDetail } from "../models";
export interface CheckResult {
    pass?: boolean;
    errors?: PreCheckErrorDetail[];
}
