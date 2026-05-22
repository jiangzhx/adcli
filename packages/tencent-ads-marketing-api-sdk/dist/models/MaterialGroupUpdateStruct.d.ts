import type { MaterialUpdateStruct, PreviewUpdateStruct } from "../models";
export interface MaterialGroupUpdateStruct {
    material_group_id?: number | string;
    materials?: MaterialUpdateStruct[];
    previews?: PreviewUpdateStruct[];
}
