import { Hero } from '../components/sections/Hero'
import { Categories, FeaturedProducts } from '../components/sections/Catalog'
import { TrustStrip, Why, Solutions, Services, StoreGallery, Brands, About, Reviews } from '../components/sections/Info'
import { Contact, FAQ, FinalCTA } from '../components/sections/Contact'

export default function HomePage({ onEnquire }: { onEnquire: (s?: string) => void }) {
  return (
    <main>
      <Hero onEnquire={() => onEnquire()} />
      <TrustStrip />
      <Categories onEnquire={onEnquire} />
      <Services onEnquire={onEnquire} />
      <StoreGallery />
      <FeaturedProducts onEnquire={onEnquire} />
      <Why />
      <Solutions onEnquire={onEnquire} />
      <Brands />
      <About onEnquire={onEnquire} />
      <Reviews />
      <Contact />
      <FAQ />
      <FinalCTA onEnquire={() => onEnquire()} />
    </main>
  )
}
