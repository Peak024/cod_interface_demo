/** The COD amount on the demo job. */
export const JOB_COD_AMOUNT = 550;

/** What a saved order is worth to the customer and to the rider. */
export const SAVED_ORDER = {
  discount: 20,
  riderBonus: 15,
};

export const SAVED_ORDER_PAID = JOB_COD_AMOUNT - SAVED_ORDER.discount;
