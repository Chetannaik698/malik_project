import type { Category, Product } from '../types'

// Real product images extracted from store catalog
import acerIc6404Img from '../images/products/acer-ic6404-aio.png'
import hp20c205ilImg from '../images/products/hp-20-c205il-aio.png'
import acerS24Img from '../images/products/acer-s24-aio.png'
import hpPavilion590Img from '../images/products/hp-pavilion-590-tower.png'
import hpPavilion590p0034ilImg from '../images/products/hp-pavilion-590-p0034il.png'
import sony1tbBlackImg from '../images/products/sony-1tb-black-hdd.png'
import acerC24Img from '../images/products/acer-c24-865-aio.png'
import acerZ1Img from '../images/products/acer-z1-612-white-aio.png'
import dellOptiplex3050Img from '../images/products/dell-optiplex-3050-aio.png'
import toshibaCanvioBlackImg from '../images/products/toshiba-canvio-2tb-black.png'
import toshibaCanvioRedImg from '../images/products/toshiba-canvio-2tb-red.png'
import toshibaConnectRedImg from '../images/products/toshiba-connect-2tb-red.png'
import acerVeritonTouchImg from '../images/products/acer-veriton-touch-aio.png'
import dellPentiumDesktopImg from '../images/products/dell-pentium-desktop.png'
import dellInspiron3472Img from '../images/products/dell-inspiron-3472-sff.png'
import hpPavilionAio24qImg from '../images/products/hp-pavilion-aio-24q.png'
import hpPavilionAio22cImg from '../images/products/hp-pavilion-aio-22c.png'
import acerGx281Img from '../images/products/acer-gx281-gaming-pc.png'
import acerGx785Img from '../images/products/acer-gx785-gaming-pc.png'
import dellWm118BlackImg from '../images/products/dell-wm118-mouse-black.png'
import dellWm126BlueImg from '../images/products/dell-wm126-mouse-blue.png'
import sony1tbGreenImg from '../images/products/sony-1tb-green-hdd.png'
import hpZ3700RedImg from '../images/products/hp-z3700-mouse-red.png'
import dellMs116BlackImg from '../images/products/dell-ms116-mouse-black.png'
import dellMs116WhiteImg from '../images/products/dell-ms116-mouse-white.png'
import lenovoM110BlackImg from '../images/products/lenovo-m110-mouse-black.png'
import hpX900Img from '../images/products/hp-x900-mouse.png'
import asusRogStrixImg from '../images/products/asus-rog-strix-mouse.png'

