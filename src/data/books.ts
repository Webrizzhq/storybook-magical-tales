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
    coverImage: "src/assets/princess-njinga.jpg",
    featured: true
  },
  {
    id: "princess-njinga",
    title: "Princess Njinga Bane of the Portuguese",
    author: "Emily Khalayi Wekulo", 
    category: "Shizu Historical Fiction",
    ageRange: "Ages 11–13",
    synopsis: "Twins Lara and Moises time travel back to the 17th century Ndongo kingdom, in the country now known as Angola. The kingdom is under attack. Can Princess Njinga, a fierce warrior leader, protect the kingdom from dangerous Imbangala warriors and powerful Portuguese invaders? Will the twins survive the attacks and make it back home?",
    coverImage: "src/assets/princess-njinga.jpg",
    featured: true
  },
  {
    id: "two-faces-chief-odera",
    title: "Two Faces of Chief Odera",
    author: "Michael Oluoch",
    category: "Shizu Historical Fiction", 
    ageRange: "Ages 11–13",
    synopsis: "When Apiyo and Odongo are zapped back to 1915 Kenya, they encounter the formidable Chief Odera Akang'o, who is pushing his people to adopt what seem to them strange and dangerous ideas. His council of elders lead a rebellion against the radical reforms. As tensions rise and the threat of civil war looms, Apiyo and Odongo find themselves caught in the crossfire.",
    coverImage: "src/assets/princess-njinga.jpg"
  },

  // Wildlife Detective Fiction
  {
    id: "targeted-turtles",
    title: "Case of Targeted Turtles",
    author: "Shaleen Keshavjee-Gulam",
    category: "SUDEF Wildlife Detective Fiction",
    ageRange: "Ages 8–10", 
    synopsis: "Sandeep promises his dying grandfather to protect the eggs of endangered green turtles. Also, someone is poaching the turtles and their eggs are in grave danger. Will Sandeep and his fellow wildlife detectives, Kendi and Lemunyatta, solve the mystery of the disappearing turtles and protect the eggs before they hatch?",
    coverImage: "src/assets/boy-and-lion.jpg",
    featured: true
  },
  {
    id: "persecuted-pangolins",
    title: "Case of Persecuted Pangolins", 
    author: "Muthoni Wa Gichuru",
    category: "SUDEF Wildlife Detective Fiction",
    ageRange: "Ages 8–10",
    synopsis: "Vaati wants to help her father show researchers pangolins near village. But someone is digging up burrows and her father disappears. What can she do? Groundbreaking stories by African writers exploring issues about our wildlife Heritage.",
    coverImage: "src/assets/boy-and-lion.jpg"
  },

  // Picture Books
  {
    id: "matatu-from-watamu",
    title: "Matatu From Watamu",
    author: "Muthoni Muchemi",
    category: "Picture Books",
    ageRange: "Ages 5–7",
    synopsis: "A Rasta driver drives his matatu into the deep blue Indian Ocean. Hoping to make lots of money from shy passengers, he hires an octopus as his tout. When the matatu drives as badly in the sea as it does on land, sea creatures are shocked and outraged. Read along, cheering for or against the Matatu From Watamu.",
    coverImage: "src/assets/matatu-from-watamu.jpg",
    featured: true
  },
  {
    id: "boy-and-lion",
    title: "The Boy and the Lion",
    author: "Mike Saito with Turk Pipkin", 
    category: "Picture Books",
    ageRange: "Ages 5–7",
    synopsis: "Five-year-old Sitoti is lost and alone in the vast Mara far from his Maasai village. As the sun begins to set, a pair of glowing eyes watches him from the tall grass. What happens next will change his life forever.",
    coverImage: "src/assets/boy-and-lion.jpg",
    featured: true
  },

  // Anthologies  
  {
    id: "zero-tolerance",
    title: "Zero Tolerance and Other Stories",
    author: "Multiple Authors",
    category: "Anthologies",
    ageRange: "Ages 14–15",
    synopsis: "In a world that demands Zero Tolerance for injustice, these powerful African stories illuminate paths of resistance and hope. From the darkened depths of a sunless world to the bright halls of an elite school, the anthology explores corruption, identity, and the courage to stand up for what's right.",
    coverImage: "src/assets/zero-tolerance.jpg",
    featured: true
  },
  {
    id: "fire-within",
    title: "A Fire Within and Other Stories",
    author: "Multiple Authors", 
    category: "Anthologies",
    ageRange: "Ages 14–15",
    synopsis: "A Fire Within and Other Stories is an anthology of short stories, written by award-winning authors from across Africa, to highlight or address the African continent's social and political issues, including but not limited to women in leadership, early marriage, corruption, gender violence, poverty, climate change, human rights, mental health, unemployment, cyberbullying, etc.",
    coverImage: "src/assets/zero-tolerance.jpg"
  }
];

export const categories = [
  "All Books",
  "Picture Books", 
  "SUDEF Wildlife Detective Fiction",
  "Shizu Historical Fiction",
  "Anthologies"
];

export const getFeaturedBooks = () => books.filter(book => book.featured);
export const getBooksByCategory = (category: string) => 
  category === "All Books" ? books : books.filter(book => book.category === category);
export const getBookById = (id: string) => books.find(book => book.id === id);