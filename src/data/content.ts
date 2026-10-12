import type { Category, Product } from '../types'

// Real store photos from Malik Infotech Justdial Listing
import storeFrontImg from '../images/store/store-front.jpg'
import serviceBenchImg from '../images/store/service-bench.jpg'
import storeDisplayImg from '../images/store/store-display.jpg'
import motherboardRepairImg from '../images/store/motherboard-repair.jpg'
import accessoriesStockImg from '../images/store/accessories-stock.jpg'
import storeCounterImg from '../images/store/store-counter.jpg'

// Featured products from Malik Infotech store
import asusTufImg from '../images/products/asus-tuf-fx504.png'
import hpDesktopPcImg from '../images/products/hp-desktop-pc.png'
import dellG15Img from '../images/products/dell-g15-gaming.png'
import acerV15NitroImg from '../images/products/acer-aspire-v15-nitro.png'

// Demo products (Storage, Peripherals, AIOs)
import toshibaCanvioRedImg from '../images/products/toshiba-canvio-2tb-red.png'
import toshibaCanvioBlackImg from '../images/products/toshiba-canvio-2tb-black.png'
import sony1tbBlackImg from '../images/products/sony-1tb-black-hdd.png'
import dellWm118BlackImg from '../images/products/dell-wm118-mouse-black.png'
import lenovoM110BlackImg from '../images/products/lenovo-m110-mouse-black.png'
import hpPavilionAio22cImg from '../images/products/hp-pavilion-aio-22c.png'
import acerC24Img from '../images/products/acer-c24-865-aio.png'


