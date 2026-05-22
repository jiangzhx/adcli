import type { MaterialUpdateStruct, PreviewUpdateStruct } from "../model/index";
export interface MaterialGroupUpdateStruct {
    material_group_id?: number | string;
    materials?: MaterialUpdateStruct[];
    previews?: PreviewUpdateStruct[];
}
