import type { SingleDataSourceScenes } from "../model/index";
export interface DataSourceDispatchUpdateRequest {
    account_id?: number | string;
    data_source_scenes?: SingleDataSourceScenes[];
}
