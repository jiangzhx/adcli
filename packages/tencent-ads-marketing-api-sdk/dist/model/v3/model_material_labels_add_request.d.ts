import type { CreateLabel } from "../v3/index";
export interface MaterialLabelsAddRequest {
    account_id?: number | string;
    organization_id?: number | string;
    labels?: CreateLabel[];
}
