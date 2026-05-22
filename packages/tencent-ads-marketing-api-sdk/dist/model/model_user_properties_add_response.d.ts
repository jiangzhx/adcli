import type { ApiErrorStruct } from "../model/index";
export interface UserPropertiesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
