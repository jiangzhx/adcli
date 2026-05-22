import type { SingleDataSourceScenes } from "../model/index";
export interface DataSourceDispatchGetResponseData {
    account_id?: number | string;
    data_source_scenes?: SingleDataSourceScenes[];
}
