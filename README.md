# cod_interface_demo

Clickable concept demo of the cash-on-delivery (COD) doorstep flow, built as a Next.js app.

- **Rider app** — the four outcomes a rider can record: normal delivery, refused but saved with an on-the-spot discount (rider bonus), refused and returned to hub, and silent rejection closed with a GPS-tagged photo.
- **Customer streak** — the buyer-side reward ladder for consecutive successful COD pickups, and the reset rule on refusal.
- **Green / Yellow / Red customer** — the same jacket at checkout for three risk tiers, with a quantity selector and a voucher picker:
  - **Green:** nothing restricted. COD as normal, vouchers in full, and the order joins the Priority delivery queue.
  - **Yellow:** cash on delivery (เก็บเงินปลายทาง) with a one-tap order confirmation by SMS/LINE before packing. Two more conditions stay hidden until the cart triggers them: vouchers can be viewed but not used with cash on delivery, and a ฿1,500 cash-on-delivery limit. No deposit. Paying in advance avoids both.
  - **Red:** cash on delivery suspended for 30 days. The option is locked and shows the date it comes back; prepaid methods (Wallet, bank transfer, card, QR) and vouchers work as normal.

Thai / English switch in the top bar (remembered per browser). On phones the app fills the screen; on tablets and desktops it is shown inside a phone frame.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run typecheck
```

## How it is put together

Next.js App Router, TypeScript and Tailwind CSS v4. The page is rendered in the browser only
(`app/page.tsx` imports the app with `ssr: false`), because the language comes from
`localStorage` and the COD suspension date is formatted in the visitor's locale.

```
app/                     layout, globals.css, the single page
components/
  chrome/                control bar, view tabs, language toggle, phone frame
  rider/                 rider screen: job card, the four outcome buttons, status bar
  streak/                streak screen: banner, milestones, rules
  checkout/              checkout screen: address, seller, vouchers, payment, totals
  modals/                the bottom sheet and one body per scenario
  ui/                    small shared pieces (screen header, pill, summary row)
lib/
  i18n/                  en.ts and th.ts dictionaries, language provider
  checkout/              pricing, tier rules, vouchers, customers, cart state hook
  constants.ts           app name, tracking/order numbers, GPS
  streak.ts, rider.ts    the numbers behind the two rider-side screens
```

The tier rules live in `lib/checkout/rules.ts` and the money in `lib/checkout/pricing.ts`, so the
three checkout screens are the same components reading different rules. `lib/checkout/use-checkout.ts`
keeps one cart per tier alive while you switch between the tabs.

Concept demo — not a live app.
