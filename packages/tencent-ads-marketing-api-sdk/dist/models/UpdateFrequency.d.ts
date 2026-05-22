export declare const UpdateFrequency: {
    readonly DAILY: "UPDATE_DAILY";
    readonly WEEKLY: "UPDATE_WEEKLY";
    readonly MULTI_WEEKLY: "UPDATE_MULTI_WEEKLY";
    readonly ONE_WEEK: "UPDATE_ONE_WEEK";
    readonly MULTI_FORTNIGHT: "UPDATE_MULTI_FORTNIGHT";
    readonly MONTHLY: "UPDATE_MONTHLY";
    readonly MULTI_MONTHLY: "UPDATE_MULTI_MONTHLY";
    readonly RANDOM: "UPDATE_RANDOM";
};
export type UpdateFrequency = typeof UpdateFrequency[keyof typeof UpdateFrequency];
