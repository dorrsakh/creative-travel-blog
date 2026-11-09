export type Story = {
  slug: string;
  title: string;
  date: string;
  country: string;
  image: string;
  alt: string;
  intro: string;
};

export const stories: Story[] = [
  { slug: "finding-stillness-in-san-cristobal", title: "Finding Stillness in the Hills of San Cristóbal", date: "October 10, 2025", country: "Mexico", image: "mexico", alt: "A traveler outside an ochre-colored house surrounded by green hills", intro: "Some places ask you to slow down before you have even unpacked. San Cristóbal was one of them. I traded a list of things to see for a pair of comfortable shoes and followed the streets uphill." },
  { slug: "wandering-through-rome", title: "Wandering Through the Streets of Rome", date: "October 2, 2025", country: "Italy", image: "rome-itinerary", alt: "The Colosseum in Rome, seen from below in warm afternoon light", intro: "I went out for a coffee and came back hours later. That is how most days in Rome began: a small intention, a wrong turn, and a street that felt too lovely to leave." },
  { slug: "driving-across-monument-valley", title: "Driving Across Monument Valley", date: "September 17, 2025", country: "United States", image: "monument", alt: "Monument Valley's red rock formations seen through a car window", intro: "The road kept stretching ahead, straight into a landscape that seemed to have its own sense of time. We stopped often, sometimes for a photograph, mostly just to look." },
  { slug: "walking-northern-vietnam", title: "Walking the Terraces of Northern Vietnam", date: "September 2, 2025", country: "Vietnam", image: "vietnam", alt: "Two women carrying baskets along a path through green terraces", intro: "The trail wound between green fields, climbing just enough to make every pause feel earned. There was no hurry, only the rhythm of walking and the quiet work of an ordinary day." },
  { slug: "clifftops-of-the-lycian-coast", title: "Admiring the Clifftops of the Lycian Coast", date: "August 20, 2025", country: "Turkey", image: "turkey", alt: "A sunlit house and garden on the Turkish coast", intro: "On the Lycian coast, I learned to leave the afternoons unplanned. A path along the water, a shaded table, and the last light on the cliffs were more than enough." },
  { slug: "waiting-by-the-red-sea", title: "Waiting by the Shores of the Red Sea", date: "August 8, 2025", country: "Egypt", image: "red-sea", alt: "A small blue and white building beside a quiet coastal road", intro: "There was a little building beside the road and the sea somewhere beyond it. We waited for a bus that had no particular reason to arrive on time, and watched the day go by." },
  { slug: "dolomite-highlands", title: "Tracing Trails Through the Dolomite Highlands", date: "July 24, 2025", country: "Italy", image: "dolomites", alt: "Rocky Dolomite peaks above green alpine forest", intro: "We started early, while the paths were still cool and the mountains were only beginning to catch the light. Every bend opened onto another reason to stop walking for a moment." },
  { slug: "wild-camping-tasmania", title: "Wild Camping Along Tasmania’s East Coast", date: "July 11, 2025", country: "Australia", image: "tasmania", alt: "A camper trailer on a rocky clifftop beside the ocean", intro: "I followed the coast without much of a plan, stopping whenever the road came close enough to the water. There were quiet campsites, long stretches of empty beach, and mornings that began with the sound of the sea." },
];

export const featured = stories[7];
export const itinerary = [
  { place: "Oaxaca, Mexico", date: "March 12 – March 25", note: "For mole, markets, and Monte Albán", image: "mexico" },
  { place: "Rome, Italy", date: "June 9 – June 30", note: "Evening walks and neighborhood trattorias", image: "rome-itinerary" },
  { place: "Lofoten, Norway", date: "October 20 – October 28", note: "Midnight sun, damp air, and drying cod", image: "dolomites" },
  { place: "Kagoshima, Japan", date: "Dec 3 – Dec 21", note: "Admire Sakurajima from the ferry", image: "japan" },
];
