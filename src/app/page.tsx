"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Cup, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992791506-ixryenrh.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="Brew Haven"
          button={{
            text: "Order Now",
            href: "contact"
          }}
          className="bg-transparent"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Premium Coffee"
          description="Discover our carefully sourced beans, expertly crafted drinks, and warm atmosphere. Every cup tells a story of passion and quality."
          tag="Specialty Coffee"
          tagIcon={Coffee}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992793267-was1bcmz.jpg"
          imageAlt="Beautiful coffee shop interior with warm lighting"
          imagePosition="right"
          buttons={[
            {
              text: "View Menu",
              href: "contact"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          className="min-h-screen"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Brew Haven was founded with a simple mission: to serve the finest specialty coffee in an welcoming community space. We source our beans directly from ethical farms across Africa and South America.",
            "Every morning, our expert baristas carefully craft each drink to perfection. Whether you prefer a classic espresso or a modern latte art creation, we're committed to delivering an exceptional experience.",
            "More than just coffee, we're a gathering place where friends meet, ideas spark, and moments are cherished."
          ]}
          showBorder={true}
          buttons={[
            {
              text: "Our Coffee",
              href: "#"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Signature Drinks"
          description="Explore our handcrafted menu of specialty coffee drinks, each created with premium ingredients and expertise."
          tag="Menu"
          tagIcon={Cup}
          products={[
            {
              id: "1",
              name: "Espresso Perfetto",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992796514-6nn0y1qh.jpg",
              imageAlt: "Double shot espresso with rich crema"
            },
            {
              id: "2",
              name: "Cappuccino Classic",
              price: "$4.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992797914-ehr1tfoq.jpg",
              imageAlt: "Creamy cappuccino with latte art"
            },
            {
              id: "3",
              name: "Cold Brew Bliss",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992799349-h20vkpfh.jpg",
              imageAlt: "Refreshing iced cold brew coffee"
            },
            {
              id: "4",
              name: "Coffee & Pastry",
              price: "$6.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992800883-d0uqzmlw.jpg",
              imageAlt: "Coffee with fresh croissant pastry"
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Join thousands of coffee lovers who have made Brew Haven their favorite spot."
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Regular Customer",
              company: "Local Entrepreneur",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992802756-euzhv3pq.jpg",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Coffee Enthusiast",
              company: "Digital Designer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992804135-1z088ksq.jpg",
              imageAlt: "Portrait of James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Student",
              company: "Study Regular",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992805256-kl7u91el.jpg",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Business Owner",
              company: "Meeting Host",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992806630-n8q2iaik.jpg",
              imageAlt: "Portrait of Michael Thompson"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions or want to make a reservation? Drop us a message and we'll get back to you within 24 hours."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Your Phone",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us how we can help...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763992794614-ifkoxvro.jpg"
          imageAlt="Coffee beans background"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew Haven"
          columns={[
            {
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Menu",
                  href: "products"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Hours",
                  href: "#"
                },
                {
                  label: "Location",
                  href: "#"
                },
                {
                  label: "Reservations",
                  href: "#"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms & Conditions",
                  href: "#"
                },
                {
                  label: "Cookie Policy",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}