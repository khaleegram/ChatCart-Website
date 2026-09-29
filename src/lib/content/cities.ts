import type { ContentSection, Faq } from "./types";

export type CityPage = {
  slug: string;
  city: string;
  state: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  keywords: string[];
  sections: ContentSection[];
  faqs: Faq[];
  updated: string;
};

const UPDATED = "2026-09-29";

/**
 * These pages are deliberately about mechanics, not statistics. There are no
 * invented seller counts or "N orders in this city" numbers, because a city page
 * that is a keyword wrapper is exactly the thin content search engines ignore —
 * and making the numbers up would be worse than ranking lower.
 */

export const CITY_PAGES: CityPage[] = [
  {
    slug: "lagos",
    city: "Lagos",
    state: "Lagos State",
    title: "Buying and Selling on ChatCart in Lagos",
    description:
      "How buying and selling works in Lagos: same-day dispatch across the mainland and island, escrow on every order, and what to check before you ship interstate.",
    h1: "Buying and selling on ChatCart in Lagos",
    lede: "Lagos has the deepest delivery infrastructure in the country and the largest concentration of buyers. It is also where a bad payment goes wrong fastest, because everything moves quickly.",
    keywords: [
      "online marketplace Lagos",
      "buy and sell in Lagos",
      "sell online Lagos",
      "online shopping Lagos with delivery",
      "escrow payment Lagos",
      "Lagos online store",
    ],
    sections: [
      {
        id: "buying",
        heading: "Buying in Lagos",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Intra-city delivery is the advantage. Dispatch riders can move a parcel across the mainland or between the island and the mainland within a day in most cases, which means the escrow hold is short — the buyer receives quickly, confirms quickly, and the seller is paid quickly.",
              "Order statuses matter more here than almost anywhere because the delivery window is short. If a seller marks an order as sent, the release clock starts, and in Lagos that clock is usually running against a delivery that genuinely happened that day.",
            ],
          },
          {
            kind: "bullets",
            items: [
              "Check the seller's location on the post before you order — a same-state seller will get the item to you faster.",
              "Confirm only once the item is in your hands; confirming is what releases the money.",
              "If a rider delivers something that does not match the listing, open a dispute rather than accepting it.",
            ],
          },
        ],
      },
      {
        id: "selling",
        heading: "Selling in Lagos",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "The buyers are here, and so is the competition. Lagos sellers compete on presentation and speed more than anywhere else, which is why the video format matters: a short clip of an item being worn or used does more than a still photo of it on a hanger.",
              "Areas around the major trading districts — Balogun and the Island markets, Computer Village in Ikeja — have long established prices that buyers know. On ChatCart that starting price can be listed and still left open to offers, rather than being argued about in a chat app.",
            ],
          },
          {
            kind: "note",
            title: "Payouts are not instant",
            body: "Funds release as soon as the buyer confirms, or automatically 48 hours after you mark the order as sent. Withdrawals are then requested in-app, minimum ₦5,000, and take roughly 3 business days to reach your bank.",
          },
        ],
      },
      {
        id: "shipping-out",
        heading: "Shipping out of Lagos",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Most Lagos sellers ship to other states as well. Interstate movement usually happens either through a logistics company or through a park courier, where the parcel travels on a bus route and is collected at the destination park.",
              "That second route is cheap and widely used, and it is worth being explicit about it in the order: a buyer in Kano or Port Harcourt needs to know that their parcel will be collected from a park rather than delivered to their door, because that changes how long the handover feels.",
            ],
          },
          {
            kind: "bullets",
            items: [
              "Mark the order as sent when it actually leaves you, not when you plan to send it.",
              "Tell the buyer in the thread how the parcel is travelling and where it will be collected.",
              "Keep the dispatch record, because it is the evidence that matters if a dispute is opened.",
            ],
          },
        ],
      },
      {
        id: "escrow",
        heading: "Why escrow matters more at Lagos volumes",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Volume is what makes informal selling break down. A seller answering twenty DMs a day stops being able to remember which buyer agreed which price, and buyers stop being able to tell a real seller from a patient fraudster.",
              "Escrow resolves the second problem directly: a fraudulent seller never receives the money, because the money is released on delivery rather than on a screenshot. The order record resolves the first, because the agreed price and the item are both attached to the thread.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How fast is delivery within Lagos?",
        a: "Often same day or next day by dispatch rider, depending on the seller and the distance. The seller sets their own dispatch timing; the escrow release clock starts when they mark the order as sent.",
      },
      {
        q: "Can I collect from the seller instead of paying for delivery?",
        a: "That is between you and the seller, and it can be arranged in the chat. Keep the payment in the app either way, because that is what keeps the protection attached to the order.",
      },
      {
        q: "I sell in Lagos but ship nationwide. Does that change anything?",
        a: "Only in how you describe dispatch in the thread. Interstate parcels often move by logistics company or park courier and are collected at a destination park, which is worth telling the buyer so they know what to expect.",
      },
      {
        q: "Are there fewer buyers outside Lagos?",
        a: "There are fewer in absolute numbers, but also far fewer sellers competing for them. Several cities outside Lagos are easier to get noticed in because the feed is less crowded.",
      },
    ],
    updated: UPDATED,
  },
  {
    slug: "abuja",
    city: "Abuja",
    state: "Federal Capital Territory",
    title: "Buying and Selling on ChatCart in Abuja",
    description:
      "Buying and selling in Abuja: fast intra-city dispatch, buyers with higher average order values, and how escrow protects transactions between strangers.",
    h1: "Buying and selling on ChatCart in Abuja",
    lede: "Abuja is compact, well-connected and unusually dependent on people who arrived from somewhere else. That makes it a city of strangers buying from strangers, which is exactly the situation escrow is built for.",
    keywords: [
      "online marketplace Abuja",
      "buy and sell in Abuja",
      "sell online Abuja",
      "online shopping Abuja delivery",
      "escrow payment Abuja",
      "Abuja online store",
    ],
    sections: [
      {
        id: "buying",
        heading: "Buying in Abuja",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Distances inside the FCT are manageable and the road network is better than in most Nigerian cities, so dispatch from Wuse, Garki, Gwarinpa or the satellite towns into the centre is usually straightforward.",
              "Because so much of the city's population is not from the city, buyers rely on the seller's record rather than on a shared network of people who know them. Reviews that come only from completed orders are a more useful signal here than anywhere else.",
            ],
          },
          {
            kind: "bullets",
            items: [
              "Check the seller's location — satellite town sellers can be a long way from central delivery addresses.",
              "Ask about dispatch timing in the thread before you pay if the timing matters to you.",
              "Use the order status rather than asking the seller whether it has shipped.",
            ],
          },
        ],
      },
      {
        id: "selling",
        heading: "Selling in Abuja",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Buyers in Abuja tend to transact at higher values than the national average, which changes the risk calculation on both sides. A larger order is worth more to a fraudster and worth more to a buyer who is nervous about paying a stranger.",
              "This is where escrow does the most work commercially: it lets a seller ask a realistic price for a valuable item without the buyer having to decide whether they trust a transfer to someone they have never met. The negotiation stays in the thread, and the payment stays protected.",
            ],
          },
          {
            kind: "note",
            title: "Be specific about dispatch",
            body: "In a city where buyers are used to things arriving when they are promised, a seller who marks an order as sent and then takes two days to actually dispatch creates a dispute for no reason. Mark it when it leaves.",
          },
        ],
      },
      {
        id: "shipping-in",
        heading: "Receiving from other states",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "A large share of goods sold in Abuja originate in Lagos, Kano, Aba and Onitsha. Most arrive through a logistics company, and some arrive by park courier and are collected from the destination park.",
              "If you are buying from out of state, ask which one in the thread. It determines where you collect from and roughly how long the whole thing takes, and it is the single most useful question a remote buyer can ask.",
            ],
          },
        ],
      },
      {
        id: "escrow",
        heading: "Why escrow matters here",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Distance and unfamiliarity are the two things that make a transfer risky, and Abuja buyers deal with both by default. Escrow removes the need for either side to extend trust: the money is held, the item ships, and the release happens on receipt.",
              "If the item never arrives, the dispute freezes the funds before they reach the seller — which is the difference between a recoverable problem and a lost transfer.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get an item delivered in Abuja?",
        a: "Delivery details are captured at checkout, and the seller arranges dispatch. Timings vary by seller and area, so it is worth confirming dispatch timing in the thread if you need it quickly.",
      },
      {
        q: "What if the item arrives while I am away?",
        a: "Arrange a collection point with the seller in the chat beforehand. If the item is genuinely wrong or not as listed, the important thing is that you do not confirm receipt before you have inspected it.",
      },
      {
        q: "Is buying from Lagos or Kano safe?",
        a: "The escrow works the same regardless of distance: the seller is not paid until you receive the order. Ask in the thread how the parcel is travelling so you know where to collect it.",
      },
    ],
    updated: UPDATED,
  },
  {
    slug: "kano",
    city: "Kano",
    state: "Kano State",
    title: "Buying and Selling on ChatCart in Kano",
    description:
      "Kano has one of the deepest trading cultures in Nigeria. How sellers there use a video feed and escrow to reach buyers, and how delivery in and out of Kano works.",
    h1: "Buying and selling on ChatCart in Kano",
    lede: "Kano's markets have been organised trading for centuries, and the sellers there already know how to negotiate. What they have never had is a payment that holds until the goods land.",
    keywords: [
      "online marketplace Kano",
      "buy and sell in Kano",
      "sell online Kano",
      "online shopping Kano delivery",
      "escrow payment Kano",
      "Kano online store",
      "Kano textile sellers online",
    ],
    sections: [
      {
        id: "trading-heritage",
        heading: "A trading city that already understands negotiation",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Kano's trading districts — Kantin Kwari, Kurmi market, and the fabric and footwear trades around them — are built on negotiated prices and long-distance distribution. The skills required to sell are not in short supply. What has been missing is a way to sell to a buyer you cannot see without taking on the risk of shipping first.",
              "That is a specific and expensive problem: a seller who wants to reach a buyer in Kaduna, Abuja or Lagos has to decide whether to send goods on trust or ask for a transfer on trust. Escrow means neither side has to make that call.",
            ],
          },
        ],
      },
      {
        id: "what-sells",
        heading: "What sells well from Kano",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Fabric, lace and textile goods, where the colour and drape only really communicate on video.",
              "Ready-to-wear, particularly anything where fit and length matter to the buyer.",
              "Footwear, where showing the sole, the stitching and the fit answers most questions before they are asked.",
              "Leather goods and craft items, where the making is part of the value.",
            ],
          },
          {
            kind: "text",
            paragraphs: [
              "These are all products where a video answers the questions a photo cannot, which is why the format suits the trade rather than being a novelty bolted onto it.",
            ],
          },
        ],
      },
      {
        id: "delivery",
        heading: "Sending goods out of Kano",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Kano is a distribution hub, and parcels leave it constantly by road. Interstate movement is usually either a logistics company or a park courier, where goods travel on a bus route and are collected at the destination park.",
              "For a buyer in Lagos, Abuja or Port Harcourt, that means the parcel may need collecting rather than being delivered to a doorstep, and it will take days rather than hours. Telling the buyer this in the thread turns an anxious wait into an expected one.",
            ],
          },
          {
            kind: "bullets",
            items: [
              "Say which route the parcel is travelling, and where it will be collected.",
              "Mark the order as sent when it leaves, so the release clock and the buyer's expectations start together.",
              "Keep the dispatch receipt — if a parcel goes missing and a dispute is opened, it is the evidence.",
            ],
          },
        ],
      },
      {
        id: "escrow",
        heading: "The problem escrow fixes in Kano",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Kano sellers frequently ship goods worth real money to buyers they have never met in other states. The traditional answer is to insist on payment first, which pushes the entire risk onto the buyer and quietly loses sales from buyers who have been burned before.",
              "Escrow inverts that into something both sides can accept. The seller ships knowing the money already exists and is held; the buyer pays knowing the seller cannot take it until the order arrives. Both halves of the trade get the certainty that used to be impossible at a distance.",
            ],
          },
          {
            kind: "note",
            title: "The negotiated price, recorded",
            body: "A price agreed in Kano's markets is agreed verbally and remembered by two people. On ChatCart an accepted offer is stored against the order, so the number that was agreed is the number that is charged.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I sell to buyers outside Kano?",
        a: "Yes. Posts reach buyers browsing the feed nationally, and escrow is what makes shipping to a stranger in another state reasonable rather than a gamble.",
      },
      {
        q: "How long does delivery from Kano to Lagos or Abuja take?",
        a: "Usually a few days by logistics company, and comparable by park courier with collection at the destination park. It depends on the carrier the seller uses, which is why it is worth asking in the thread.",
      },
      {
        q: "Are prices negotiable?",
        a: "Yes. A seller lists a starting price and buyers can send offers, which the seller can accept, decline or counter. Offers expire after 72 hours.",
      },
      {
        q: "Does the seller get paid before shipping?",
        a: "No. The buyer's payment is held in escrow and the seller receives it once the order is received, or automatically 48 hours after the order is marked as sent if the buyer does nothing.",
      },
    ],
    updated: UPDATED,
  },
  {
    slug: "port-harcourt",
    city: "Port Harcourt",
    state: "Rivers State",
    title: "Buying and Selling on ChatCart in Port Harcourt",
    description:
      "Buying and selling in Port Harcourt and the wider Niger Delta: local dispatch, interstate courier routes, and how escrow removes the risk of paying first.",
    h1: "Buying and selling on ChatCart in Port Harcourt",
    lede: "Port Harcourt is a high-cost, high-value market where buyers frequently order from Lagos and Aba. Distance is normal here — and distance is precisely what escrow is for.",
    keywords: [
      "online marketplace Port Harcourt",
      "buy and sell in Port Harcourt",
      "sell online Port Harcourt",
      "online shopping Port Harcourt delivery",
      "escrow payment Rivers State",
      "Port Harcourt online store",
    ],
    sections: [
      {
        id: "buying",
        heading: "Buying in Port Harcourt",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "A significant share of what Port Harcourt buyers want is not made locally. Clothing, electronics and household goods routinely come in from Lagos, Aba and Onitsha, which means most purchases here are remote purchases by default.",
              "That is the situation where a transfer is most dangerous and where escrow is most valuable: the buyer cannot walk into the seller's shop, cannot see the goods first, and has to rely entirely on the listing and the conversation.",
            ],
          },
          {
            kind: "bullets",
            items: [
              "Confirm which carrier is being used and where the parcel will be collected before paying.",
              "Inspect on arrival, and only confirm receipt once you are satisfied.",
              "Use the thread to agree delivery specifics rather than relying on a phone call nobody can review later.",
            ],
          },
        ],
      },
      {
        id: "selling",
        heading: "Selling from Port Harcourt",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Selling locally is limited by the size of the local buyer pool; selling nationally is limited by trust. Escrow removes the second constraint, because a buyer in Kano or Abuja no longer has to decide whether to believe a seller they have never dealt with.",
              "For sellers, that means the addressable market is the whole country rather than the city. The practical work is the same: post the product, answer the questions, ship when paid.",
            ],
          },
          {
            kind: "note",
            title: "Delivery cost is the seller's call",
            body: "Set delivery expectations before the order, and keep them realistic. A buyer who is told to expect five days and receives it in five days is satisfied; a buyer told two days who waits five opens a dispute.",
          },
        ],
      },
      {
        id: "delivery",
        heading: "How parcels move in and out",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Within the city, dispatch riders handle most same-day and next-day movement. Inbound from other states, goods typically travel by logistics company or by park courier with collection at the destination park.",
              "Park-based movement is cheaper and slower, and it puts the collection on the buyer rather than the seller. None of that is a problem as long as it is stated clearly in the order thread, because the buyer can then plan around it.",
            ],
          },
        ],
      },
      {
        id: "escrow",
        heading: "Why escrow is the point",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "In a market where most purchases cross a state line, the alternative to escrow is paying a stranger and hoping. That is a bad deal for buyers and, in the long run, an equally bad one for honest sellers, because buyers who have been burned stop buying remotely altogether.",
              "Escrow holds the payment until the order is received and freezes it if a dispute is opened, which is what allows a Port Harcourt seller and a Kano buyer to trade with reasonable confidence.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I buy from sellers in Lagos while in Port Harcourt?",
        a: "Yes. The payment is held in escrow regardless of the distance, so the seller is not paid until you receive the order. Ask in the thread how the parcel will travel and where you will collect it.",
      },
      {
        q: "Do parcels get delivered to my door or a park?",
        a: "It depends on the carrier the seller uses. Dispatch riders deliver locally; interstate logistics companies usually deliver, while park couriers are collected from the destination park. Confirm which before you pay.",
      },
      {
        q: "What if the parcel is delayed by the carrier?",
        a: "The buyer can open a dispute rather than confirming, which freezes the payment. A carrier delay is not a reason for the seller to be paid if the item has not reached you.",
      },
      {
        q: "Can I sell to other states from Port Harcourt?",
        a: "Yes, and the reach is national. Escrow is what makes selling to an unfamiliar buyer in another state reasonable for both sides.",
      },
    ],
    updated: UPDATED,
  },
  {
    slug: "ibadan",
    city: "Ibadan",
    state: "Oyo State",
    title: "Buying and Selling on ChatCart in Ibadan",
    description:
      "Buying and selling in Ibadan: short dispatch routes and easy access to Lagos, how escrow protects orders, and what sellers should say about delivery.",
    h1: "Buying and selling on ChatCart in Ibadan",
    lede: "Ibadan is close enough to Lagos to share its supply of goods and far enough to have its own prices. That combination makes it a good market for sellers who can get delivery logistics right.",
    keywords: [
      "online marketplace Ibadan",
      "buy and sell in Ibadan",
      "sell online Ibadan",
      "online shopping Ibadan delivery",
      "escrow payment Oyo State",
      "Ibadan online store",
    ],
    sections: [
      {
        id: "buying",
        heading: "Buying in Ibadan",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Ibadan's size means intra-city delivery takes planning. Routes between the major trading areas — around Dugbe and the older market districts — and the newer residential outskirts can take considerably longer than a short-distance rider run, so the dispatch window is not always same day.",
              "Because Lagos is a short drive away, a lot of stock reaches Ibadan sellers the same way it reaches Lagos sellers, often within a day or two. That is worth asking about if you need something quickly.",
            ],
          },
          {
            kind: "bullets",
            items: [
              "Ask about dispatch timing rather than assuming same-day delivery.",
              "The order status shows when an item has actually been marked as sent.",
              "Confirm receipt only after inspecting — including for items that arrived quickly.",
            ],
          },
        ],
      },
      {
        id: "selling",
        heading: "Selling in Ibadan",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "The proximity to Lagos cuts both ways. Sellers can restock quickly and cheaply, which makes it possible to keep up with what is currently selling, but they also compete against Lagos sellers reaching Ibadan buyers at similar prices.",
              "The practical edge is service: faster local dispatch, a price that is open to an offer, and a conversation where the item is already attached. Those are the things a Lagos-based seller shipping down is worse at.",
            ],
          },
          {
            kind: "note",
            title: "Cross-state delivery is normal here",
            body: "A good share of Ibadan orders ship out to other states, usually by logistics company or park courier with collection at the destination park. Saying so in the thread prevents the most common source of buyer anxiety.",
          },
        ],
      },
      {
        id: "escrow",
        heading: "Why escrow matters in Ibadan",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Ibadan buyers often pay sellers they have found through the app rather than sellers they know personally, and the same is true in reverse. Escrow means that unfamiliarity costs nobody anything: the buyer's money is held, and the seller ships knowing the funds are real and already accounted for.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is same-day delivery available in Ibadan?",
        a: "Sometimes, depending on distance and the seller's dispatch arrangements. Intra-city routes in Ibadan can be long, so it is better to confirm timing in the thread than to assume it.",
      },
      {
        q: "Can I order from Lagos sellers?",
        a: "Yes, and it is common. Parcels usually arrive by logistics company or park courier within a few days, with collection at the destination park for the cheaper routes.",
      },
      {
        q: "How do I know a seller has shipped?",
        a: "The order status in the deal thread changes to shipped when the seller marks it as sent. That also starts the 48-hour release clock, so sellers are incentivised to mark it promptly.",
      },
    ],
    updated: UPDATED,
  },
  {
    slug: "kaduna",
    city: "Kaduna",
    state: "Kaduna State",
    title: "Buying and Selling on ChatCart in Kaduna",
    description:
      "Buying and selling in Kaduna: road routes to Kano, Abuja and the north, escrow on every order, and how sellers should handle interstate dispatch.",
    h1: "Buying and selling on ChatCart in Kaduna",
    lede: "Kaduna sits on the road between the north's biggest trading city and the capital, which makes it a natural distribution point — and a natural place for goods to travel further than the buyer can see.",
    keywords: [
      "online marketplace Kaduna",
      "buy and sell in Kaduna",
      "sell online Kaduna",
      "online shopping Kaduna delivery",
      "escrow payment Kaduna",
      "Kaduna online store",
    ],
    sections: [
      {
        id: "position",
        heading: "A distribution city between Kano and Abuja",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Kaduna's position on the northern road network means goods move through it constantly — from Kano and the northern markets down toward Abuja and the south, and back the other way. For a seller here, that means stock can arrive quickly and orders can be sent out in most directions.",
              "It also means buyers in Kaduna frequently order from Kano and Abuja, and buyers in smaller northern towns order from Kaduna. Most of those transactions are between people who will never meet, which is exactly the case escrow was designed for.",
            ],
          },
        ],
      },
      {
        id: "buying",
        heading: "Buying in Kaduna",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Confirm how the parcel is travelling and where you collect it before you pay.",
              "Inspect the item on arrival and only confirm receipt when you are satisfied.",
              "Open a dispute rather than confirming if the item is not what was listed.",
            ],
          },
          {
            kind: "text",
            paragraphs: [
              "Because much of what is available in Kaduna comes in from elsewhere, delivery timing is less predictable than in a city with a dense local trade. A seller who states a realistic dispatch window is far more useful to deal with than one who promises next day.",
            ],
          },
        ],
      },
      {
        id: "selling",
        heading: "Selling from Kaduna",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Sellers here can reach buyers across the north and beyond through the feed, without needing a shopfront or an existing social media following. The products that suit the format are the ones buyers ask questions about: fabrics, ready-to-wear, footwear, leather goods and household items.",
              "The payment side is where sellers gain most. Instead of asking a new buyer to transfer on trust and losing the ones who refuse, the order arrives already paid into escrow, and the seller ships knowing the money exists.",
            ],
          },
          {
            kind: "note",
            title: "Declining early is cheaper than going quiet",
            body: "If you cannot fulfil an order, accept that it is better to decline or mark the item unavailable than to leave it pending. An unaccepted order is cancelled and the buyer refunded automatically after 24 hours, which is a clean outcome for both sides.",
          },
        ],
      },
      {
        id: "escrow",
        heading: "Why escrow matters here",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Long road distances mean goods are in transit for days, and days in transit are days in which a buyer has paid and has nothing to show for it. That is the gap escrow closes: the money exists and is committed, but the seller cannot take it until the goods land.",
              "It also settles the reverse case. A seller sending valuable goods across a state line has proof the payment is real before spending money on packaging and carriage, rather than trusting a transfer screenshot.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How long does delivery take within Kaduna?",
        a: "Local dispatch is usually within a day or two depending on the seller and the distance. Interstate orders take longer, and the seller states the dispatch timing.",
      },
      {
        q: "Can I order from Kano or Abuja?",
        a: "Yes. Parcels normally arrive by logistics company or park courier, collected at the destination park on the cheaper routes.",
      },
      {
        q: "What stops a seller taking my money and not shipping?",
        a: "The seller never receives the money until the order is received. If the item does not arrive, a dispute freezes the payment and it is not released.",
      },
    ],
    updated: UPDATED,
  },
];

export function getCityPage(slug: string): CityPage | undefined {
  return CITY_PAGES.find((page) => page.slug === slug);
}

export const CITY_SLUGS: string[] = CITY_PAGES.map((page) => page.slug);
