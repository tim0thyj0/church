import Link from 'next/link'
import { Cross, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <Cross className="h-6 w-6 text-accent" />
              <span className="text-xl font-semibold tracking-tight">
                Christ Fellowship
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              A welcoming community where faith comes alive. Join us as we grow together in Christ.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Bommanahali<br />
                  Bangalore, 600100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+15551234567" className="text-background/70 hover:text-background transition-colors">
                  8056275948
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@christfellowship.org" className="text-background/70 hover:text-background transition-colors">
                  info@christfellowship.org
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Service Times</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Sunday Worship</p>
                  <p className="text-background/70">9:30 AM & 11:30 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Wednesday Bible Study</p>
                  <p className="text-background/70">7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Youth Group (Fridays)</p>
                  <p className="text-background/70">6:30 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-background/70 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#sermons" className="text-background/70 hover:text-background transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="#testimonies" className="text-background/70 hover:text-background transition-colors">
                  Testimonies
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Give Online
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Christ Fellowship. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
