import type { CreateLabel } from "../models";
export interface MaterialLabelsAddRequest {
    account_id?: number | string;
    organization_id?: number | string;
    labels?: CreateLabel[];
}
