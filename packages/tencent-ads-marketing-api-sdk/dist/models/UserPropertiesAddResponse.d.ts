import type { ApiErrorStruct } from "../models";
export interface UserPropertiesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
