// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export const EcommerceOrderStatus = {
  AWAITING_ORDER: "AWAITING_ORDER",
  SHIPPING_SOON: "SHIPPING_SOON",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  RETURNED: "RETURNED",
} as const;

export type EcommerceOrderStatus = typeof EcommerceOrderStatus[keyof typeof EcommerceOrderStatus];

