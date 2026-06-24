import { Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Kalpana',
    role: 'Member since 2010',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    quote: 'Christ Fellowship has been a true blessing in my life. The warmth and genuine care of this community helped me through some of my darkest moments. I found not just a church, but a family.',
  },
  {
    name: 'Timothy J',
    role: 'Member since 2025',
    image: 'https://www.dropbox.com/scl/fi/tx50rw00333bjj31l9dfq/piklc.jpg?rlkey=a3i193nj6ri2m5tsa90lb80d5&st=o3wqwl47&raw=1',
    quote: 'The Bible studies here transformed my understanding of Scripture. Pastor John has a gift for making complex passages come alive. My faith has grown deeper than I ever thought possible.',
  },
  {
    name: 'Kavitha',
    role: 'Member since 2019',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    quote: 'Joining Christ Fellowship was the best decision. The youth programs have helped me develop a strong foundation in faith, and we have made lifelong friends here.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonies" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            Testimonies
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-foreground leading-tight">
            Stories of faith & transformation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from members of our community about how Christ Fellowship has impacted their spiritual journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent/40 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
