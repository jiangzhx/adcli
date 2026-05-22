import type { DataNexusScene, SingleUpdateAsset } from "../model/index";
export interface SingleUpdateScenes {
    scene?: DataNexusScene;
    asset_ids?: SingleUpdateAsset[];
}
