'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=900&fit=crop',
    alt: 'Church congregation during worship service',
  },
  {
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&h=900&fit=crop',
    alt: 'Bible study group discussion',
  },
  {
    image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424ef?w=1920&h=900&fit=crop',
    alt: 'Church community gathering',
  },
  {
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&h=900&fit=crop',
    alt: 'Open Bible with candlelight',
  },
  {
    image: 'https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?w=1920&h=900&fit=crop',
    alt: 'Peaceful church sanctuary',
  },
]

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  return (
    <section id="home" className="relative w-full pt-16">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative h-[85vh] min-h-[600px] w-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-primary/60" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/20 backdrop-blur-sm text-card hover:bg-card/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/20 backdrop-blur-sm text-card hover:bg-card/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'w-2.5 h-2.5 rounded-full transition-all',
                current === index
                  ? 'bg-card w-8'
                  : 'bg-card/50 hover:bg-card/75'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      {/* Overlay Quote */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-16">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-card font-medium leading-tight tracking-tight text-balance">
            {"\"Come to me, all you who are weary and burdened, and I will give you rest.\""}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-card/90 font-medium">
            Matthew 11:28
          </p>
        </div>
      </div>
    </section>
  )
}
