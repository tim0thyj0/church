export function ScriptureSection() {
  return (
    <section id="sermons" className="py-32 px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-8">
          Scripture of the Week
        </p>
        
        <blockquote className="space-y-8">
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-medium leading-tight text-balance">
            {"\"For I know the plans I have for you,\" declares the Lord, \"plans to prosper you and not to harm you, plans to give you hope and a future.\""}
          </p>
          
          <footer className="pt-4">
            <cite className="text-xl text-primary-foreground/80 font-medium not-italic">
              — Jeremiah 29:11
            </cite>
          </footer>
        </blockquote>
        
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-px bg-accent" />
        </div>
      </div>
    </section>
  )
}
