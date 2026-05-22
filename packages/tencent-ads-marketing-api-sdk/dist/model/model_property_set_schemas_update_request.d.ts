import type { Schema } from "../model/index";
export interface PropertySetSchemasUpdateRequest {
    account_id?: number | string;
    property_set_id?: number | string;
    schemas?: Schema[];
}
