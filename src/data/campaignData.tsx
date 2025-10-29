import { Leaf, Shield, PenTool, Heart, Mic, Trophy, Star, Book, DollarSign } from 'lucide-react';
import React from 'react';

export interface Campaign {
  id: number;
  title: string;
  description: string;
  impact: string;
  image?: string;
  featured: boolean;
  icon: React.FC<any>;
  color: string;
  goal?: string;
  learnMore?: JSX.Element[];
  getInvolved?: JSX.Element[];
}

export const campaigns: Campaign[] = [
  {
    id: 1,
    title: "The Wild Legacy Campaign",
    description: "Support the creation and distribution of children's books celebrating Africa's rich wildlife heritage.",
    impact: "700 books distributed • 10 communities engaged • 400 children inspired",
    image: "/Latest/wild-legacy.png",
    featured: true,
    icon: Leaf,
    color: "bg-gradient-forest",
    learnMore: [
      <div className="mb-4 p-4 bg-white/10  shadow-md border-l-4 border-yellow-500 text-white">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">About the Campaign</h3>
        <p>
          Co-led by Storymoja and Start a Library Trust, the Wild Legacy campaign seeks to reach one million children in Kenya through culturally relevant wildlife-themed books, teacher trainings, school book clubs, and immersive experiences.
        </p>
      </div>,
      <div className="mb-4 p-4 bg-white/10  shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">2026 Goals</h3>
        <p className=' text-white'>
          Distribute 200,000 books, train 3,000 teachers, engage 500,000 students in wildlife-themed competitions, and rally a million readers in a Guinness World Record read-aloud from <a href="https://redhotafrica.net/book/boy-and-lion" target="_blank" className="underline text-blue-500">The Boy and The Lion</a>.
        </p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">Mission</h3>
        <p className=' text-white'>
          Empower children to see themselves as protectors, storytellers, and stewards of Africa’s ecological future.
        </p>
      </div>
    ],
    getInvolved: [
      <div className="mb-4 p-4 bg-white/10 border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Support the Books</h3>
        <p className=' text-white'>Purchase or donate SUDEF Wildlife Detective Series, The Matatu from Watamu, The Boy & the Lion, The Forever Tree, and My Amazing Rhino to schools.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 rounded-lg shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Volunteer</h3>
        <p className=' text-white'>Become a Reading Ambassador: <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0-JhcnZclgWPVQf3ReEYhSvTz0OI20xf8ecsd4W4zDllxoQ/viewform" target="_blank" className="underline text-blue-500">Sign up here</a>.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 rounded-lg shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Join the Record Attempt</h3>
        <p className=' text-white'>Support Kenyan Children in the World Record Read-Aloud: <a href="#" className="underline text-blue-500">Link coming soon</a>.</p>
      </div>
    ]
  },

  {
    id: 2,
    title: "Online Safety Campaign",
    description: "Empowering young readers with knowledge to navigate the digital world safely through engaging stories and interactive workshops.",
    impact: "2,750 children trained • 50 schools involved • 100 parent sessions held",
    featured: true,
    icon: Shield,
    color: "bg-gradient-sky",
    learnMore: [
      <div className="mb-4 p-4 bg-white/10  shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">The Online Safety Code</h3>
        <p className=' text-white'>
          Kenyan schools and young readers learn to take charge of their digital wellbeing through book clubs, guided research, and creating their own Online Safety Codes.
        </p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Impact Goals</h3>
        <p className=' text-white'>
          By 2025, reach 120 schools, train 1,260 teachers, and cultivate 20,000 student “digital champions,” celebrating top projects at the Nairobi International Book Fair.
        </p>
      </div>
    ],
    getInvolved: [
      <div className="mb-4 p-4 bg-white/10 shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Start with the Stories</h3>
        <p className='text-white'>Explore #GoodTimesAhead, Deception, and Scars. Pick up <a href="#" className="underline text-blue-500">Deception and Other Stories</a>.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10  shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Take Action</h3>
        <p className=' text-white'>Create your own mini-campaign showcasing online safety lessons and share on social media.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10  shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Amplify Impact</h3>
        <p className=' text-white'>Tag Redhot Africa to share your campaign and contribute to a safer online community.</p>
      </div>
    ]
  },

  {
    id: 3,
    title: "Writers, Editors & Redhot Experiences",
    description: "Together, our Writers, Editors and Redhot Experiences programmes build the creative and commercial firepower behind every Redhot campaign.",
    impact: "Training dozens of writers and editors • Multiple books edited and published • Countless live activations delivered",
    featured: true,
    icon: PenTool,
    color: "bg-gradient-dawn",
    goal: "Equip writers, editors, and activation teams with skills to create and promote high-quality African stories",
    learnMore: [
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Writer Training</h3>
        <p className='text-white'>Learn storytelling fundamentals, narrative techniques, and how to craft compelling African stories through hands-on workshops.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Editing Bootcamp</h3>
        <p className='text-white'>Master all five types of editing (developmental, copy, proofreading, etc.) and learn to provide high-quality feedback for manuscripts.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Redhot Experiences</h3>
        <p className='text-white'>Participate in live-event activations, book fairs, and school outreach, learning event planning and amplification on social media.</p>
      </div>
    ],
    getInvolved: [
      <div className="mb-4 p-4 bg-white/10 border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Support Creatives</h3>
        <p className='text-white'>Your donations help train writers, editors, and event teams, bringing African stories to more children.</p>
      </div>
    ]
  },

  {
    id: 4,
    title: "Storymoja’s Quest to Publish Children",
    description: "This annual writing competition turns young writers into published authors! Kids sharpen their writing, improve language skills, see winning stories printed in English and Kiswahili anthologies, and even earn royalties. CHILDREN'S VOICES MATTER.",
    impact: "+600 Children Published • +2000 participating schools to date • +8000 Submissions",
    featured: true,
    icon: Book,
    color: "bg-gradient-blaze",
    learnMore: [
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Competition Overview</h3>
        <p className='text-white'>National writing competition nurturing creativity and confidence in young writers, publishing winning stories in anthologies.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Editors & Experiences</h3>
        <p className='text-white'>Bootcamps for editors and activations for Redhot Experiences ensure stories are polished and reach communities effectively.</p>
      </div>
    ],
    getInvolved: [
      <div className="mb-4 p-4 bg-white/10 shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Explore Resources</h3>
        <p className='text-white'>Purchase African Wildlife books and donate to schools to inspire children: <a href="#" className="underline text-blue-500">Link coming soon</a>.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Support the Cause</h3>
        <p className='text-white'>Contribute to training more creatives, hosting activations, and publishing inspiring stories.</p>
      </div>
    ]
  },

  {
    id: 5,
    title: "Storymoja Read Aloud",
    description: "Start a Library (SAL) sits at the heart of the National Read Aloud initiative, bringing learners together across Kenya through books and storytelling.",
    impact: "144,392 learners from 863 schools • 1,916 Reading Ambassadors • 45 counties reached • 312 libraries built • 3,000+ teacher-librarians trained • 50+ active life-skills book clubs",
    featured: true,
    icon: Mic,
    color: "bg-gradient-horizon",
    goal: "Host 100 read-aloud sessions in communities",
    learnMore: [
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">SAL Overview</h3>
        <p className='text-white'>
          Start a Library (SAL) has united 144,392 learners across 863 schools through books and storytelling. With 312 libraries built and 3,000+ teacher-librarians trained, SAL ignites a nationwide reading revolution.
        </p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">2025 Guinness World Record</h3>
        <p className='text-white'>
          SAL is aiming to set a Guinness World Record for the largest read-aloud group, featuring <strong>The Boy & The Lion</strong>. This initiative celebrates African stories and community engagement.
        </p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Join the Movement</h3>
        <p className='text-white'>
          Whether a lifelong reader or first-time volunteer, you can help amplify African stories and empower children across Kenya.
        </p>
      </div>
    ],
    getInvolved: [
      <div className="mb-4 p-4 bg-white/10 shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Register Your Interest</h3>
        <p className='text-white'>Sign up to participate in read-aloud sessions, receive updates on locations, and learn what to bring.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Spread the Word</h3>
        <p className='text-white'>Share the challenge with friends, family, and fellow book lovers to maximize participation.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Volunteer</h3>
        <p className='text-white'>Assist with coordinating reading groups, managing logistics, and creating a welcoming environment for participants.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Get Involved</h3>
        <p className='text-white'>If you believe in the power of stories, join us in breaking records and inspiring children nationwide. Google Form to be generated – link coming soon.</p>
      </div>
    ]
  },

  {
    id: 7,
    title: "Become A Reading Ambassador",
    description: "Start A Library (SAL)’s Reading Ambassadors are volunteers from diverse professions who inspire children to develop a love of books and stories.",
    impact: "150 ambassadors recruited • 25 schools involved • 1,000 books read",
    featured: false,
    icon: Star,
    color: "bg-gradient-magic",
    goal: "Recruit 500 reading ambassadors",
    learnMore: [
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Who They Are</h3>
        <p className='text-white'>SAL Reading Ambassadors are passionate volunteers from all walks of life, inspiring children with storytelling and mentorship.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">What They Do</h3>
        <p className='text-white'>Ambassadors participate in National Read Aloud events, school visits, and book club activities to promote literacy and critical thinking.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Impact</h3>
        <p className='text-white'>Through volunteer efforts, ambassadors boost reading enthusiasm and foster a culture of literacy in communities nationwide.</p>
      </div>
    ],
    getInvolved: [
      <div className="mb-4 p-4 bg-white/10 shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Join the Ambassadors</h3>
        <p className='text-white'>Read aloud, mentor children, and lead book club activities to ignite a passion for reading in young learners.</p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-sm border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Sign Up</h3>
        <p className='text-white'>Click <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0-JhcnZclgWPVQf3ReEYhSvTz0OI20xf8ecsd4W4zDllxoQ/viewform" target="_blank" className="underline text-blue-500">Become a Reading Ambassador</a> to join a network of literacy champions.</p>
      </div>
    ]
  },

    {
    id: 8,
    title: "Start A Library",
    description: "Start a Library (SAL) is a Kenyan charitable trust devoted to transforming literacy access for children across the country.",
    impact: "312 libraries established • +500 children nurtured into confident readers • +3,000 teacher-librarians trained • 50 active life-skills book clubs",
    featured: false,
    icon: Book,
    color: "bg-gradient-sunset",
    goal: "Build 20 new community libraries",
    learnMore: [
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Mission</h3>
        <p className="text-white">
          SAL transforms schools and communities by making books and libraries accessible, nurturing reading habits, and developing critical life skills in children.
        </p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">What We Do</h3>
        <p className="text-white">
          We establish vibrant libraries, provide curated books, and train teacher-librarians to sustain reading culture. Life-skills book clubs encourage discussion and reflection.
        </p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold mb-2 text-yellow-500">Impact</h3>
        <p className="text-white">
          From 312 libraries to 50 active life-skills book clubs, SAL has empowered thousands of children to grow into curious, confident, and critical thinkers.
        </p>
      </div>
    ],
    getInvolved: [
      <div className="mb-4 p-4 bg-white/10 border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Donate Books</h3>
        <p className="text-white">
          Support children by donating African stories or educational books that fuel curiosity and imagination.
        </p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Fund a Library</h3>
        <p className="text-white">
          Help us establish new libraries in underserved schools and communities. Every contribution builds a world of opportunities for children.
        </p>
      </div>,
      <div className="mb-4 p-4 bg-white/10 border-l-4 border-yellow-500">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Volunteer</h3>
        <p className="text-white">
          Share your time as a Reading Ambassador, library organizer, or literacy mentor. Together, we can shape brighter futures.
        </p>
      </div>
    ]
  },
]