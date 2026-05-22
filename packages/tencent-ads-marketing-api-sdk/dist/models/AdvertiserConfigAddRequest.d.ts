import type { CoverImageSnapshotType } from "../models";
export interface AdvertiserConfigAddRequest {
    account_id?: number | string;
    organization_id?: number | string;
    cover_image_snapshot_type?: CoverImageSnapshotType;
}
