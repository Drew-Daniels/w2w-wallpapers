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

class ShopItem {
    constructor(imgURL, brandName, brandURL, category, reviews, stars, price, id) {
        this.imgURL = imgURL;
        this.brandName = brandName;
        this.brandURL = brandURL;
        this.category = category;
        this.reviews = reviews;
        this.stars = stars;
        this.price = price;
        this.id = id;
        this.cartQty = 0;
    }
}

const data = [
    // SPACE
    new ShopItem(
            AndyHolmes,
            'Andy Holmes',
            'https://unsplash.com/@andyjh07',
            'space',
            [
                'Wow, great!',
                'Gee wow'
            ],
            4,
            9.99,
            1,
        ),
    new ShopItem(
        GuillermoFerla,
        'Guillermo Ferla',
        'https://unsplash.com/@gferla',
        'space',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        2,
    ),
    new ShopItem(
        NASA,
        'NASA',
        'https://unsplash.com/@nasa',
        'space',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        3,
    ),
    new ShopItem(
        VincentiuSolomon,
        'Vincentiu Solomon',
        'https://unsplash.com/@vincentiu',
        'space',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        4,
    ),
    // ANIMALS
    new ShopItem(
        GeranDeKlerk,
        'Geran de Klerk',
        'https://unsplash.com/@gerandeklerk',
        'animals',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        5,
    ),
    new ShopItem(
        MarkStoop,
        'Mark Stoop',
        'https://unsplash.com/@markstoop',
        'animals',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        6,
    ),
    new ShopItem(
        RayHennessy,
        'Ray Hennessy',
        'https://unsplash.com/@rayhennessy',
        'animals',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        7,
    ),
    new ShopItem(
        WexorTmg,
        'Wexor Tmg',
        'https://unsplash.com/@wexor',
        'animals',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        8,
    ),
    // NATURE
    new ShopItem(
        ClaudioTesta,
        'Claudio Testa',
        'https://unsplash.com/@claudiotesta',
        'nature',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        9,
    ),
    new ShopItem(
        QingbaoMeng,
        'Qingbao Meng',
        'https://unsplash.com/@ideasboom',
        'nature',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        10,
    ),
    new ShopItem(
        QuinoAl,
        'Quino Al',
        'https://unsplash.com/@quinoal',
        'nature',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        11,
    ),
    new ShopItem(
        V2Osk,
        'v2osk',
        'https://unsplash.com/@v2osk',
        'nature',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        12,
    ),

    // MINIMALIST  
    new ShopItem(
        MiladFakurian,
        'Milad Fakurian',
        'https://unsplash.com/@fakurian',
        'minimalist',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        13,
    ),
    new ShopItem(
        PawelCzerwinski,
        'Pawel Czerwinkski',
        'https://unsplash.com/@pawel_czerwinski',
        'minimalist',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        14,
    ),
    new ShopItem(
        ScottWeb,
        'Scott Web',
        'https://unsplash.com/@scottwebb',
        'minimalist',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        15,
    ),
    new ShopItem(
        SebastianSvenson,
        'Sebastian Svenson',
        'https://unsplash.com/@sebastiansvenson',
        'minimalist',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        16,
    ),
    // ARCHITECTURE
        new ShopItem(
        LanceArmstrong,
        'Lance Anderson',
        'https://unsplash.com/@lanceanderson',
        'architecture',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        17,
    ),
    new ShopItem(
        Alex,
        'Alex',
        'https://unsplash.com/@brizmaker',
        'architecture',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        18,
    ),
    new ShopItem(
        MaartenDeckers,
        'Maarten Deckers',
        'https://unsplash.com/@maartendeckers',
        'architecture',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        19,
    ),
    new ShopItem(
        PierreChatelInnocenti,
        'Pierre Chatel-Innocenti',
        'https://unsplash.com/@chatelp',
        'architecture',
        [
            'Wow, great!',
            'Gee wow'
        ],
        4,
        9.99,
        20,
    ),
]

export default data;
