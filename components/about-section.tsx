import { BookOpen, Heart, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                Welcome to Our Church
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-foreground leading-tight">
                A community built on faith, hope & love
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Christ Fellowship, we are a community firmly rooted in the belief of the Father, 
              Son, and the Holy Spirit. Our mission is to create a welcoming space where individuals 
              and families can grow in their faith journey together.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We are dedicated to studying and preaching the Bible, believing it to be the inspired 
              Word of God and the ultimate guide for our lives. Through worship, fellowship, and 
              service, we strive to reflect the love of Christ in everything we do.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-secondary mb-4">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Bible Study</h3>
                <p className="text-sm text-muted-foreground mt-1">Weekly groups</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-secondary mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Worship</h3>
                <p className="text-sm text-muted-foreground mt-1">Every Sunday</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-secondary mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Community</h3>
                <p className="text-sm text-muted-foreground mt-1">Events & fellowship</p>
              </div>
            </div>
          </div>

          {/* Right Column - Pastor Bio Card */}
          <div className="lg:sticky lg:top-24">
            <Card className="overflow-hidden border-0 shadow-lg bg-card">
              <div className="relative h-80 w-full bg-secondary">
                <img
                  src="https://ucbb3b61af3b50c41360557de7dd.dl.dropboxusercontent.com/cd/0/inline/DA6v620YBziXIqOp-Rxdfa2ESllQeWrVCOqxJ6xcTpbhnFOhmKVPEDavuK_sFvwi_QRUjoA3Nb_S1YlhplobD9Qaad1sVmhOjmAFZEvL3P6TA409Yzz_TtNL0yBLH1xQuyU/file#"
                  alt="Pastor John Matthews"
                  className="h-full w-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <CardContent className="p-8">
                <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                  Lead Pastor
                </p>
                <h3 className="mt-2 font-serif text-2xl font-medium text-foreground">
                  Pastor Immanuel
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  With over 20 years of ministry experience, Pastor Immanuel leads our congregation 
                  with wisdom, compassion, and a deep love for Scripture. His teaching style makes 
                  the Bible accessible and applicable to everyday life.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    {"\"My heart's desire is to see every person experience the transforming love of Jesus Christ.\""}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
