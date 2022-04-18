// import helper modules
import { DateTime } from 'luxon';

// Space
import AndyHolmes from './images/wallpapers/andy-holmes.jpg';
import GuillermoFerla from './images/wallpapers/guillermo-ferla.jpg';
import NASA from './images/wallpapers/nasa.jpg';
import VincentiuSolomon from './images/wallpapers/vincentiu-solomon.jpg';

// Animals
import GeranDeKlerk from './images/wallpapers/geran-de-klerk.jpg';
import MarkStoop from './images/wallpapers/mark-stoop.jpg';
import RayHennessy from './images/wallpapers/ray-hennessy.jpg';
import WexorTmg from './images/wallpapers/wexor-tmg.jpg';

// Nature
import ClaudioTesta from './images/wallpapers/claudio-testa.jpg';
import QingbaoMeng from './images/wallpapers/qingbao-meng.jpg';
import QuinoAl from './images/wallpapers/quino-al.jpg';
import V2Osk from './images/wallpapers/v2osk.jpg';

// Minimalist
import MiladFakurian from './images/wallpapers/milad-fakurian.jpg';
import PawelCzerwinski from './images/wallpapers/pawel-czerwinski.jpg';
import ScottWeb from './images/wallpapers/scott-webb.jpg';
import SebastianSvenson from './images/wallpapers/sebastian-svenson.jpg';

// Architecture
import LanceArmstrong from './images/wallpapers/lance-anderson.jpg';
import Alex from './images/wallpapers/alex.jpg';
import MaartenDeckers from './images/wallpapers/maarten-deckers.jpg';
import PierreChatelInnocenti from './images/wallpapers/pierre-chatel-innocenti.jpg';

const shopItemsData = [
    // SPACE
    {
        imgURL: AndyHolmes,
        brandName: 'Andy Holmes',
        brandURL: 'https://unsplash.com/@andyjh07',
        category: 'space',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 5,
        price: 9.99,
        id: 1,
    },
    {
        imgURL: GuillermoFerla,
        brandName: 'Guillermo Ferla',
        brandURL: 'https://unsplash.com/@gferla',
        category: 'space',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 4,
        price: 9.99,
        id: 2,
    },
    {
        imgURL: NASA,
        brandName: 'NASA',
        brandURL: 'https://unsplash.com/@nasa',
        category: 'space',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 5,
        price: 9.99,
        id: 3,
    },
    {
        imgURL: VincentiuSolomon,
        brandName: 'Vincentiu Solomon',
        brandURL: 'https://unsplash.com/@vincentiu',
        category: 'space',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 5,
        price: 9.99,
        id: 4,
    },
    // ANIMALS
    {
        imgURL: GeranDeKlerk,
        brandName: 'Geran de Klerk',
        brandURL: 'https://unsplash.com/@gerandeklerk',
        category: 'animals',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 4,
        price: 9.99,
        id: 5,
    },
    {
        imgURL: MarkStoop,
        brandName: 'Mark Stoop',
        brandURL: 'https://unsplash.com/@markstoop',
        category: 'animals',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 4,
        price: 9.99,
        id: 6,
    },
    {
        imgURL: RayHennessy,
        brandName: 'Ray Hennessy',
        brandURL: 'https://unsplash.com/@rayhennessy',
        category: 'animals',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 5,
        price: 9.99,
        id: 7,
    },
    {
        imgURL: WexorTmg,
        brandName: 'Wexor Tmg',
        brandURL: 'https://unsplash.com/@wexor',
        category: 'animals',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 4,
        price: 9.99,
        id: 8,
    },
    // NATURE
    {
        imgURL: ClaudioTesta,
        brandName:'Claudio Testa',
        brandURL: 'https://unsplash.com/@claudiotesta',
        category: 'nature',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 4,
        price: 9.99,
        id: 9,
    },
    {
        imgURL: QingbaoMeng,
        brandName: 'Qingbao Meng',
        brandURL: 'https://unsplash.com/@ideasboom',
        category: 'nature',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 5,
        price: 9.99,
        id: 10,
    },
    {
        imgURL: QuinoAl,
        brandName: 'Quino Al',
        brandURL: 'https://unsplash.com/@quinoal',
        category: 'nature',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 5,
        price: 9.99,
        id: 11,
    },
    {
        imgURL: V2Osk,
        brandName: 'v2osk',
        brandURL :'https://unsplash.com/@v2osk',
        category: 'nature',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 4,
        price: 9.99,
        id: 12,
    },
    // MINIMALIST  
    {
        imgURL: MiladFakurian,
        brandName: 'Milad Fakurian',
        brandURL: 'https://unsplash.com/@fakurian',
        category: 'minimalist',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 4,
        price: 9.99,
        id: 13,
    },
    {
        imgURL: PawelCzerwinski,
        brandName: 'Pawel Czerwinkski',
        brandURL: 'https://unsplash.com/@pawel_czerwinski',
        category: 'minimalist',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 4,
        price: 9.99,
        id: 14,
    },
    {
        imgURL: ScottWeb,
        brandName: 'Scott Web',
        brandURL: 'https://unsplash.com/@scottwebb',
        category: 'minimalist',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 4,
        price: 9.99,
        id: 15,
    },
    {
        imgURL: SebastianSvenson,
        brandName: 'Sebastian Svenson',
        brandURL: 'https://unsplash.com/@sebastiansvenson',
        category: 'minimalist',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 5,
        price: 9.99,
        id: 16,
    },
    // ARCHITECTURE
    {
        imgURL: LanceArmstrong,
        brandName: 'Lance Anderson',
        brandURL: 'https://unsplash.com/@lanceanderson',
        category: 'architecture',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 4,
        price: 9.99,
        id: 17,
    },
    {
        imgURL: Alex,
        brandName: 'Alex',
        brandURL: 'https://unsplash.com/@brizmaker',
        category: 'architecture',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 5,
        price: 9.99,
        id: 18,
    },
    {
        imgURL: MaartenDeckers,
        brandName: 'Maarten Deckers',
        brandURL: 'https://unsplash.com/@maartendeckers',
        category: 'architecture',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 5,
        price: 9.99,
        id: 19,
    },
    {
        imgURL: PierreChatelInnocenti,
        brandName: 'Pierre Chatel-Innocenti',
        brandURL: 'https://unsplash.com/@chatelp',
        category: 'architecture',
        reviews: [
            'Wow, great!',
            'Gee wow'
        ],
        stars: 5,
        price: 9.99,
        id: 20,
    },
];

const siteReviewsData = [
    {
        review: 'Awesome site, more awesome prices',
        reviewer: "@WallsR4Wallpapers",
        time: DateTime.now().minus({weeks: 2}).toLocaleString(DateTime.DATETIME_FULL),
    },
    {
        review: "I can't buy too many wallpapers from here!",
        reviewer: "@WallpaperFanatic",
        time: DateTime.now().minus({days: 3}).toLocaleString(DateTime.DATETIME_FULL),
    },
    {
        review: "The site that just keeps giving - wallpapers!",
        reviewer: "@Wallie",
        time: DateTime.now().minus({months: 4}).toLocaleString(DateTime.DATETIME_FULL),
    },
]

export {
    shopItemsData,
    siteReviewsData,
}
