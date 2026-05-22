export declare const EcommerceOrderStatus: {
    readonly AWAITING_ORDER: "AWAITING_ORDER";
    readonly SHIPPING_SOON: "SHIPPING_SOON";
    readonly SHIPPED: "SHIPPED";
    readonly DELIVERED: "DELIVERED";
    readonly RETURNED: "RETURNED";
};
export type EcommerceOrderStatus = typeof EcommerceOrderStatus[keyof typeof EcommerceOrderStatus];
