import type { DataNexusScene, SingleUpdateFailedAssetArray } from "../model/index";
export interface SingleUpdateFailedScenes {
    scene?: DataNexusScene;
    asset_ids?: SingleUpdateFailedAssetArray[];
    fail_reason?: string;
}
