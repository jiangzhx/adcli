import type { DataNexusScene, SingleUpdateFailedAssetArray } from "../models";
export interface SingleUpdateFailedScenes {
    scene?: DataNexusScene;
    asset_ids?: SingleUpdateFailedAssetArray[];
    fail_reason?: string;
}
