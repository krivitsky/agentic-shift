// Agentic Shift runtime config.
// Edit this file and commit to update prices / dates / copy on the live site.
window.AGENTIC_CONFIG = {
  price: {
    // all pricing tiers in order; `current` marks which one is active.
    // the active tier's amount is shown in the venue boot line and bold in /reg.
    tiers: [
      { id: 'super-early', label: 'super-early bird', amount: '99 EUR' },
      { id: 'early',       label: 'early bird',       amount: '149 EUR' },
      { id: 'regular',     label: 'regular',          amount: '199 EUR' },
      { id: 'last-minute', label: 'last-minute',      amount: '249 EUR' },
    ],
    current: 'super-early',
    // headline shown above the tier list at the start of /reg
    regHeadline: "you're lucky! a pre-registration is open now with a super-early bird price",
  },
};
