import type { DataNexusScene, SingleUpdateAsset } from "../v3/index";
export interface SingleUpdateScenes {
    scene?: DataNexusScene;
    asset_ids?: SingleUpdateAsset[];
}
