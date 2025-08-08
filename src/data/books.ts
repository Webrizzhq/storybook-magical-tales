export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  ageRange: string;
  synopsis: string;
  coverImage: string;
  featured?: boolean;
}

export const books: Book[] = [
  // Historical Fiction
  {
    id: "queen-mkabayi",
    title: "Queen Mkabayi Zulu Kingmaker",
    author: "Hellen Akeyo",
    category: "Shizu Historical Fiction",
    ageRange: "Ages 11–13",
    synopsis: "Twins, Kaya and Vusi time travel to the 18th Century Zulu Kingdom, in present-day South Africa. The king is dead and powerful Ndwandwe warriors fight to take over the Zulu Kingdom. How much blood will Queen Mkabayi need to spill to impose a suitable Zulu king? Will the twins survive the war and make it back home?",
    coverImage: '/BookCovers/Queen Mkabayi mock-up 1.png',
    featured: true
  },
  {
    id: "princess-njinga",
    title: "Princess Njinga Bane of the Portuguese",
    author: "Emily Khalayi Wekulo",
    category: "Shizu Historical Fiction",
    ageRange: "Ages 11–13",
    synopsis: "Twins Lara and Moises time travel back to the 17th century Ndongo kingdom, in the country now known as Angola. The kingdom is under attack. Can Princess Njinga, a fierce warrior leader, protect the kingdom from dangerous Imbangala warriors and powerful Portuguese invaders? Will the twins survive the attacks and make it back home?",
    coverImage: '/BookCovers/Princess Njinga mock-up 1.png',
    featured: true
  },
  {
    id: "two-faces-chief-odera",
    title: "Two Faces of Chief Odera",
    author: "Michael Oluoch",
    category: "Shizu Historical Fiction",
    ageRange: "Ages 11–13",
    synopsis: "When Apiyo and Odongo are zapped back to 1915 Kenya, they encounter the formidable Chief Odera Akang'o, who is pushing his people to adopt what seem to them strange and dangerous ideas. His council of elders lead a rebellion against the radical reforms. As tensions rise and the threat of civil war looms, Apiyo and Odongo find themselves caught in the crossfire.",
    coverImage: '/BookCovers/Two Faces of Chief Odera mock-up 1.png'
  },
  {
    id: "calamity-of-the-kasigau",
    title: "Calamity of the Kasigau",
    author: "Makenzi K.G",
    category: "Shizu Historical Fiction",
    ageRange: "Ages 11–13",
    synopsis: "In a time-travel twist, twins, Safari and Betty, land in the Kasigau community on the border of Kenya and Tanzania, during the First World War. As the Kasigau cannot tell apart sworn enemies – British and German colonial soldiers – they end up betraying one to the other. Deemed traitors, they are condemned to die. Safari, Betty and their new-found Kasigau family are compelled to embark on a journey where danger looms at every turn. Will the twins make it out alive? Will the Kasigau survive or be silenced forever?",
    coverImage: "public/BookCovers/Calamity of the Kasigau mock-up 1.png"
  },
  {
    id: "janga-la-wakasigau",
    title: "Janga La Wakasigau",
    author: "Makenzi K.G",
    category: "Shizu Historical Fiction",
    ageRange: "Ages 11–13",
    synopsis: "Katika msuko wa safari ya wakati, Safari na Betty, ambao ni mapacha, wanajipata katikati ya jamii ya Wakasigau wanaoishi kwenye mpaka wa Kenya na Tanzania, wakati wa Vita Vikuu vya Kwanza vya Dunia. Kwa vile Wakasigau hawakuweza kuwatofautisha maadui sugu – wanajeshi wa kikoloni wa Uingereza na Ujerumani, wanadaiwa kusaliti mrengo mmoja dhidi ya mwingine. Kutokana na tuhuma ya uhaini, wanahukumiwa kifo. Safari, Betty na familia yao mpya ya Wakasigau wanalazimishwa kufunga safari hatari ambayo inawakutanisha na balaa bin beluwa kwa kila hatua wanayosonga. Je, mapacha hao watanusurika? Je, Wakasigau wataishi au watanyamazishwa milele?",
    coverImage: "public/BookCovers/Janga la Wakasigau Cover- mock-up.png"
  },

  // Wildlife Detective Fiction
  {
    id: "targeted-turtles",
    title: "Case of Targeted Turtles",
    author: "Shaleen Keshavjee-Gulam",
    category: "SUDEF Wildlife Detective Fiction",
    ageRange: "Ages 8–10",
    synopsis: "Sandeep promises his dying grandfather to protect the eggs of endangered green turtles. Also, someone is poaching the turtles and their eggs are in grave danger. Will Sandeep and his fellow wildlife detectives, Kendi and Lemunyatta, solve the mystery of the disappearing turtles and protect the eggs before they hatch?",
    coverImage: '/BookCovers/The Case of Targeted Turtles mock-up 1.png',
    featured: true
  },
  {
    id: "kisa-cha-kasa-wanaolengwa",
    title: "Kisa Cha Kasa Wanaolengwa",
    author: "Shaleen Keshavjee-Gulam",
    category: "SUDEF Wildlife Detective Fiction",
    ageRange: "Ages 8–10",
    synopsis: "Sandeep ana hamu ya kuwatazama kasa wakianguliwa ufukweni pamoja na babu yake. Sasa babu yake ni mgonjwa na mayai ya kasa yametoweka. Je, yeye na marafiki zake wadogo wataweza kufumbua fumbo hilo?",
    coverImage: "public/BookCovers/Kisa Cha Kasa  Cover mockup - 2.png"
  },
  {
    id: "persecuted-pangolins",
    title: "Case of Persecuted Pangolins",
    author: "Muthoni Wa Gichuru",
    category: "SUDEF Wildlife Detective Fiction",
    ageRange: "Ages 8–10",
    synopsis: "Vaati wants to help her father show researchers pangolins near village. But someone is digging up burrows and her father disappears. What can she do? Groundbreaking stories by African writers exploring issues about our wildlife Heritage.",
    coverImage: '/BookCovers/The Case of Persecuted Pangolins mock-up 1.png'
  },
  {
    id: "case-of-the-prowling-panther",
    title: "Case of the Prowling Panther",
    author: "Vaishnavi Ram Mohan",
    category: "SUDEF Wildlife Detective Fiction",
    ageRange: "Ages 8–10",
    synopsis: "Lemunyatta hoped to see fabled black panther during a visit to its forest home. But rumours are rife saying the black panther is an evil curse. Can she separate the facts from fiction? Groundbreaking stories by African writers exploring issues about our wildlife Heritage.",
    coverImage: "public/BookCovers/The Case of the Prowiling Panther mock-up 1.png"
  },

  // Picture Books
  {
    id: "matatu-from-watamu",
    title: "Matatu From Watamu",
    author: "Muthoni Muchemi",
    category: "Picture Books",
    ageRange: "Ages 5–7",
    synopsis: "A Rasta driver drives his matatu into the deep blue Indian Ocean. Hoping to make lots of money from shy passengers, he hires an octopus as his tout. When the matatu drives as badly in the sea as it does on land, sea creatures are shocked and outraged. Read along, cheering for or against the Matatu From Watamu.",
    coverImage: '/BookCovers/The Matatu from Watamu mockup 3.png'
  },
  {
    id: "koko-riko-african-tales",
    title: "Koko Riko African Tales",
    author: "Muthoni Muchemi",
    category: "Picture Books",
    ageRange: "Ages 5–7",
    synopsis: "Join Koko Riko as he faces off against shadow monsters, belts out tunes in unexpected places, and finds himself in the middle of a cat-astrophe. You'll be left clucking for more Koko Riko adventures!",
    coverImage: "public/BookCovers/Koko Riko mockup 3.png"
  },
  {
    id: "boy-and-lion",
    title: "The Boy and the Lion",
    author: "Mike Saito with Turk Pipkin",
    category: "Picture Books",
    ageRange: "Ages 5–7",
    synopsis: "Five-year-old Sitoti is lost and alone in the vast Mara far from his Maasai village. As the sun begins to set, a pair of glowing eyes watches him from the tall grass. What happens next will change his life forever.",
    coverImage: '/BookCovers/The Boy and the Lion eng mockup 3.png'
  },
  {
    id: "mvulana-na-simba",
    title: "Mvulana na Simba",
    author: "Mike Saito with Turk Pipkin",
    category: "Picture Books",
    ageRange: "Ages 5–7",
    synopsis: "Saitoti, mwenye umri wa miaka mitano, amepotea na yuko peke yake katika eneo kubwa la Maasai Mara, mbali na kijiji chake cha Maasai. Jua linapoanza kuchwa, macho yanayong'aa yanamwangalia kutoka kwenye nyasi ndefu. Kinachotokea baadaye kitabadilisha maisha yake milele.",
    coverImage: "public/BookCovers/Book mock-up kiswahili 2.png"
  },
  {
    id: "enkatini-e-nyayioni-o-lowuaru",
    title: "Enkatini e-nyayioni o-lowuaru",
    author: "Mike Saito with Turk Pipkin",
    category: "Picture Books",
    ageRange: "Ages 5–7",
    synopsis: "Ore Saitoti naa enkayioni kiti oolarin imiet. Eimina ninye te Maasai Mara, nelo alakwaniki emurua namanya oshi ninche. Ore peyie eiteru enkolong' adoyio, nedol inkonyek are naalioo eitiil tiatua irkujit in'gorita ninye. Ore I'mbaa naasuju neibelekeny enkishui enye intarasi.",
    coverImage: "public/BookCovers/Book mock-up Maasai 1.png"
  },

  // Best African Series
  {
    id: "deception-and-other-stories",
    title: "Deception and Other Stories",
    author: "Multiple Authors",
    category: "Best African Series",
    ageRange: "Ages 14–15",
    synopsis: "See the world from an insider's point of view. In Deception, feel the thrill of online gambling with Amadi as he seeks to finance the soft life he desires. In Where Pumpkin Leaves Dwell, experience the life of a young girl left in the village with her grandparents when her mother leaves for school in the city. In #Good Times Ahead, find out if a lifelong friendship can survive online trolling and social class differences. See how a coastal community grapples with the wrath of an ancient sea god in The God of the Sea. These and more are the thought-provoking, terrifying and intriguing stories you will interact with in this outstanding collection.",
    coverImage: "public/BookCovers/Deception mock-up 1.png",
    featured: true
  },
  {
    id: "zero-tolerance",
    title: "Zero Tolerance and Other Stories",
    author: "Multiple Authors",
    category: "Best African Series",
    ageRange: "Ages 14–15",
    synopsis: "In a world that demands Zero Tolerance for injustice, these powerful African stories illuminate paths of resistance and hope. From the darkened depths of a sunless world to the bright halls of an elite school, the anthology explores corruption, identity, and the courage to stand up for what's right.",
    coverImage: '/BookCovers/Zero Tolerance mock-up 1.png',
    
  },
  {
    id: "fire-within",
    title: "A Fire Within and Other Stories",
    author: "Multiple Authors",
    category: "Best African Series",
    ageRange: "Ages 14–15",
    synopsis: "A Fire Within and Other Stories is an anthology of short stories, written by award-winning authors from across Africa, to highlight or address the African continent's social and political issues.",
    coverImage: '/BookCovers/A Fire Within mock-up 1.png'
  }
];

export const categories = [
  "All Books",
  "RedHot Picture Books (< 8yrs)",
  "SUDEF ( 9-12 yrs )",
  "Shizu ( 10 - 14 yrs )",
  "Best African Series (13+ yrs )", 
  
];

export const getFeaturedBooks = () => books.filter(book => book.featured);
export const getBooksByCategory = (category: string) =>
  category === "All Books" ? books : books.filter(book => book.category === category);
export const getBookById = (id: string) => books.find(book => book.id === id);

export const getBooksByAge = (ageRange: string) => 
  ageRange === "All Ages"
    ? books
    : books.filter(book => book.ageRange.includes(ageRange.split(" ")[1])); 