export const nav = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Store Gallery', '#gallery'],
  ['Products', '#products'],
  ['Why Us', '#why'],
  ['Reviews', '#reviews'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export const categories: Category[] = [
  { id: 'repair', title: 'Laptop & Chip-Level Repair', text: 'Specialized motherboard repairs, broken displays, hinges & instant diagnostic service.', art: 'service', span: 'md:col-span-2 md:row-span-2' },
  { id: 'desktops', title: 'Desktops & AIO PCs', text: 'Branded HP, DELL & Acer All-in-One desktops and custom office towers.', art: 'desktop', span: 'md:col-span-2' },
  { id: 'accessories', title: 'Storage & Accessories', text: 'Sony & Toshiba external drives (1TB/2TB), wireless mice & high-speed SSDs.', art: 'peripherals', span: 'md:col-span-1' },
  { id: 'cctv', title: 'CCTV & Surveillance', text: 'Complete setup for shops, homes & offices — HD cameras, DVR/NVR & mobile view.', art: 'cctv', span: 'md:col-span-1 md:row-span-2' },
  { id: 'laptops', title: 'Laptop Sales & Deals', text: 'HP, Dell, Lenovo, ASUS & Acer laptops at best S.P. Road wholesale & retail prices.', art: 'laptop', span: 'md:col-span-2' },
  { id: 'printers', title: 'Printers & Toners', text: 'HP, Canon & Epson printer repairs, laser cartridges, ink bottles & maintenance.', art: 'printer', span: 'md:col-span-2' },
  { id: 'networking', title: 'Networking & Wi-Fi', text: 'High-speed Wi-Fi routers, LAN cabling, network switches & office infrastructure.', art: 'network', span: 'md:col-span-1' },
  { id: 'software', title: 'Software & Security', text: 'Genuine Windows OS, MS Office licensing, antivirus protection & data recovery.', art: 'software', span: 'md:col-span-1' },
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
  // 4 STORE PRODUCTS (From Justdial Catalog)
  {
    id: 'asus-tuf-fx504',
    name: 'ASUS TUF Gaming Laptop FX504 15.6 Full HD 8th-Gen...',
    brand: 'ASUS',
    cat: 'laptops',
    specs: ['Intel Core 8th-Gen', '15.6" Full HD', 'Red Backlit Keyboard', 'GTX Graphics'],
    price: '₹ 25,000',
    rating: 4.2,
    ratingsCount: 5,
    image: asusTufImg,
  },
  {
    id: 'hp-desktop-pc',
    name: 'HP Desktop PC (Windows 11 Home, RAM 8 GB, 256 GB SSD,...',
    brand: 'HP',
    cat: 'desktops',
    specs: ['Windows 11 Home', 'RAM 8 GB', '256 GB SSD', 'Black Textured Tower'],
    price: '₹ 30,000',
    rating: 4.5,
    ratingsCount: 8,
    image: hpDesktopPcImg,
  },
  {
    id: 'dell-g15-gaming',
    name: 'DELL G15 Gaming Laptops (Windows 11 Home, RAM 16 G...',
    brand: 'DELL',
    cat: 'laptops',
    specs: ['Windows 11 Home', 'RAM 16 GB', 'Dedicated NVIDIA GPU', 'Game Shift Thermal Cooling'],
    price: '₹ 78,000',
    rating: 4.6,
    ratingsCount: 14,
    image: dellG15Img,
  },
  {
    id: 'acer-aspire-v15-nitro',
    name: 'Acer Gaming Aspire V15 Nitro Black Edition Gaming Laptop...',
    brand: 'Acer',
    cat: 'laptops',
    specs: ['Intel Core i7', '15.6" Full HD IPS', 'Black Edition Chassis', 'Dual Fan Cooling'],
    price: '₹ 55,000',
    rating: 3.8,
    ratingsCount: 5,
    image: acerV15NitroImg,
  },

  // DEMO PRODUCTS (STORAGE, PERIPHERALS & AIO PCs)
  {
    id: 'toshiba-canvio-2tb-red',
    name: 'TOSHIBA Canvio Advance 2TB USB 3.0 Portable Drive',
    brand: 'Toshiba',
    cat: 'accessories',
    specs: ['2TB Storage', 'USB 3.0 SuperSpeed', 'Glossy Finish & Backup'],
    price: '₹ 7,560',
    rating: 4.5,
    ratingsCount: 752,
    image: toshibaCanvioRedImg,
  },
  {
    id: 'sony-1tb-black',
    name: 'SONY 1 TB External Hard Disk (HD-B1)',
    brand: 'Sony',
    cat: 'accessories',
    specs: ['1TB Capacity', 'USB 3.0 High Speed', 'Slim Metallic Body'],
    price: '₹ 6,839',
    rating: 4.0,
    ratingsCount: 28412,
    image: sony1tbBlackImg,
  },
  {
    id: 'dell-wm118-black',
    name: 'DELL WM118 Wireless Computer Mouse',
    brand: 'DELL',
    cat: 'accessories',
    specs: ['2.4GHz Nano Receiver', '1000 DPI Sensor', 'Up to 1-Year Battery'],
    price: '₹ 991',
    rating: 4.5,
    ratingsCount: 12163,
    image: dellWm118BlackImg,
  },
  {
    id: 'lenovo-m110-mouse',
    name: 'Lenovo M110 IN Optical Wired Mouse',
    brand: 'Lenovo',
    cat: 'accessories',
    specs: ['Optical Tracking', 'Textured Grip', 'Plug & Play USB'],
    price: '₹ 455',
    rating: 4.5,
    ratingsCount: 2668,
    image: lenovoM110BlackImg,
  },
  {
    id: 'hp-aio-22c',
    name: 'HP Pavilion 21.5" All-in-One Desktop (22-c0019il)',
    brand: 'HP',
    cat: 'desktops',
    specs: ['8th Gen Intel Core i3', '4GB RAM', '1TB HDD', 'Snow White'],
    price: '₹ 41,592',
    rating: 4.0,
    ratingsCount: 12,
    image: hpPavilionAio22cImg,
  },
  {
    id: 'acer-c24-aio',
    name: 'Acer Aspire C24-865 23.8" Full HD All-in-One',
    brand: 'Acer',
    cat: 'desktops',
    specs: ['8th Gen Core i5', '8GB DDR4', '1TB HDD', 'Micro-Edge Bezel'],
    price: '₹ 72,414',
    rating: 4.0,
    ratingsCount: 3,
    image: acerC24Img,
  },
]

export const why = [
  ['ShieldCheck', '4.7★ Rated on Justdial', 'Backed by 133+ verified customer reviews and high recommendations across Bengaluru.'],
  ['Wrench', 'Expert Chip-Level Service', 'Dedicated diagnostic workbench for laptop motherboards, IC repairs, water damage and short circuits.'],
  ['Layers', 'Everything Under One Roof', 'Laptops, desktops, custom gaming rigs, CCTV security, printers, SSDs and hard disks in one store.'],
  ['BadgeCheck', 'Best Brands & S.P. Road Prices', 'Direct S.P. Road wholesale and retail pricing on HP, DELL, Lenovo, Acer, ASUS, Sony and Toshiba.'],
  ['Clock', 'Fast Same-Day Turnaround', 'Instant diagnostics, express part replacement, and 24/7 technical customer support availability.'],
  ['MapPin', 'Shop No 2, NGM Plaza, S.P. Road', 'Centrally located at SJP Cross Road near S.P. Road for hands-on demos and immediate walk-in service.'],
]

export const solutions = [
  ['Laptop Chip-Level & Screen Repairs', 'Rapid screen fixes, flickering display solutions, motherboard diagnostics, and charging jack repairs.', 'md:col-span-2'],
  ['Business & Office Desktops', 'Space-saving All-in-One desktops and reliable towers configured for uninterrupted office productivity.', 'md:col-span-1'],
  ['CCTV Security & Surveillance', 'Complete HD camera setups, DVR/NVR diagnosis, remote smartphone monitoring, and surveillance hard drives.', 'md:col-span-1'],
  ['Custom Gaming & Creator PCs', 'High-performance rigs with multi-core processors, dedicated graphics, high-airflow cases, and fast NVMe SSDs.', 'md:col-span-1'],
  ['High-Speed Storage & Upgrades', 'Shock-resistant Sony & Toshiba 1TB/2TB external drives, NVMe SSD speed boosts, and dual-channel RAM expansions.', 'md:col-span-1'],
]

export const services = [
  ['Laptop Motherboard & Chip-Level Repair', 'Specialized micro-soldering, short circuit diagnostics, dead laptop revival, IC replacement & BIOS programming.'],
  ['Instant Laptop Screen & Keyboard Replacement', 'Original and OEM LED/OLED replacement screens, flicker fixes, laptop keyboards, touchpads, and hinge repairs.'],
  ['Charging Port, Battery & Adapter Solutions', 'Instant fixes for "Laptop Not Charging", loose DC jack pins, battery draining, and genuine laptop power adapters.'],
  ['Water Damage & Liquid Spill Restoration', 'Ultrasonic board cleaning, corrosion treatment, power supply module repair, and critical data preservation.'],
  ['CCTV Camera Installation & DVR/NVR Repair', 'Full surveillance camera setups for shops, homes, offices and schools with remote mobile view & storage setup.'],
  ['Custom Gaming PCs & Assembled Workstations', 'Custom assembled setups with AMD Ryzen / Intel Core, NVIDIA GeForce RTX, fast DDR5/DDR4 RAM, and gaming RGB.'],
  ['High-Speed SSD Upgrades & RAM Expansions', 'Transform sluggish laptops and desktops in under 30 minutes with high-speed SSD cloning and memory expansions.'],
  ['Computer Printers & Cartridge Refilling', 'HP, Epson, Canon printer servicing, printhead unclogging, original toner cartridges, and ink bottle supplies.'],
]

export const storeGallery = [
  {
    title: 'Store Front & Entrance',
    desc: 'Shop No 2, Ground Floor, NGM Plaza, SJP Cross Road (Near SP Road)',
    image: storeFrontImg,
    tag: 'Shop Entrance',
  },
  {
    title: 'Laptop Repair & Testing Bench',
    desc: 'Equipped with digital diagnostics & chip-level testing equipment',
    image: serviceBenchImg,
    tag: 'Repair Bench',
  },
  {
    title: 'Laptops & Hardware Showcase',
    desc: 'Branded laptops, desktops, monitors and computer peripherals',
    image: storeDisplayImg,
    tag: 'Store Showcase',
  },
  {
    title: 'Precision Motherboard & IC Repair',
    desc: 'Component-level micro-soldering, liquid spill & circuit repair in action',
    image: motherboardRepairImg,
    tag: 'Chip-Level Lab',
  },
  {
    title: 'Original Accessories & Parts Stock',
    desc: 'External drives, SSDs, RAM, wireless mice, chargers and replacement parts',
    image: accessoriesStockImg,
    tag: 'Parts Stock',
  },
  {
    title: 'Inside Customer Service Desk',
    desc: 'Walk-in consultation, instant repair estimates and friendly technical guidance',
    image: storeCounterImg,
    tag: 'Service Desk',
  },
]

export interface CustomerReview {
  name: string
  rating: number
  date: string
  review: string
  source: string
}

export const customerReviews: CustomerReview[] = [
  {
    name: 'Nagabushan V',
    rating: 5,
    date: 'April 2023',
    review: 'I have purchased brand new system for school 35 systems, support is very good.',
    source: 'Justdial Verified',
  },
  {
    name: 'Chirag',
    rating: 5,
    date: 'May 2025',
    review: 'Very good experience, got some replacements items for laptop at reasonable price.',
    source: 'Justdial Verified',
  },
  {
    name: 'Shashank Goel',
    rating: 5,
    date: 'December 2024',
    review: 'The service was good. They repaired the laptop instantly. Now it works fine.',
    source: 'Justdial Verified',
  },
  {
    name: 'Noor Jan',
    rating: 5,
    date: 'June 2023',
    review: 'Good place to buy ye PC gaming and good price from others shops.',
    source: 'Justdial Verified',
  },
  {
    name: 'Faraz',
    rating: 5,
    date: 'April 2023',
    review: 'Good shop best prices from others shop goods all company.',
    source: 'Justdial Verified',
  },
  {
    name: 'SN HomeCreations',
    rating: 5,
    date: 'March 2023',
    review: 'I got good with Malik infotech in reasonable price for my Hard disk.',
    source: 'Justdial Verified',
  },
  {
    name: 'Farid',
    rating: 5,
    date: 'December 2024',
    review: 'Best service.',
    source: 'Justdial Verified',
  },
  {
    name: 'S M photo studio',
    rating: 5,
    date: 'March 2024',
    review: "Good product's genuine person's.",
    source: 'Justdial Verified',
  },
  {
    name: 'Niranjan',
    rating: 5,
    date: 'April 2023',
    review: 'Good.',
    source: 'Justdial Verified',
  },
]

export const faqs = [
  ['Where is Malik Infotech located?', 'We are located at Shop No 2, Ground Floor, NGM Plaza, SJP Cross Road, Near SP Road, Bangalore - 560002. Call +91 90350 36854 for easy directions.'],
  ['What are your shop timings?', 'We are open 7 days a week (Monday to Sunday) with 24 hours service availability. Walk in anytime or call ahead for express repair.'],
  ['Do you provide on-the-spot laptop diagnostics and repairs?', 'Yes! We have an in-house chip-level testing bench. Most common issues like battery replacement, SSD upgrades, screen repairs, and RAM expansions are completed same-day.'],
  ['What brands of laptops and computers do you service and sell?', 'We support and service all major brands including Dell, HP, Lenovo, ASUS, Acer, Apple MacBook, MSI, and custom assembled desktop systems.'],
  ['Do you handle CCTV camera installation and DVR repairs?', 'Yes, we provide end-to-end CCTV solutions for homes, retail shops, offices, and schools, including camera wiring, DVR/NVR repair, and mobile surveillance setup.'],
  ['Can I order products or enquire via WhatsApp?', 'Yes! You can message us directly on WhatsApp at +91 78298 11253 for instant quotes, component availability, or repair consultations.'],
]

