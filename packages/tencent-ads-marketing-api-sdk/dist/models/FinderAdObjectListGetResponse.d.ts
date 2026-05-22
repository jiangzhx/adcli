import type { ApiErrorStruct, FinderAdObjectListGetResponseData } from "../models";
export interface FinderAdObjectListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: FinderAdObjectListGetResponseData;
}
