import type { SingleDataSourceScenes } from "../models";
export interface DataSourceDispatchUpdateRequest {
    account_id?: number | string;
    data_source_scenes?: SingleDataSourceScenes[];
}
