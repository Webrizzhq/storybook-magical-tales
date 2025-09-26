import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.knowledgeEntry.deleteMany(); // Reset for fresh seed

  const entries = [
    // HISTORY SECTION (~12 entries)
    {
      section: 'History',
      title: 'Founded (August 2007)',
      contentType: 'text',
      content: { text: 'Storymoja Africa was established in August 2007 by a collective of five passionate writers: Muthoni Garland, Dayo Foster, Parselelo Kantai, Martin Kimani Mbugua, and Ivy Mwai. The company launched with an ambitious mission to publish contemporary East African writing of world-class standard and to "get a book in every hand" to improve literacy and numeracy levels across the region.' },
      keywords: ['founded', '2007', 'founders', 'muthoni garland', 'mission', 'literacy'],
      sources: ['Storymoja About', 'StoryMoja Publishers - eKitabublog', 'Parents Africa'],
    },
    {
      section: 'History',
      title: 'Early Years and Initial Challenges (2007-2008)',
      contentType: 'text',
      content: { text: 'The company launched its first books in 2007 but quickly encountered significant financial difficulties. The founders faced severe losses from publishing adult literature, with thousands of copies of titles like "Tracking the Scent of My Mother" remaining unsold due to low market receptiveness. These early losses nearly bankrupted the company, forcing a strategic pivot to children\'s books and curriculum materials.' },
      keywords: ['early years', 'challenges', '2007', '2008', 'financial', 'pivot'],
      sources: ['National Centre for Writing', 'About Storymoja Publishers'],
    },
    {
      section: 'History',
      title: 'Festival Foundation and Growth (2008-2014)',
      contentType: 'timeline',
      content: { events: [{ year: '2008', desc: 'Launched Storymania book clubs and Storymoja Nyama Choma Storytelling Festival.' }, { year: '2009-2014', desc: 'Partnered with Hay Festival, attracting over 5,000 attendees.' }] },
      keywords: ['festival', 'growth', '2008', 'hay festival'],
      sources: ['Storymoja Festival History', '#KeFestival: Storymoja Festival'],
    },
    {
      section: 'History',
      title: 'Start A Library Initiative (2012)',
      contentType: 'text',
      content: { text: 'In 2012, Storymoja launched the "Start a Library" campaign as an employee initiative to install libraries in primary schools. What began as an internal project would eventually grow into something much larger, demonstrating the company\'s commitment to literacy beyond publishing.' },
      keywords: ['start a library', '2012', 'initiative', 'literacy'],
      sources: ['About Storymoja Publishers', 'Start A Library Trust'],
    },
    {
      section: 'History',
      title: 'Crisis and Resilience (2013)',
      contentType: 'text',
      content: { text: 'The company faced a major crisis when the 2013 Westgate Mall terror attack in Nairobi disrupted the Storymoja Hay Festival. The attack tragically claimed the life of a key festival guest, Professor Kofi Awoonor, a renowned Ghanaian poet and academic. This devastating event marked a significant turning point for the festival and the organisation.' },
      keywords: ['crisis', '2013', 'westgate', 'kofi awoonor'],
      sources: ['Storymoja Festival History'],
    },
    {
      section: 'History',
      title: 'Independence and International Recognition (2014-2016)',
      contentType: 'text',
      content: { text: 'Following the Westgate tragedy, Storymoja ended its partnership with the Hay Festival in 2014, with the event reverting to "The Storymoja Festival" under independent management. In a poignant tribute to Professor Awoonor, the 2016 festival was held in Accra, Ghana, honouring his memory and demonstrating the pan-African spirit of the organisation.' },
      keywords: ['independence', '2014', '2016', 'ghana'],
      sources: ['Storymoja Festival History'],
    },
    {
      section: 'History',
      title: 'Record-Breaking Achievement (2015)',
      contentType: 'text',
      content: { text: 'Storymoja achieved international recognition in June 2015 when their "National Read Aloud" campaign unofficially broke the world record for the most people reading the same text simultaneously. The campaign engaged 229,043 children from 1,097 schools across Kenya, marking a significant milestone in their literacy advocacy efforts.' },
      keywords: ['record', '2015', 'read aloud', 'achievement'],
      sources: ['Safaricom Foundation Partnership', 'The Storymoja Read Aloud'],
    },
    {
      section: 'History',
      title: 'Institutional Recognition and Curriculum Success',
      contentType: 'text',
      content: { text: 'The company gained formal recognition when the Kenya Institute of Curriculum Development (KICD) approved several Storymoja titles, including the play "Kigogo," which became a setbook for Kenyan secondary schools. The Ministry of Education also formally recognised Storymoja as a literacy partner, cementing its role in Kenya\'s educational landscape.' },
      keywords: ['recognition', 'curriculum', 'kicd', 'kigogo'],
      sources: ['About Storymoja Publishers', 'FAQs - Start a Library Trust'],
    },
    {
      section: 'History',
      title: 'Digital Innovation and Pandemic Response (2021)',
      contentType: 'text',
      content: { text: 'The COVID-19 pandemic presented new challenges as school closures threatened the business model and writers\' earnings. Storymoja responded by developing interactive literacy and life-skill e-content in 2021, exploring new formats including audiobooks and learning applications to adapt to the changing educational landscape.' },
      keywords: ['digital', '2021', 'pandemic', 'covid'],
      sources: ['National Centre for Writing'],
    },
    {
      section: 'History',
      title: 'Independence of Start A Library (2021-2022)',
      contentType: 'text',
      content: { text: 'The Start A Library initiative achieved full independence, transitioning from a Storymoja project to a registered national charitable trust in Kenya in 2021-2022. By this time, it had established over 311 libraries across 24 counties, impacting more than half a million children nationwide.' },
      keywords: ['independence', '2021', '2022', 'start a library'],
      sources: ['Start A Library Trust - Virtual Internships'],
    },
    {
      section: 'History',
      title: 'Premium Imprint Launch (2024)',
      contentType: 'text',
      content: { text: 'Storymoja launched its "Redhot Africa" imprint in 2024, positioning it as the "gold standard" premium imprint for curated African children\'s books and storytelling experiences. This development marked the company\'s continued evolution and commitment to high-quality African literature.' },
      keywords: ['redhot', '2024', 'imprint', 'launch'],
      sources: ['Storymoja Redhot Africa'],
    },
    {
      section: 'History',
      title: 'Recent Literary Recognition (2024)',
      contentType: 'text',
      content: { text: 'The company\'s commitment to quality was validated when Storymoja authors won the 2024 Jomo Kenyatta Prize for Literature, representing a significant achievement in African literary recognition.' },
      keywords: ['recognition', '2024', 'jomo kenyatta prize'],
      sources: ['2024 Jomo Kenyatta Prize Coverage'],
    },

    // PRODUCTS AND SERVICES SECTION (~9 entries)
    {
      section: 'Products and Services',
      title: 'Core Book Categories',
      contentType: 'list',
      content: { items: ['Children\'s fiction', 'Textbooks', 'Revision books', 'Reading trackers', 'Workbooks', 'Activity books', 'Career resources'] },
      keywords: ['books', 'categories', 'publishing', 'children'],
      sources: ['About Storymoja Publishers', 'Profile of Storymoja - WordPress'],
    },
    {
      section: 'Products and Services',
      title: 'Imprints Structure',
      contentType: 'list',
      content: { items: ['Storymoja: Main imprint for adult titles and general publications', 'Storyhippo: Dedicated children\'s book imprint with African stories', 'Redhot Africa: Launched 2024 as premium imprint for curated children\'s books'] },
      keywords: ['imprints', 'storymoja', 'storyhippo', 'redhot'],
      sources: ['About Storymoja Publishers', 'Redhot Africa e-store', 'Profile of Storymoja'],
    },
    {
      section: 'Products and Services',
      title: 'Curriculum-Approved Materials',
      contentType: 'text',
      content: { text: 'Storymoja provides curriculum-aligned materials, including titles like "Kigogo" approved by the Kenya Institute of Curriculum Development (KICD) for CBC and secondary school setbooks.' },
      keywords: ['curriculum', 'kicd', 'cbc', 'kigogo'],
      sources: ['About Storymoja Publishers', 'FAQs - Start a Library Trust'],
    },
    {
      section: 'Products and Services',
      title: 'Literary Festivals and Events',
      contentType: 'text',
      content: { text: 'The Storymoja Festival, Africa\'s largest book event, features storytelling, panel discussions, and workshops, attracting thousands annually.' },
      keywords: ['festival', 'events', 'storytelling'],
      sources: ['Storymoja Festival', 'Profile of Storymoja'],
    },
    {
      section: 'Products and Services',
      title: 'Literacy Campaigns',
      contentType: 'text',
      content: { text: 'The National Read Aloud campaign engaged 229,043 children in 2015, unofficially breaking the world record for simultaneous reading.' },
      keywords: ['campaigns', 'read aloud', '2015'],
      sources: ['Storymoja Publishers', 'Safaricom Foundation'],
    },
    {
      section: 'Products and Services',
      title: 'Writing and Professional Development',
      contentType: 'text',
      content: { text: 'Offers workshops, masterclasses, and the Storymoja Quest competition to nurture young writers.' },
      keywords: ['writing', 'workshops', 'quest'],
      sources: ['Creative Writing Master Classes', 'Storymoja Publishers'],
    },
    {
      section: 'Products and Services',
      title: 'Start A Library Initiative',
      contentType: 'text',
      content: { text: 'Established 311 libraries across 24 counties, training librarians and impacting over 500,000 children.' },
      keywords: ['start a library', 'libraries', 'schools'],
      sources: ['Start A Library Trust'],
    },
    {
      section: 'Products and Services',
      title: 'Digital and Modern Offerings',
      contentType: 'text',
      content: { text: 'Includes interactive e-content, audiobooks, and digital anthologies for teens, developed in response to educational shifts.' },
      keywords: ['digital', 'e-content', 'audiobooks'],
      sources: ['About Storymoja Publishers', 'Submission Guidelines'],
    },
    {
      section: 'Products and Services',
      title: 'Access and Distribution',
      contentType: 'text',
      content: { text: 'Features an e-store with M-Pesa/Visa payments, physical stores in Nairobi, and third-party distribution via Text Book Centre.' },
      keywords: ['distribution', 'e-store', 'mpesa'],
      sources: ['Storymoja E-store', 'Text Book Centre'],
    },

    // REVIEWS SECTION (~6 entries)
    {
      section: 'Reviews',
      title: 'Children\'s Books Reception - Critical Acclaim',
      contentType: 'text',
      content: { text: 'Storymoja\'s children\'s books receive strong praise for authentic African storytelling, cultural relevance, and vibrant illustrations, with educators noting their life skills integration.' },
      keywords: ['reviews', 'children', 'acclaim', 'cultural'],
      sources: ['Storymoja Website', 'BookshyBooks Review'],
    },
    {
      section: 'Reviews',
      title: 'Educator Testimonials',
      contentType: 'text',
      content: { text: '"Kigogo captures Kenyan high-school life; students love it," noted a teacher on Goodreads 2023.' },
      keywords: ['testimonials', 'educators', 'kigogo'],
      sources: ['Goodreads 2023', 'Educational Blogs'],
    },
    {
      section: 'Reviews',
      title: 'Distribution Challenges',
      contentType: 'text',
      content: { text: 'Positive content marred by delays outside urban Kenya; growing demand for digital access noted in 2024 reviews.' },
      keywords: ['challenges', 'distribution', 'digital'],
      sources: ['Amazon.co.uk Jan 2024', 'Instagram Storymoja'],
    },
    {
      section: 'Reviews',
      title: 'Festival Reception',
      contentType: 'text',
      content: { text: '"A literary hug... electric & cozy vibe," per Take-Your-Backpack, with transformative experiences highlighted.' },
      keywords: ['festival', 'reception'],
      sources: ['Take-Your-Backpack', 'Festival testimonials'],
    },
    {
      section: 'Reviews',
      title: 'School Programmes and Community Impact',
      contentType: 'text',
      content: { text: '105 libraries have impacted 100,000 children, praised for innovative adoption models.' },
      keywords: ['school', 'impact', 'libraries'],
      sources: ['Storymoja blog', 'Start A Library'],
    },
    {
      section: 'Reviews',
      title: 'Social Media Sentiment',
      contentType: 'text',
      content: { text: 'Enthusiastic feedback on literacy programs and book launches; "Goosebumps from 229,000 kids reading!" on Twitter 2024.' },
      keywords: ['social media', 'sentiment', '2024'],
      sources: ['Twitter #StorymojaFest 2024', 'Instagram @storymojaafrica'],
    },

    // MEDIA COVERAGE SECTION (~5 entries)
    {
      section: 'Media Coverage',
      title: 'National and International Acknowledgement',
      contentType: 'text',
      content: { text: 'Covered by Daily Nation, Business Daily, and PBS NewsHour (2014): "Celebration of books amid tragedy".' },
      keywords: ['media', 'national', 'pbs', '2014'],
      sources: ['PBS NewsHour Oct 16, 2014', 'Business Daily', 'Storymoja About'],
    },
    {
      section: 'Media Coverage',
      title: 'Festival Coverage Evolution',
      contentType: 'text',
      content: { text: 'From Hay partnership (2009) to independent "Black Peace" 10th anniversary theme (2017).' },
      keywords: ['festival', 'coverage', 'hay'],
      sources: ['The Bookseller 2009', 'The EastAfrican 2017'],
    },
    {
      section: 'Media Coverage',
      title: 'Awards and Achievement Recognition',
      contentType: 'text',
      content: { text: 'Read Aloud record by AFP/BBC; "Kigogo" as KICD setbook noted in The Standard.' },
      keywords: ['awards', 'record', 'kigogo'],
      sources: ['AFP 2015', 'BBC 2015', 'The Standard 2017'],
    },
    {
      section: 'Media Coverage',
      title: 'Partnership and Collaboration Coverage',
      contentType: 'text',
      content: { text: 'MoUs with counties and Safaricom; CBC distribution with Kenya Literature Bureau.' },
      keywords: ['partnerships', 'collaborations', 'cbc'],
      sources: ['County Government Makueni 2016', 'KLB 2018'],
    },
    {
      section: 'Media Coverage',
      title: 'Leadership and Thought Leadership',
      contentType: 'text',
      content: { text: 'CEO Muthoni Garland\'s op-eds; Muhiddin Ngashe on Redhot as "gold-standard".' },
      keywords: ['leadership', 'ceo', 'redhot'],
      sources: ['Daily Nation 2019', 'Nation FM 2023'],
    },

    // CRISES AND CONTROVERSIES SECTION (~6 entries)
    {
      section: 'Crises and Controversies',
      title: 'Near-Bankruptcy and Business Pivot (2009-2011)',
      contentType: 'text',
      content: { text: 'Poor sales of adult fiction led to layoffs and a pivot to children\'s books after creditors seized stock.' },
      keywords: ['bankruptcy', '2009', 'pivot', 'layoffs'],
      sources: ['National Centre for Writing case-study, 2024'],
    },
    {
      section: 'Crises and Controversies',
      title: 'COVID-19 Financial Impact (2020-2021)',
      contentType: 'text',
      content: { text: 'School closures halted royalties, costing KES 14M; shifted to digital solutions.' },
      keywords: ['covid', '2020', 'financial', 'digital'],
      sources: ['Storymoja e-newsletter 2021'],
    },
    {
      section: 'Crises and Controversies',
      title: 'Nationwide Book Recall (September 2019)',
      contentType: 'text',
      content: { text: 'Children\'s reader recalled for f-word after parent complaints; reissued sanitized.' },
      keywords: ['recall', '2019', 'profanity'],
      sources: ['The Standard 2019'],
    },
    {
      section: 'Crises and Controversies',
      title: 'Blood Ties Controversy (November 2019)',
      contentType: 'text',
      content: { text: 'YA novel "Blood Ties" pulled for graphic content; revised edition supplied.' },
      keywords: ['controversy', 'blood ties', '2019'],
      sources: ['WritingAfrica.com 2019'],
    },
    {
      section: 'Crises and Controversies',
      title: 'Westgate Mall Terror Attack (2013)',
      contentType: 'text',
      content: { text: 'Festival evacuated; guest Kofi Awoonor killed, prompting security enhancements.' },
      keywords: ['westgate', '2013', 'terror', 'kofi awoonor'],
      sources: ['PBS NewsHour 2014'],
    },
    {
      section: 'Crises and Controversies',
      title: 'Royalty Payment Disputes (2020-2021)',
      contentType: 'text',
      content: { text: 'Authors demanded transparency; resolved with audited sales reports.' },
      keywords: ['royalties', 'disputes', '2020'],
      sources: ['Kombani Twitter 2021', 'Sunday Nation 2023'],
    },

    // POLICIES SECTION (~6 entries)
    {
      section: 'Policies',
      title: 'Refunds and Returns Policy',
      contentType: 'text',
      content: { text: '7-day return window for errors/non-delivery; KSh 100 fee for cards, excludes shipping costs.' },
      keywords: ['refunds', 'returns', 'policy'],
      sources: ['Storymoja Terms & Conditions'],
    },
    {
      section: 'Policies',
      title: 'Privacy and Data Protection',
      contentType: 'text',
      content: { text: 'Collects name, email, IP; used for services with consent, stored in Google Workspace.' },
      keywords: ['privacy', 'data', 'consent'],
      sources: ['Privacy Policy - Storymoja'],
    },
    {
      section: 'Policies',
      title: 'Delivery and Access Arrangements',
      contentType: 'text',
      content: { text: 'KSh 250 Nairobi delivery, free over KSh 1,999; Posta collection up-country.' },
      keywords: ['delivery', 'shipping', 'access'],
      sources: ['Terms & Conditions - Storymoja'],
    },
    {
      section: 'Policies',
      title: 'Compliance and Educational Standards',
      contentType: 'text',
      content: { text: 'KICD-approved titles; no profanity post-2019; authors retain copyright with 10% royalties.' },
      keywords: ['compliance', 'kicd', 'standards'],
      sources: ['About Storymoja Publishers', 'Submission Guidelines'],
    },
    {
      section: 'Policies',
      title: 'Author Remuneration',
      contentType: 'text',
      content: { text: 'KSh 1/word flat or 10% net royalties; access to print notes for transparency.' },
      keywords: ['authors', 'royalties', 'remuneration'],
      sources: ['Storymoja Call for Fiction Submissions'],
    },
    {
      section: 'Policies',
      title: 'Legal Jurisdiction',
      contentType: 'text',
      content: { text: 'Disputes governed by Kenyan courts; includes force majeure clause.' },
      keywords: ['legal', 'jurisdiction', 'courts'],
      sources: ['Storymoja Terms & Conditions'],
    },

    // CONTACT SECTION (~3 entries)
    {
      section: 'Contact',
      title: 'Primary Contact Details',
      contentType: 'text',
      content: { text: 'Njamba House, Shanzu Road, off Lower Kabete Road, Westlands, Nairobi, Kenya. Postal: P.O. Box 264 – 00606, Nairobi (Sarit Centre post office). Phones: +254 733 838 161 / +254 20 208 9595.' },
      keywords: ['contact', 'office', 'nairobi', 'phone'],
      sources: ['Storymoja Contact', 'WordPress contact page'],
    },
    {
      section: 'Contact',
      title: 'Email Communication Channels',
      contentType: 'list',
      content: { items: ['info@storymojaafrica.co.ke (general inquiries)', 'orders@storymojaafrica.co.ke (sales)', 'submissions@storymojaafrica.co.ke (manuscripts)', 'bookclub@storymojaafrica.co.ke (book club)'] },
      keywords: ['email', 'inquiries', 'submissions'],
      sources: ['Storymoja website'],
    },
    {
      section: 'Contact',
      title: 'Social Media and Start A Library',
      contentType: 'text',
      content: { text: 'Follow @storymojaafrica on Facebook, Instagram, Twitter. Start A Library: info@startalibrary.org, +254 716 033 433.' },
      keywords: ['social media', 'start a library', 'contact'],
      sources: ['Website footer', 'Start A Library Contact'],
    },
  ];

  await prisma.knowledgeEntry.createMany({ data: entries });
  console.log(`Seeded ${entries.length} entries successfully at ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });