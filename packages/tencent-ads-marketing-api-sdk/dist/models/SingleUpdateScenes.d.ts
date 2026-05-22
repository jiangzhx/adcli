import type { DataNexusScene, SingleUpdateAsset } from "../models";
export interface SingleUpdateScenes {
    scene?: DataNexusScene;
    asset_ids?: SingleUpdateAsset[];
}
