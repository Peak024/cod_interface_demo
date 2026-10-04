import { APP_NAME } from '@/lib/constants';

export const en = {
  meta: {
    title: APP_NAME,
    demoNote: 'Concept demo · not a live app',
    gotIt: 'Got it',
    language: 'Language',
  },

  tabs: {
    rider: 'Rider app',
    customer: 'Customer streak',
    green: 'Green customer',
    yellow: 'Yellow customer',
    red: 'Red customer',
  },

  rider: {
    subtitle: 'Cash-on-delivery (COD) job',
    jobCounter: 'Job 14/28',
    trackingLabel: 'Tracking number',
    codAmount: 'COD ฿550',
    customerInitials: 'SJ',
    customerName: 'Khun Somchai Jaidee',
    customerHistory: 'Good pickup history · Streak Lv.2',
    address: '88/9 Soi Sukhumvit 55, Khlong Tan Nuea, Watthana, Bangkok 10110',
    product: 'Korean-style winter jacket (Black, size L)',
    chooseStatus: 'Select delivery outcome',
    gpsVerified: 'GPS verified',
    statusLabel: 'Rider status:',
    statusOnline: 'Online',
    bonusToday: "Today's bonus +฿45",
    bonusBadge: '🎁 Rider bonus +฿15',
    outcomes: {
      delivered: {
        title: '1. Delivered (customer accepted)',
        sub: 'Customer paid by cash / QR',
      },
      saved: {
        title: '2. Refused, then changed their mind',
        sub: 'Offered an on-the-spot discount → accepted',
      },
      refused: {
        title: '3. Firmly refused (return to hub)',
        sub: 'Still refused after the coupon → back to hub',
      },
      silent: {
        title: '4. Refused and walked away',
        sub: 'No confirmation → photo of the door to close job',
      },
    },
  },

  streak: {
    headerTitle: 'Streak',
    subtitle: 'Consecutive pickup challenge',
    levelBadge: 'Level 2',
    bannerEyebrow: 'Accept every parcel, never leave the rider hanging',
    bannerTitle: 'Build your streak, earn discount codes!',
    streakLabel: 'Current streak:',
    streakValue: '{n} in a row',
    milestonesTitle: 'Streak rewards',
    milestonesNote: 'Updated after every pickup',
    goal: '{n} successful pickups in a row',
    reward: 'Get a {x} discount code',
    unlocked: 'Unlocked',
    remaining: '{n} to go',
    warningTitle: 'Important streak rules',
    warning: {
      lead: "* If you refuse a parcel at the door, or can't be reached and the parcel is returned, ",
      emphasis: 'your streak resets to 0 immediately',
      tail: ' and cash on delivery (COD) may be suspended for your account.',
    },
  },

  checkout: {
    title: 'Checkout',
    addressTitle: 'Delivery address',
    sellerBadge: 'Store',
    chat: 'Chat',
    product: 'Korean-style winter jacket',
    variation: 'Variation: Black, L',
    qtyLess: 'Decrease quantity',
    qtyMore: 'Increase quantity',
    messageLabel: 'Message:',
    messagePlaceholder: 'Leave a message for the seller',
    shippingTitle: 'Shipping option',
    shippingName: 'Standard delivery',
    shippingEta: 'Arrives in 3–5 days',
    shippingEtaPriority: 'Arrives in 2–3 days',
    priorityNote: 'Your order is packed and shipped first',
    orderTotal: 'Order total ({n} {unit}):',
    unitOne: 'item',
    unitMany: 'items',
    voucherRow: 'Voucher',
    voucherPick: 'Select or enter code',
    voucherRemoved: "Voucher removed: it can't be combined with cash on delivery",
    payTitle: 'Payment method',
    methods: {
      cod: 'Cash on delivery',
      wallet: 'Wallet',
      bank: 'Bank transfer',
      card: 'Credit / debit card',
      qr: 'PromptPay QR',
    },
    methodSubs: {
      wallet: 'Pay now from your Wallet balance',
      bank: 'Transfer from your banking app',
      card: 'Visa, Mastercard, JCB',
      qr: 'Scan to pay in your banking app',
    },
    codSubs: {
      green: 'Pay the rider in cash when it arrives',
      yellow: 'Confirm your order by SMS/LINE before it is packed',
      red: 'Suspended until {date}',
    },
    overCap: '{total} is over your cash-on-delivery limit of {cap}',
    badgeLimited: 'Limited',
    badgeLocked: 'Unavailable',
    badgeOver: 'Over limit',
    codDropped:
      'This order is over your cash-on-delivery limit. Choose another payment method or reduce the quantity.',
    detailsTitle: 'Payment details',
    subtotal: 'Merchandise subtotal',
    shipping: 'Shipping',
    discount: 'Voucher discount',
    grandTotal: 'Total payment',
    barTotal: 'Total',
    barSaved: 'Saved {x}',
    pickPayment: 'Choose a payment method',
    placeOrder: 'Place order',
  },

  voucher: {
    sheetTitle: 'Select voucher',
    stubLabel: 'Voucher',
    blocked:
      "Vouchers can't be combined with cash on delivery. Change your payment method to use one.",
    switchToWallet: 'Switch to Wallet',
    notWithCod: 'Not valid with cash on delivery',
    expiry: 'Expires in 3 days',
    saves: 'Discount {x}',
    noneSelected: 'No voucher selected',
    ok: 'OK',
    close: 'Close',
    items: {
      flat50: { title: '฿50 off', condition: 'Min. spend ฿300' },
      tenPercent: { title: '10% off, up to ฿80', condition: 'Min. spend ฿500' },
    },
  },

  order: {
    placed: 'Order placed',
    payCod: 'Pay {total} in cash to the rider when it arrives.',
    paidWith: 'You paid {total} with {method}.',
    voucherSaved: 'Voucher saved you {x}',
    notes: {
      green: '🚀 Your order is in the Priority delivery queue',
      yellowPaid: 'Paid in advance, so no order confirmation is needed',
      red: 'COD will be available again on {date}.',
    },
    waitingTitle: 'Order placed · please confirm',
    waitingDesc:
      "We've sent you a message on LINE and SMS. Tap confirm so the shop can start packing.",
    confirmedTitle: 'Order confirmed',
    line: {
      from: APP_NAME,
      via: 'LINE · SMS',
      message: [
        'Confirm order #{no}',
        '{item} ×{n}',
        'Cash on delivery: {cod}',
        'Tap confirm so the shop can start packing.',
      ],
      button: 'Confirm order',
      done: 'Confirmed. The shop is packing your order.',
    },
  },

  outcomes: {
    delivered: {
      title: 'Delivered',
      desc: 'Delivery recorded. The customer paid the full ฿550 COD amount and received the parcel.',
      streak: '🎉 Customer earned +1 streak point',
    },
    saved: {
      title: 'Order saved! (customer changed their mind)',
      desc: 'The rider offered an on-the-spot discount coupon, and the customer changed their mind, paid and accepted the parcel.',
      discountLabel: 'On-the-spot discount:',
      paidLabel: 'Customer paid:',
      bonusLabel: 'Order-save bonus for rider:',
    },
    refused: {
      title: 'Confirm refusal (return to hub)',
      desc: 'The rider offered a discount, but the customer still refused the parcel. It will be marked as returned and sent back to the hub.',
      prompt: "⚠️ Select the customer's reason:",
      reasons: [
        'Changed mind / no longer wants it',
        'Ordered the wrong size / colour / model',
        'No cash to pay the COD amount',
        'Waited too long for the order',
      ],
      note: "* The buyer's streak resets to 0 and a return is logged on their history.",
    },
    silent: {
      title: 'Log silent rejection',
      desc: "The customer refused and walked away, or wouldn't confirm. The rider takes a photo of the door as proof to fast-close the job.",
      photoPrompt: 'Tap to simulate a photo of the house / door',
      photoHint: 'GPS location and timestamp are attached automatically',
      gpsLabel: '📍 GPS:',
      verified: 'Verified',
      photoSaved: 'Proof photo saved',
    },
  },
};

/** Every other language has to match the English dictionary, key for key. */
export type Dictionary = typeof en;
