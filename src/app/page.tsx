"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="animatedAurora"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="DuckBar"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Events", id: "pricing" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          tag="Welcome to DuckBar"
          title="Authentic Ukrainian Hospitality"
          description="Experience traditional Ukrainian cuisine, premium vodka selection, and warm hospitality in the heart of the city. Where Eastern European culture comes alive."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144337795-nti38xvu.jpg"
          imageAlt="DuckBar interior with warm lighting and Ukrainian decor"
          buttons={[
            {
              text: "Reserve Now",
              href: "contact"
            },
            {
              text: "Explore Menu",
              href: "features"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          title="A Slice of Ukraine"
          description="DuckBar brings authentic Ukrainian traditions to life. From our carefully curated vodka collection to traditional recipes passed down through generations, we celebrate the rich culture and warmth of Eastern European hospitality."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144339265-xjoimf46.jpg",
            imageAlt: "Traditional Ukrainian vodka bottles"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144341094-p617vdli.jpg",
            imageAlt: "Cozy Ukrainian restaurant interior"
          }}
          buttons={[
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          tag="What We Offer"
          title="Experience Authentic Ukrainian Flavors"
          description="Discover our signature offerings crafted with tradition and passion"
          textboxLayout="split"
          features={[
            {
              id: 1,
              title: "Traditional Cuisine",
              description: "Authentic Ukrainian dishes prepared using family recipes and premium local ingredients",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144341782-cexv3bc2.jpg",
              imageAlt: "Traditional Ukrainian borscht soup"
            },
            {
              id: 2,
              title: "Premium Vodka Selection",
              description: "Curated collection of finest Ukrainian and Eastern European vodkas",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144342273-l4x9t8o3.jpg",
              imageAlt: "Selection of premium Ukrainian vodka bottles"
            },
            {
              id: 3,
              title: "Specialty Dumplings",
              description: "Hand-made varenyky and pelmeni with various fillings prepared fresh daily",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144344157-mdagxn8o.jpg",
              imageAlt: "Ukrainian varenyky dumplings with sour cream"
            },
            {
              id: 4,
              title: "Live Music Nights",
              description: "Experience traditional Ukrainian music and contemporary performances every weekend",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144346213-aiou5gfu.jpg",
              imageAlt: "Live band performance at Ukrainian bar"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          tag="By The Numbers"
          title="DuckBar Impact"
          description="Celebrating our success and community"
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "5K+",
              description: "Happy Guests Annually"
            },
            {
              id: "2",
              value: "150+",
              description: "Vodka Varieties"
            },
            {
              id: "3",
              value: "8 Years",
              description: "Serving Community"
            },
            {
              id: "4",
              value: "4.8★",
              description: "Customer Rating"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          tag="Guest Reviews"
          title="What Our Guests Say"
          description="Real stories from people who love DuckBar"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Maria K.",
              handle: "@mariakiev",
              testimonial: "Felt like I was back home in Kyiv. The food, the atmosphere, the hospitality - everything is perfect. DuckBar is a must-visit.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/tmp/portrait-woman-smiling-professional-1764144362963-697508d3.jpg",
              imageAlt: "Maria K. smiling"
            },
            {
              id: "2",
              name: "Ivan P.",
              handle: "@ivanlovesvodka",
              testimonial: "Best vodka selection in the city. The bartenders really know their craft and the traditional recipes are authentic.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144372530-44b5ih8j.jpg",
              imageAlt: "Ivan P. smiling"
            },
            {
              id: "3",
              name: "Sophie T.",
              handle: "@sophieeats",
              testimonial: "The varenyky here are incredible. I've had them in Ukraine and these are just as good. Plus the service is warm and welcoming.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144374041-t6wn877o.jpg",
              imageAlt: "Sophie T. smiling"
            },
            {
              id: "4",
              name: "Alex M.",
              handle: "@alexnight",
              testimonial: "Live music nights are amazing. Great crowd, great energy, and the traditional drinks really hit different.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144375125-rjqow6qg.jpg",
              imageAlt: "Alex M. smiling"
            },
            {
              id: "5",
              name: "Elena R.",
              handle: "@elenafoodie",
              testimonial: "Every visit is special. The owners clearly care about preserving Ukrainian culture. Can't recommend it enough.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144375820-uwx576sn.jpg",
              imageAlt: "Elena R. smiling"
            },
            {
              id: "6",
              name: "Dmitry L.",
              handle: "@dmitrysocial",
              testimonial: "Perfect spot for private events. We hosted our anniversary here and it was unforgettable. DuckBar exceeded all expectations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144376469-vrthsdxt.jpg",
              imageAlt: "Dmitry L. smiling"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          tag="Event Packages"
          title="Plan Your Celebration"
          description="Perfect packages for your special moments and gatherings"
          textboxLayout="split"
          animationType="slide-up"
          plans={[
            {
              id: "casual",
              badge: "Casual Gathering",
              price: "25-35/person",
              subtitle: "Perfect for small groups and friends",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                }
              ],
              features: [
                "Appetizers and snacks",
                "Vodka tasting selection",
                "Traditional music background",
                "Cozy seating arrangement"
              ]
            },
            {
              id: "corporate",
              badge: "Corporate Event",
              badgeIcon: Sparkles,
              price: "40-60/person",
              subtitle: "Premium package for business gatherings",
              buttons: [
                {
                  text: "Reserve Space",
                  href: "contact"
                }
              ],
              features: [
                "Full Ukrainian menu",
                "Premium vodka selection",
                "Live music performance",
                "Private dining area",
                "Custom menu planning",
                "Professional staff"
              ]
            },
            {
              id: "celebration",
              badge: "Celebration Bundle",
              badgeIcon: Sparkles,
              price: "50-80/person",
              subtitle: "Make your special day memorable",
              buttons: [
                {
                  text: "Plan Celebration",
                  href: "contact"
                }
              ],
              features: [
                "Complete feast menu",
                "Exclusive vodka collection",
                "Live band all evening",
                "Exclusive private space",
                "Personalized decorations",
                "Toast services",
                "Photo memories package"
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Reserve Your Table Today"
          description="Join us for an unforgettable Ukrainian experience. Book your reservation or inquire about private events."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764144377235-ronx1odj.jpg"
          imageAlt="Ukrainian traditional flag pattern"
          mediaPosition="right"
          inputPlaceholder="your.email@example.com"
          buttonText="Request Reservation"
          termsText="We'll get back to you within 24 hours. Your information is safe with us."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="DuckBar"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "features" },
                { label: "Events", href: "pricing" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Reviews", href: "testimonial" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Hours" },
                { label: "Tue-Thu: 5PM-11PM" },
                { label: "Fri-Sat: 5PM-1AM" },
                { label: "Sun: 5PM-10PM" }
              ]
            },
            {
              items: [
                { label: "Address" },
                { label: "123 Riverside Ave" },
                { label: "City Center" },
                { label: "+1 (555) 123-4567" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}