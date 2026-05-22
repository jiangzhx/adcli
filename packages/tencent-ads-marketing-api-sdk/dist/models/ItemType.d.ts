export declare const ItemType: {
    readonly NAME: "NAME";
    readonly PHONE: "PHONE";
    readonly TEXT: "TEXT";
    readonly SELECT: "SELECT";
};
export type ItemType = typeof ItemType[keyof typeof ItemType];
