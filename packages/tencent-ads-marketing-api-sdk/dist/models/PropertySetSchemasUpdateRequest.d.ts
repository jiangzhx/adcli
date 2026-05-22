import type { Schema } from "../models";
export interface PropertySetSchemasUpdateRequest {
    account_id?: number | string;
    property_set_id?: number | string;
    schemas?: Schema[];
}
