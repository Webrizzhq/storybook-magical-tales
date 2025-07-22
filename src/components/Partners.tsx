import React from 'react';

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { name: 'Kenya Education Network', logo: 'https://www.kenet.or.ke/sites/default/files/kenelogomedium.png' },
  { name: 'Uganda Book Trust', logo: 'https://www.africa2trust.com/WBA/Logos/NABOTU2353193252.gif' },
  { name: 'African Library Association', logo: 'http://web.aflia.net/wp-content/uploads/2019/05/logo-regular.png' },
  { name: 'UNICEF East Africa', logo: 'https://www.unicef.org/esa/sites/unicef.org.esa/files/styles/logo/public/English.png.webp?itok=myZBce_T' },
  { name: 'British Council Kenya', logo: 'https://opportunities-insight.britishcouncil.org/themes/custom/cari/logo.png' },
  { name: 'Goethe Institut', logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAY1BMVEWgyBT///+WwwCXwwCcxgDp8tD8/ffV5qbB2nn///3q89Ojyh3x9+H3+u2+2XHs9Ne712jY6K2u0EXE3ICrzjzg7L3H3ofP4pjj7sSx0U6lyye31WCpzTX1+ejL4JDd67i11Fgd1fMTAAADfElEQVRIieVW2YKqOhCk001AWQJRFlGW///KUwmoIOr4fG8/jM5MKtVrdYLgf2wC+/b7BxAHl7yunyclKYYh775DhW2UEkzzA1aRt/b2GSpy6nEkrZo6X07JFZeU9anMiOJPSM7x3zBOFGwhlImoEW8DUfEWKUFINHbMSVyGqZnPiKb4fge43wHloim1SmLjI+r9cdCM92ADjijaI6Ugitg7m0VFt6SfU7o9zySU7YAOl6sEzrYXxRzYy3xkYV4oDXU7PxE5W029ZTWN/b0cNwpXHFKRfWXUlPPVO1v4grSlB3RkVozS0nkL45YiZYlOLHA2zOVeDtF6zZgdtjEiwJQTDdzZOav4VpczI5x7Vh31CF+AGVkOQXo+UAlnzaPlxNKTUnq6bns/pkrlLn+aGuWcNc20VEFGSufSiByp5TXOF4szuoC0VDdNxiolyf3WkPSAsnY1+uOlimc6cozbHClaLGJVhIdH/SRyjmv8GF9w+M8Jpb0oF+kRkSaIUbfP0LrIaJ2Wu6mCpwk6RCFniNRwkpG5bCZeGNP9pr8BikFUoXdSOqsUmf1bKHzGK1UChOoiWtxx5L9Rga9+o0LqXHcNVCtD51/4AKzppNID2rxSI1nZzMNXYEOxyjT6qUQhkzO1m7yI08bVx49AIa1OCKUnn4p2PVZfXe2QrQFlxsUTEr8Zq31yrKwubdxpoRTEgzpSsgLuyhE+KNGACbwF26giujridXp2DRDxMg8Gfx7Q+SX0ISXn+Bq4azntW44FigfyA0gPJB1mPd/K49LkdtPk2dFgIDDVBlE2+NLgs6Jp4+ocWas2Y4UBqSDPBm50BNI52reDbF8GmRXnGlFJSgPyPaqayhfJWaRDPaVjmG7nIsq8Xh5BmjjSbC/Hd7GyXqzylBZrrQoMFIMX0tful3wlj+ksj1UVxYHi+EBGuEJ6XaTBqz0EWQV3QXYrsqt77+yIZQPS+t24PVdAPq+AcWzdl9AyZFEnaOPw3bg9lk5qmacxm0NMoxsy65xFw+033Ix8rjkUgxM7TTbAlwKJioRL0p9eHavF2vvFKnKLR3SPsW4TZZ9fKy+r3EswHdqJXRuY4IsObR8PfZ+G0VUQsaF3q39j6+fKXJDbgBjN37L3fCCd4riOWpfd8PrDO271JPN2ODbJT6o+s/pHYDOcCvt2Y3wHy08vzf+y/QNSSjJawhQlnAAAAABJRU5ErkJggg==' },
];

const Partners: React.FC = () => {
  return (
    <section className="relative py-16 pb-40 bg-gradient-to-br from-orange-50 via-pink-50 to-amber-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brown-800">
          Our <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Partners</span>
        </h2>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          Working together to promote African literature across the continent
        </p>
      </div>

      {/* Auto Scrolling Carousel */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee space-x-16 w-max">
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex flex-col items-center justify-center min-w-[150px]">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain"
              />
              <p className="mt-2 text-sm font-medium text-gray-800">{partner.name}</p>
            </div>
          ))}
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-orange-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-orange-50 to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Partners;
