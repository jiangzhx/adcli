import type { SingleDataSourceScenes } from "../models";
export interface DataSourceDispatchGetResponseData {
    account_id?: number | string;
    data_source_scenes?: SingleDataSourceScenes[];
}