export const nav = [
  ['Home', '#home'],
  ['Products', '#products'],
  ['Services', '#services'],
  ['Brands', '#brands'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export const categories: Category[] = [
  { id: 'desktops', title: 'Desktops & AIO', text: 'All-in-One PCs, ready towers & custom desktop setups.', art: 'desktop', span: 'md:col-span-2 md:row-span-2' },
  { id: 'accessories', title: 'Mice & Storage', text: 'Wireless mice, external hard drives & accessories.', art: 'peripherals', span: 'md:col-span-2' },
  { id: 'laptops', title: 'Laptops', text: 'All Brands & Models — Everyday, work & performance laptops.', art: 'laptop', span: 'md:col-span-1' },
  { id: 'cctv', title: 'CCTV Solutions', text: 'Security for Home & Business — Cameras & DVR/NVR.', art: 'cctv', span: 'md:col-span-1 md:row-span-2' },
  { id: 'repair', title: 'Repair & Service', text: 'Quick & Reliable — Chip-level diagnostics & repairs.', art: 'service', span: 'md:col-span-2' },
  { id: 'printers', title: 'Printers & Toners', text: 'Inkjet & Laser printers, cartridges & paper supplies.', art: 'printer', span: 'md:col-span-2' },
  { id: 'networking', title: 'Networking', text: 'Routers, switches, LAN cabling & Wi-Fi products.', art: 'network', span: 'md:col-span-1' },
  { id: 'software', title: 'Software & Security', text: 'Genuine Windows OS, MS Office & Antivirus licensing.', art: 'software', span: 'md:col-span-1' },
]

export const brands = [
  { name: 'Dell', desc: 'Laptops, Desktops, Displays & Mice' },
  { name: 'HP', desc: 'Pavilion AIO, Towers & Accessories' },
  { name: 'Lenovo', desc: 'ThinkPad, IdeaPad & Optical Mice' },
  { name: 'ASUS', desc: 'ROG Gaming & High Performance' },
  { name: 'Acer', desc: 'Aspire AIO, Veriton & Gaming Towers' },
  { name: 'Sony', desc: 'External Hard Disks & Storage' },
  { name: 'Toshiba', desc: 'Canvio Portable Hard Drives' },
  { name: 'Canon', desc: 'Printers & Imaging' },
  { name: 'EPSON', desc: 'EcoTank Inkjet & Laser Printers' },
  { name: 'Microsoft', desc: 'Windows & Office Solutions' },
]

export const products: Product[] = [
  // ALL-IN-ONE DESKTOPS
  {
    id: 'hp-aio-20',
    name: 'HP 20-c205il 19.45" All-in-One Desktop',
    brand: 'HP',
    cat: 'desktops',
    specs: ['Intel Celeron J3060', '4GB RAM', '1TB HDD', 'Jack Black'],
    price: '₹ 23,433',
    rating: 4.0,
    ratingsCount: 31,
    image: hp20c205ilImg,
  },
  {
    id: 'dell-aio-pentium',
    name: 'DELL All-in-One Desktop (A262511HIN8)',
    brand: 'DELL',
    cat: 'desktops',
    specs: ['Intel Pentium J3710', '4GB RAM', '1TB HDD', 'Windows 10 Home'],
    price: '₹ 30,599',
    rating: 3.5,
    ratingsCount: 8,
    image: dellPentiumDesktopImg,
  },
  {
    id: 'acer-aio-z1',
    name: 'Acer Aspire Z1-612 19.5" All-in-One Desktop',
    brand: 'Acer',
    cat: 'desktops',
    specs: ['Pentium J3710', '4GB RAM', '1TB HDD', 'Snow White'],
    price: '₹ 33,900',
    rating: 4.0,
    ratingsCount: 6,
    image: acerZ1Img,
  },
  {
    id: 'acer-aio-ic6404',
    name: 'Acer IC 6404 18.5" All-in-One Desktop',
    brand: 'Acer',
    cat: 'desktops',
    specs: ['Intel Core i3 6th Gen', '4GB RAM', '1TB HDD', 'DOS Included'],
    price: '₹ 35,000',
    rating: 5.0,
    ratingsCount: 7,
    image: acerIc6404Img,
  },
  {
    id: 'dell-optiplex-3050',
    name: 'DELL OptiPlex 3050 All-in-One Computer',
    brand: 'DELL',
    cat: 'desktops',
    specs: ['Intel Core i3 7th Gen', 'High Reliability', 'All-in-One Business PC'],
    price: '₹ 43,886',
    rating: 4.0,
    ratingsCount: 13,
    image: dellOptiplex3050Img,
  },
  {
    id: 'hp-aio-22c',
    name: 'HP Pavilion 21.5" All-in-One (22-c0019il)',
    brand: 'HP',
    cat: 'desktops',
    specs: ['8th Gen Intel Core i3', '4GB RAM', '1TB HDD', 'Snow White'],
    price: '₹ 41,592',
    rating: 4.0,
    ratingsCount: 2,
    image: hpPavilionAio22cImg,
  },
  {
    id: 'acer-c24-aio',
    name: 'Acer Aspire C24-865 23.8" Full HD AIO',
    brand: 'Acer',
    cat: 'desktops',
    specs: ['8th Gen Core i5-8250U', '12GB DDR4', '1TB HDD', 'Silver Wi-Fi'],
    price: '₹ 72,414',
    rating: 4.0,
    ratingsCount: 3,
    image: acerC24Img,
  },
  {
    id: 'hp-aio-24q',
    name: 'HP Pavilion AIO 24q254in 23.8" Desktop',
    brand: 'HP',
    cat: 'desktops',
    specs: ['7th Gen Core i5-7400T', '8GB RAM', '1TB HDD', '2GB Graphics'],
    price: '₹ 87,500',
    rating: 4.0,
    ratingsCount: 10,
    image: hpPavilionAio24qImg,
  },
  {
    id: 'acer-veriton-touch',
    name: 'Acer Veriton Z4820G 23.8" Touch AIO',
    brand: 'Acer',
    cat: 'desktops',
    specs: ['Core i7-6700 3.4GHz', '8GB DDR4', '1TB HDD', '1080p Touchscreen'],
    price: '₹ 1,17,083',
    rating: 4.0,
    ratingsCount: 3,
    image: acerVeritonTouchImg,
  },
  {
    id: 'acer-s24-aio',
    name: 'Acer Aspire S24-880-UR12 23.8" FHD AIO',
    brand: 'Acer',
    cat: 'desktops',
    specs: ['Intel Core i5-8250U', '12GB DDR4', '1TB HDD', 'Qi Wireless Base'],
    price: '₹ 1,23,125',
    rating: 4.0,
    ratingsCount: 5,
    image: acerS24Img,
  },

  // TOWER DESKTOPS & GAMING RIGS
  {
    id: 'dell-inspiron-3472',
    name: 'DELL Inspiron 3472 MV570 SFF Desktop',
    brand: 'DELL',
    cat: 'desktops',
    specs: ['Celeron Dual Core', '4GB DDR4', '1TB HDD', 'Small Form Factor'],
    price: '₹ 26,690',
    rating: 3.5,
    ratingsCount: 9,
    image: dellInspiron3472Img,
  },
  {
    id: 'hp-pavilion-590-p0034il',
    name: 'HP Pavilion 590-p0034il Tower PC',
    brand: 'HP',
    cat: 'desktops',
    specs: ['Intel Core i3-8100', '4GB RAM', '1TB HDD', 'Black Tower'],
    price: '₹ 32,500',
    rating: 3.5,
    ratingsCount: 12,
    image: hpPavilion590p0034ilImg,
  },
  {
    id: 'hp-pavilion-590-p0035in',
    name: 'HP Pavilion 590-p0035in Tower PC',
    brand: 'HP',
    cat: 'desktops',
    specs: ['Intel Core i3-8100', '4GB RAM', '1TB HDD', 'Windows 10'],
    price: '₹ 36,818',
    rating: 4.0,
    ratingsCount: 8,
    image: hpPavilion590Img,
  },
  {
    id: 'acer-gx281-gaming',
    name: 'Acer Aspire GX-281 Gaming PC',
    brand: 'Acer',
    cat: 'desktops',
    specs: ['AMD Ryzen 5 1400', '8GB RAM', '256GB SSD + 1TB', 'GTX 1050 Ti'],
    price: '₹ 94,183',
    rating: 4.0,
    ratingsCount: 9,
    image: acerGx281Img,
  },
  {
    id: 'acer-gx785-gaming',
    name: 'Acer Aspire GX-785 Gaming Tower',
    brand: 'Acer',
    cat: 'desktops',
    specs: ['Core i5-7400 3GHz', '8GB DDR4', '1TB HDD', 'AMD Radeon RX 580'],
    price: '₹ 1,54,976',
    rating: 4.0,
    ratingsCount: 3,
    image: acerGx785Img,
  },

  // EXTERNAL HARD DRIVES & STORAGE
  {
    id: 'sony-1tb-black',
    name: 'SONY 1 TB External Hard Disk (HD-B1)',
    brand: 'Sony',
    cat: 'accessories',
    specs: ['1TB Capacity', 'USB 3.0 High Speed', 'Slim Black Metallic'],
    price: '₹ 6,839',
    rating: 4.0,
    ratingsCount: '28,412',
    image: sony1tbBlackImg,
  },
  {
    id: 'toshiba-canvio-2tb-red',
    name: 'TOSHIBA Canvio Advance 2TB USB 3.0',
    brand: 'Toshiba',
    cat: 'accessories',
    specs: ['2TB Storage', 'USB 3.0 SuperSpeed', 'Vibrant Glossy Red'],
    price: '₹ 7,560',
    rating: 4.5,
    ratingsCount: 752,
    image: toshibaCanvioRedImg,
  },
  {
    id: 'sony-1tb-green',
    name: 'SONY 1 TB External Hard Disk (HD-SP1)',
    brand: 'Sony',
    cat: 'accessories',
    specs: ['1TB Shock Resistant', 'High Durability', 'Lime Green Finish'],
    price: '₹ 8,250',
    rating: 4.5,
    ratingsCount: 421,
    image: sony1tbGreenImg,
  },
  {
    id: 'toshiba-connect-2tb-red',
    name: 'TOSHIBA 2 TB Canvio Connect II',
    brand: 'Toshiba',
    cat: 'accessories',
    specs: ['2TB Remote Access', 'USB 3.0', 'Metallic Red Casing'],
    price: '₹ 9,000',
    rating: 4.0,
    ratingsCount: '1,016',
    image: toshibaConnectRedImg,
  },
  {
    id: 'toshiba-canvio-2tb-black',
    name: 'TOSHIBA Canvio Advance 2TB USB 3.0',
    brand: 'Toshiba',
    cat: 'accessories',
    specs: ['2TB Portable Drive', 'Backup & Password Lock', 'Black Finish'],
    price: '₹ 9,000',
    rating: 4.5,
    ratingsCount: 811,
    image: toshibaCanvioBlackImg,
  },

  // MICE & PERIPHERALS
  {
    id: 'lenovo-m110-mouse',
    name: 'Lenovo M110 IN Optical Wired Mouse',
    brand: 'Lenovo',
    cat: 'accessories',
    specs: ['Optical Tracking', 'Textured Grip', 'USB Wired'],
    price: '₹ 455',
    rating: 4.5,
    ratingsCount: '2,668',
    image: lenovoM110BlackImg,
  },
  {
    id: 'hp-x900-mouse',
    name: 'HP X900 Wired Computer Mouse',
    brand: 'HP',
    cat: 'accessories',
    specs: ['Optical Sensor', 'Ergonomic Body', 'Official HP Accessory'],
    price: '₹ 462',
    rating: 4.5,
    ratingsCount: '9,304',
    image: hpX900Img,
  },
  {
    id: 'dell-ms116-black',
    name: 'DELL MS116 1000DPI USB Optical Mouse',
    brand: 'DELL',
    cat: 'accessories',
    specs: ['1000 DPI Precision', 'Plug & Play USB', 'Classic Black'],
    price: '₹ 568',
    rating: 4.0,
    ratingsCount: 370,
    image: dellMs116BlackImg,
  },
  {
    id: 'dell-ms116-white',
    name: 'DELL MS116 USB Optical Mouse White',
    brand: 'DELL',
    cat: 'accessories',
    specs: ['1000 DPI Engine', 'Clean White Tone', 'Lightweight Office Design'],
    price: '₹ 648',
    rating: 4.0,
    ratingsCount: 369,
    image: dellMs116WhiteImg,
  },
  {
    id: 'dell-wm126-blue',
    name: 'DELL WM126 Wireless Optical Mouse',
    brand: 'DELL',
    cat: 'accessories',
    specs: ['2.4GHz Wireless', 'Contoured Grip', 'Metallic Blue Body'],
    price: '₹ 908',
    rating: 4.0,
    ratingsCount: '4,936',
    image: dellWm126BlueImg,
  },
  {
    id: 'dell-wm118-black',
    name: 'DELL WM118 Wireless Computer Mouse',
    brand: 'DELL',
    cat: 'accessories',
    specs: ['2.4GHz Nano Receiver', '1000 DPI Sensor', 'Up to 1-Year Battery'],
    price: '₹ 991',
    rating: 4.5,
    ratingsCount: '12,163',
    image: dellWm118BlackImg,
  },
  {
    id: 'hp-z3700-red',
    name: 'HP Z3700 Wireless Computer Mouse',
    brand: 'HP',
    cat: 'accessories',
    specs: ['Ultra-Slim Profile', 'Blue LED Tech', 'Red & Black Dual Tone'],
    price: '₹ 1,499',
    rating: 4.0,
    ratingsCount: '1,351',
    image: hpZ3700RedImg,
  },
  {
    id: 'asus-rog-strix-mouse',
    name: 'ASUS ROG Strix Evolve Gaming Mouse',
    brand: 'ASUS',
    cat: 'accessories',
    specs: ['7200 DPI Optical', 'Aura Sync RGB', 'Modular Top Covers'],
    price: '₹ 5,999',
    rating: 4.0,
    ratingsCount: 7,
    image: asusRogStrixImg,
  },
]

export const why = [
  ['Layers', 'All Under One Roof', 'Desktops, AIO PCs, hard drives, mice, CCTV, networking and repair service in one store.'],
  ['ShieldCheck', 'Best Brands, Best Prices', 'Wholesale & retail S.P. Road deals on HP, DELL, Acer, Lenovo, Sony, Toshiba & ASUS.'],
  ['Wrench', 'Quick & Reliable Service', 'Dedicated chip-level diagnostics, hardware upgrades, and screen & component replacements.'],
  ['Headphones', 'Technical Support Always', 'Real, personalized hardware assistance from experienced professionals on S.P. Road.'],
  ['MapPin', 'Electronics Plaza, S.P. Road', 'Visit us in-store for hands-on demos, instant purchase, and same-day service support.'],
]

export const solutions = [
  ['All-in-One PC Setups', 'Space-saving HP, Dell, and Acer AIO desktops for offices, clinics, front desks and study.', 'md:col-span-2'],
  ['Business & Office Workstations', 'Reliable Dell Inspiron and HP Pavilion towers configured for long work hours and team productivity.', 'md:col-span-1'],
  ['High-Speed Backup & Storage', 'Sony and Toshiba shock-resistant external drives from 1TB to 2TB for securing your critical data.', 'md:col-span-1'],
  ['Gaming & Creator PCs', 'High-performance Acer Aspire GX rigs with GTX / Radeon graphics, fast SSDs, and multi-core power.', 'md:col-span-1'],
  ['Quick Service & Upgrades', 'Rapid laptop / desktop repairs, SSD installations, RAM expansions and genuine antivirus licenses.', 'md:col-span-1'],
]

export const services = [
  ['All-in-One & Desktop Sales', 'Ready branded models from HP, Dell, and Acer, as well as custom-built towers with official warranties.'],
  ['High-Speed Storage & Peripherals', 'Sony & Toshiba external hard disks, Dell & HP wireless mice, gaming peripherals, and laptop accessories.'],
  ['Quick & Reliable Repair Service', 'Chip-level troubleshooting, motherboard repair, screen replacement, hinge fixes, and dust overhaul.'],
  ['CCTV Solutions (Home & Business)', 'Complete security camera setups, dome & bullet cameras, DVR/NVR surveillance, and mobile monitoring.'],
  ['Printers, Cartridges & Consumables', 'Inkjet & Laser printers, original toner cartridges, refill ink bottles, and paper supplies.'],
  ['Networking & Office Wi-Fi', 'Routers, switches, LAN cabling, and structured wireless setup for homes and small businesses.'],
]

export const faqs = [
  ['Where is Renuka Computers Inc located on S.P. Road?', 'We are located at No 6, Electronics Plaza, Ground Floor, P.R. Lane, 3rd Cross, S.P. Road, Bangalore-02. Call +91 97432 08263 for easy directions.'],
  ['Are all products genuine with official manufacturer warranty?', 'Yes! All desktops, AIOs, hard drives, and accessories from HP, Dell, Acer, Sony, Toshiba, and Lenovo come with genuine manufacturer warranty.'],
  ['Can I get the "Best Deal" price for bulk or office purchases?', 'Absolutely. Click "Get Best Deal" on any product or call 9743208263 to receive our best wholesale or corporate quotation.'],
  ['Do you offer on-the-spot repair and upgrade services?', 'Yes, our experienced in-house technicians provide quick and reliable diagnostic services, RAM/SSD upgrades, and board repairs.'],
  ['Do you ship or deliver products across Bengaluru?', 'Yes, we provide in-store pickup at S.P. Road as well as local delivery and courier options across Bengaluru and Karnataka.'],
]
