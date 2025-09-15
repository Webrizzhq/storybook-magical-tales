export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  ageRange: string;
  synopsis: string;
  coverImage: string;
  featured?: boolean;
  comingSoon?: boolean; // 🔹 new flag
}

const allBooks: Book[] = [
  // 🔹 Shizu Historical Series
  {
    id: "queen-mkabayi",
    title: "Queen Mkabayi Zulu Kingmaker",
    author: "Hellen Akeyo",
    category: "Shizu Historical Series",
    ageRange: "+14 years",
    synopsis: "Twins, Kaya and Vusi time travel to the 18th Century Zulu Kingdom...",
    coverImage: '/BookCovers/Queen Mkabayi mock-up 1.png',
    featured: true
  },
  {
    id: "princess-njinga",
    title: "Princess Njinga Bane of the Portuguese",
    author: "Emily Khalayi Wekulo",
    category: "Shizu Historical Series",
    ageRange: "+14 years",
    synopsis: "Twins Lara and Moises time travel back to the 17th century Ndongo kingdom...",
    coverImage: '/BookCovers/Princess Njinga mock-up 1.png',
    featured: true
  },
  {
    id: "two-faces-chief-odera",
    title: "Two Faces of Chief Odera",
    author: "Michael Oluoch",
    category: "Shizu Historical Series",
    ageRange: "+14 years",
    synopsis: "When Apiyo and Odongo are zapped back to 1915 Kenya...",
    coverImage: '/BookCovers/Two Faces of Chief Odera mock-up 1.png'
  },
  {
    id: "calamity-of-the-kasigau",
    title: "Calamity of the Kasigau",
    author: "Makenzi K.G",
    category: "Shizu Historical Series",
    ageRange: "+14 years",
    synopsis: "In a time-travel twist, twins, Safari and Betty, land in the Kasigau community...",
    coverImage: "/BookCovers/Calamity of the Kasigau mock-up 1.png"
  },
  {
    id: "janga-la-wakasigau",
    title: "Janga La Wakasigau",
    author: "Makenzi K.G",
    category: "Shizu Historical Series",
    ageRange: "+14 years",
    synopsis: "Katika msuko wa safari ya wakati, Safari na Betty...",
    coverImage: "/BookCovers/Janga la Wakasigau Cover- mock-up.png"
  },
  // Coming soon
  {
    id: "rwot-awic",
    title: "Rwot Awic Defender of the Acoli",
    author: "TBD",
    category: "Shizu Historical Series",
    ageRange: "+14 years",
    synopsis: "Coming soon...",
    coverImage: "",
    comingSoon: true
  },
  {
    id: "mekatilili",
    title: "Mekatilili the Drumbeat of Freedom",
    author: "TBD",
    category: "Shizu Historical Series",
    ageRange: "+14 years",
    synopsis: "Coming soon...",
    coverImage: "",
    comingSoon: true
  },

  // 🔹 SUDEF Wildlife Detective Series
  {
    id: "targeted-turtles",
    title: "The Case of Targeted Turtles",
    author: "Shaleen Keshavjee-Gulam",
    category: "SUDEF Wildlife Detective Series",
    ageRange: "8–11 years",
    synopsis: "Sandeep promises his dying grandfather to protect the eggs of endangered green turtles...",
    coverImage: '/BookCovers/The Case of Targeted Turtles mock-up 1.png',
    featured: true
  },
  {
    id: "kisa-cha-kasa-wanaolengwa",
    title: "Kisa Cha Kasa Wanaolengwa",
    author: "Shaleen Keshavjee-Gulam",
    category: "SUDEF Wildlife Detective Series",
    ageRange: "8–11 years",
    synopsis: "Sandeep ana hamu ya kuwatazama kasa wakianguliwa ufukweni...",
    coverImage: "/BookCovers/Kisa Cha Kasa  Cover mockup - 2.png"
  },
  {
    id: "persecuted-pangolins",
    title: "The Case of Persecuted Pangolins",
    author: "Muthoni Wa Gichuru",
    category: "SUDEF Wildlife Detective Series",
    ageRange: "8–11 years",
    synopsis: "Vaati wants to help her father show researchers pangolins near village...",
    coverImage: '/BookCovers/The Case of Persecuted Pangolins mock-up 1.png'
  },
  {
    id: "case-of-the-prowling-panther",
    title: "The Case of the Prowling Panther",
    author: "Vaishnavi Ram Mohan",
    category: "SUDEF Wildlife Detective Series",
    ageRange: "8–11 years",
    synopsis: "Lemunyatta hoped to see fabled black panther during a visit...",
    coverImage: "/BookCovers/The Case of the Prowiling Panther mock-up 1.png"
  },
  {
    id: "jinxed-giraffes",
    title: "The Case of the Jinxed Giraffes",
    author: "TBD",
    category: "SUDEF Wildlife Detective Series",
    ageRange: "8–11 years",
    synopsis: "Coming soon...",
    coverImage: "/BookCovers/Giraffe COVER.png",
    
  },

  // 🔹 Case Crackers
  {
    id: "missing-set",
    title: "Mystery of the Stolen Sets",
    author: "Uumbi Guthaka",
    category: "Case Crackers",
    ageRange: "7–8 years",
    synopsis: "Coming soon...",
    coverImage: "/BookCovers/Mystery of the Stolen Sets.jpg",
    
  },
  {
    id: "absent-scouts",
    title: "Mystery of the Absent Uniforms",
    author: "Vivian Hinga",
    category: "Case Crackers",
    ageRange: "7–8 years",
    synopsis: "Coming soon...",
    coverImage: "/BookCovers/Mystery of the Absent Uniforms.jpg",
    
  },
  {
    id: "lost-child",
    title: "Mystery of the Lost Child",
    author: "Nyarinda Moraa",
    category: "Case Crackers",
    ageRange: "7–8 years",
    synopsis: "Coming soon...",
    coverImage: "/BookCovers/Mystery of the Lost Child.jpg",
    
  },
  {
    id: "crazy-drawings",
    title: "Mystery of the Crazy Drawings",
    author: "Dawn Kaliaus",
    category: "Case Crackers",
    ageRange: "7–8 years",
    synopsis: "Coming soon...",
    coverImage: "/BookCovers/Mystery of the Crazy Drawings.jpg",
    
  },

  // 🔹 Redhot Picture Books
  {
    id: "matatu-from-watamu",
    title: "The Matatu from Watamu Drove into the Sea",
    author: "Muthoni Muchemi",
    category: "Redhot Picture Books",
    ageRange: "<9 years",
    synopsis: "A Rasta driver drives his matatu into the deep blue Indian Ocean...",
    coverImage: '/BookCovers/The Matatu from Watamu mockup 3.png'
  },
  {
    id: "koko-riko",
    title: "Koko Riko",
    author: "Muthoni Muchemi",
    category: "Redhot Picture Books",
    ageRange: "<9 years",
    synopsis: "Join Koko Riko as he faces off against shadow monsters...",
    coverImage: "/BookCovers/Koko Riko mockup 3.png"
  },
  {
    id: "boy-and-lion",
    title: "The Boy and the Lion",
    author: "Mike Saito with Turk Pipkin",
    category: "Redhot Picture Books",
    ageRange: "<9 years",
    synopsis: "Five-year-old Sitoti is lost and alone in the vast Mara...",
    coverImage: '/BookCovers/The Boy and the Lion eng mockup 3.png'
  },
  {
    id: "mvulana-na-simba",
    title: "Mvulana na Simba",
    author: "Mike Saito with Turk Pipkin",
    category: "Redhot Picture Books",
    ageRange: "<9 years",
    synopsis: "Saitoti, mwenye umri wa miaka mitano, amepotea na yuko peke yake...",
    coverImage: "/BookCovers/Book mock-up kiswahili 2.png"
  },
  {
    id: "enkatini-e-nyayioni",
    title: "Enkatini e-nyayioni o-lowuaru",
    author: "Mike Saito with Turk Pipkin",
    category: "Redhot Picture Books",
    ageRange: "<9 years",
    synopsis: "Ore Saitoti naa enkayioni kiti oolarin imiet...",
    coverImage: "/BookCovers/Book mock-up Maasai 1.png"
  },
  {
    id: "forever-tree",
    title: "The Forever Tree",
    author: "Grace Wangari",
    category: "Redhot Picture Books",
    ageRange: "<9 years",
    synopsis: "Coming soon...",
    coverImage: "/BookCovers/The Forever Tree front.jpg",
    
  },
  {
    id: "rhino-book",
    title: "My Amazing Rhino Book",
    author: "Paula Kahumbu",
    category: "Redhot Picture Books",
    ageRange: "<9 years",
    synopsis: "Horns belong to rhinos, not to people",
    coverImage: "/BookCovers/My Amazing Rhino.jpg",
    
  },

  // 🔹 Redhot Novels
  {
    id: "infestations",
    title: "Infestations",
    author: "TBD",
    category: "Redhot Novels",
    ageRange: "+15 years",
    synopsis: "Coming soon...",
    coverImage: "",
    comingSoon: true
  },

  // 🔹 Redhot Reality
  {
    id: "our-african-animals",
    title: "Our African Wildlife",
    author: "Monity Odera",
    category: "Redhot Reality",
    ageRange: "All Ages",
    synopsis: "Meeting 100 amazing species found in Africa",
    coverImage: "/BookCovers/Our African Wildlife.jpg",
    
  },

  // 🔹 Best African Series
  {
    id: "deception-and-other-stories",
    title: "Deception and Other Stories",
    author: "Multiple Authors",
    category: "Best African Series",
    ageRange: "13+ years",
    synopsis: "See the world from an insider's point of view...",
    coverImage: "/BookCovers/Deception mock-up 1.png",
    featured: true
  },
  {
    id: "zero-tolerance",
    title: "Zero Tolerance and Other Stories",
    author: "Multiple Authors",
    category: "Best African Series",
    ageRange: "13+ years",
    synopsis: "In a world that demands Zero Tolerance for injustice...",
    coverImage: '/BookCovers/Zero Tolerance mock-up 1.png'
  },
  {
    id: "fire-within",
    title: "A Fire Within and Other Stories",
    author: "Multiple Authors",
    category: "Best African Series",
    ageRange: "13+ years",
    synopsis: "A Fire Within and Other Stories is an anthology of short stories...",
    coverImage: '/BookCovers/A Fire Within mock-up 1.png'
  }
];

export const categories = [
  "All Books",
  "Redhot Novels (+15 years)",
  "Shizu Historical Series (+14 years)",
  "SUDEF Wildlife Detective Series (8–11 years)",
  "Case Crackers (7–8 years)",
  "Redhot Picture Books (<9 years)",
  "Redhot Reality (All Ages)",
  "Best African Series (13+ years)"
];

export const books = allBooks.filter(book => !book.comingSoon);

export const getFeaturedBooks = () =>
  books.filter(book => book.featured);

export const getBooksByCategory = (category: string) =>
  category === "All Books"
    ? books
    : books.filter(book => book.category === category);

export const getBookById = (id: string) =>
  books.find(book => book.id === id);

export const getBooksByAge = (ageRange: string) =>
  ageRange === "All Ages"
    ? books
    : books.filter(book =>
        book.ageRange.includes(ageRange.split(" ")[0])
      );

