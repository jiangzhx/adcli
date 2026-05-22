export declare const Comparator: {
    readonly GE: "COMPARATOR_GE";
    readonly LE: "COMPARATOR_LE";
    readonly BETWEEN: "COMPARATOR_BETWEEN";
    readonly EQ: "COMPARATOR_EQ";
};
export type Comparator = typeof Comparator[keyof typeof Comparator];
