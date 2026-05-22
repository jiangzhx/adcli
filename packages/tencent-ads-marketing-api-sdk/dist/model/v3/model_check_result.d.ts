import type { PreCheckErrorDetail } from "../v3/index";
export interface CheckResult {
    pass?: boolean;
    errors?: PreCheckErrorDetail[];
}
