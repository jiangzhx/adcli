import type { InvalidPayLeadsDetail } from "../v3/index";
export interface AggregateAccountDetail {
    account_id?: number | string;
    account_name?: string;
    is_real_pay?: boolean;
    no_pay_reason?: string;
    pay_total_amount?: number;
    pay_details?: InvalidPayLeadsDetail[];
}
