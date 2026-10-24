// 已交付项目卡 —— 全站唯一数据源。
//
// 这些数字原本只写在 /lp/villa-renovation-quote 的页面文件里。solutions 页面也要挂
// 同样的项目卡，如果各自抄一份，两处迟早会漂移(引擎常量就吃过这个亏)，所以抽到这里，
// 落地页改为从本文件读取。改数字只改这一处。
//
// 口径不得擅自改动:面积、房数、档位、交付周数都是已公开在线上的实测数据。

export type ProjectCard = {
  slug: string;
  title: string;
  /** 规格行,例如 "4-bed · Premium · 487 m²" */
  meta: string;
  body: string;
  img: string;
  alt: string;
};

export const projectCards: ProjectCard[] = [
  {
    slug: "east-legon-villa",
    title: "East Legon Villa",
    meta: "4-bed · Premium · 487 m²",
    body: "Marble-look porcelain feature wall, custom kitchen with Italian millwork, brass linear pendant in stairwell. Delivered in 14 weeks.",
    img: "/projects/01-east-legon-villa/living-room.webp",
    alt: "East Legon villa living room — Decoropic Premium tier project, Accra, 4-bed 487 m²"
  },
  {
    slug: "cantonments-penthouse",
    title: "Cantonments Penthouse",
    meta: "3-bed · Mid-Range · 220 m²",
    body: "Travertine porcelain throughout, wall-hung sanitary, designer Italian sofa. Delivered in 11 weeks.",
    img: "/projects/02-cantonments-penthouse/open-plan-living.webp",
    alt: "Cantonments penthouse open-plan living — Decoropic Mid-Range tier project, Accra, 3-bed 220 m²"
  },
  {
    slug: "airport-residential-apartment",
    title: "Airport Residential Apartment",
    meta: "2-bed · Functional Refresh · 140 m²",
    body: "Marble-look tile, fresh paint, ready-made furniture replacement. Delivered in 6 weeks.",
    img: "/projects/03-airport-residential-apt/living-room.webp",
    alt: "Airport Residential apartment living room — Decoropic Functional Refresh project, Accra, 2-bed 140 m²"
  },
  {
    slug: "adjiringanor-family-villa",
    title: "Adjiringanor Family Villa",
    meta: "Premium · 312 m² · 5-bed · 13 weeks",
    body: "Marble-look porcelain throughout, custom kitchen, smart lighting integration.",
    img: "/projects/04-adjiringanor-family-villa/exterior.webp",
    alt: "Adjiringanor family villa exterior — Decoropic Premium tier project, Accra, 5-bed 312 m²"
  },
  {
    slug: "airport-hills-modern-build",
    title: "Airport Hills Modern Build",
    meta: "Mid-Range · 240 m² · 4-bed · 11 weeks",
    body: "Travertine slab feature wall, designer Italian sofa, walk-in pantry millwork.",
    img: "/projects/05-airport-hills-modern-build/exterior.webp",
    alt: "Airport Hills modern build exterior — Decoropic Mid-Range tier project, Accra, 4-bed 240 m²"
  },
  {
    slug: "trasacco-penthouse-refit",
    title: "Trasacco Penthouse Refit",
    meta: "Luxury · 380 m² · 3-bed · 16 weeks",
    body: "Italian leather upholstery, full smart-home, pivot entrance door.",
    img: "/projects/06-trasacco-penthouse-refit/exterior-entry-door.webp",
    alt: "Trasacco penthouse refit pivot entrance door — Decoropic Luxury tier project, Accra, 3-bed 380 m²"
  }
];

export function getProjectCards(slugs: string[]): ProjectCard[] {
  return slugs
    .map((slug) => projectCards.find((c) => c.slug === slug))
    .filter((c): c is ProjectCard => c !== undefined);
}
