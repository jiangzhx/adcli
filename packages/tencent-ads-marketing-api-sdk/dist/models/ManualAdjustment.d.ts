import type { LengthAdjustment, MusicAdjustment, SizeAdjustment } from "../models";
export interface ManualAdjustment {
    size_adjustment?: SizeAdjustment;
    length_adjustment?: LengthAdjustment;
    music_adjustment?: MusicAdjustment;
}
