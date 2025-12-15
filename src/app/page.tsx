"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarouselSplit from '@/components/sections/hero/HeroBillboardCarouselSplit';
import MediaSplitTabsAbout from '@/components/sections/about/MediaSplitTabsAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardNine from '@/components/sections/team/TeamCardNine';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardFour from '@/components/sections/blog/BlogCardFour';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Home, Building2, Hammer, Clipboard, Leaf, CheckCircle, Users, Award, TrendingUp, Linkedin } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="none"
      cardStyle="elevated-accent-light"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="BudStroy"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808384233-van74v22.jpg"
          logoAlt="BudStroy Logo"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Projects", id: "projects" },
            { name: "Team", id: "team" },
            { name: "Blog", id: "blog" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarouselSplit
          title="Build Your Future with BudStroy"
          buttons={[
            {
              text: "View Our Projects",
              href: "projects"
            },
            {
              text: "Schedule Consultation",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808385340-fpuxtjgh.jpg",
              imageAlt: "Modern construction building project"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808386711-of1djcvr.jpg",
              imageAlt: "Residential building construction"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808387838-m4optaou.jpg",
              imageAlt: "Commercial construction site"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808389312-7jd4v69u.jpg",
              imageAlt: "Architectural building design"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808390517-s3hj7f2k.jpg",
              imageAlt: "Construction team building"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="About BudStroy"
          description="Delivering excellence in construction for over 15 years"
          tabs={[
            {
              id: "mission",
              label: "Our Mission",
              description: "We are committed to transforming visions into reality by delivering innovative construction solutions that exceed expectations. Our team combines expertise, reliability, and attention to detail in every project."
            },
            {
              id: "experience",
              label: "Our Experience",
              description: "With over 15 years in the industry, we have successfully completed more than 200 projects across residential, commercial, and industrial sectors. Our portfolio speaks to our dedication and quality."
            },
            {
              id: "values",
              label: "Our Values",
              description: "Safety, sustainability, and client satisfaction are at the core of everything we do. We believe in responsible building practices that benefit communities and the environment."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808391627-uxorcaon.jpg"
          imageAlt="BudStroy construction team"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardFour
          title="Our Services"
          description="Comprehensive construction and building solutions tailored to your needs"
          tag="Services"
          features={[
            {
              title: "Residential Construction",
              description: "Custom homes and residential developments built with precision and care for families looking for quality living spaces",
              icon: Home
            },
            {
              title: "Commercial Building",
              description: "State-of-the-art commercial properties designed for modern business operations and sustainability",
              icon: Building2
            },
            {
              title: "Renovation & Remodeling",
              description: "Transform existing spaces with expert renovation services that preserve character while adding modern features",
              icon: Hammer
            },
            {
              title: "Project Management",
              description: "Complete oversight from planning to completion ensuring timelines and budgets are maintained throughout",
              icon: Clipboard
            },
            {
              title: "Sustainable Building",
              description: "Eco-friendly construction practices that reduce environmental impact while maintaining superior quality",
              icon: Leaf
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Achievements"
          description="Proven track record of successful projects and satisfied clients"
          tag="Metrics"
          metrics={[
            {
              id: "1",
              value: "200+",
              title: "Projects Completed",
              description: "Successfully delivered across multiple sectors",
              icon: CheckCircle
            },
            {
              id: "2",
              value: "500+",
              title: "Happy Clients",
              description: "Trusted by homeowners and businesses",
              icon: Users
            },
            {
              id: "3",
              value: "15",
              title: "Years Experience",
              description: "Industry expertise and reliability",
              icon: Award
            },
            {
              id: "4",
              value: "98%",
              title: "On-Time Delivery",
              description: "Consistent project timeline management",
              icon: TrendingUp
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardNine
          title="Meet Our Team"
          description="Experienced professionals dedicated to building excellence"
          tag="Team"
          members={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Founder & Chief Builder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808404140-y5b0b35z.jpg",
              imageAlt: "Marcus Johnson",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn"
                }
              ]
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "Project Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808405163-vtsomwrt.jpg",
              imageAlt: "Sarah Mitchell",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn"
                }
              ]
            },
            {
              id: "3",
              name: "David Chen",
              role: "Lead Architect",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808406281-kujmea71.jpg",
              imageAlt: "David Chen",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn"
                }
              ]
            },
            {
              id: "4",
              name: "Emma Williams",
              role: "Construction Supervisor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808407314-2vtdtt9n.jpg",
              imageAlt: "Emma Williams",
              socialLinks: [
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  ariaLabel: "LinkedIn"
                }
              ]
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Clients Say"
          description="Real feedback from satisfied customers who trusted us with their projects"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Brown, Homeowner",
              date: "Date: 3 November 2024",
              title: "Outstanding quality and professionalism",
              quote: "BudStroy transformed our vision into a beautiful home. The team was professional, on-time, and incredibly attentive to every detail. We couldn't be happier with the result.",
              tag: "Residential",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808392532-bn64z3s1.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808385340-fpuxtjgh.jpg"
            },
            {
              id: "2",
              name: "Robert Thompson, Business Owner",
              date: "Date: 28 October 2024",
              title: "Exceeded all expectations",
              quote: "The commercial space BudStroy built for us is perfect. Their project management was flawless, and they delivered ahead of schedule while maintaining exceptional quality standards.",
              tag: "Commercial",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808393496-2pozq160.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808387838-m4optaou.jpg"
            },
            {
              id: "3",
              name: "Maria Garcia, Property Developer",
              date: "Date: 22 October 2024",
              title: "Reliable partner for growth",
              quote: "Working with BudStroy on multiple projects has been seamless. Their team understands the importance of timelines and budgets. They are a trusted partner we continue to work with.",
              tag: "Development",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808394288-y1zdzsy8.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808386711-of1djcvr.jpg"
            },
            {
              id: "4",
              name: "David Park, Architect",
              date: "Date: 15 October 2024",
              title: "Exceptional execution of vision",
              quote: "Collaborating with BudStroy brings designs to life beautifully. Their attention to architectural details and commitment to quality craftsmanship is unmatched in the industry.",
              tag: "Architecture",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808395254-kiesn74l.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808389312-7jd4v69u.jpg"
            },
            {
              id: "5",
              name: "Lisa Anderson, Facility Manager",
              date: "Date: 10 October 2024",
              title: "Professional and dependable",
              quote: "Our renovation project was completed with minimal disruption and maximum professionalism. BudStroy's team coordinated perfectly and delivered outstanding results.",
              tag: "Renovation",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808396156-ct10jj09.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808390517-s3hj7f2k.jpg"
            },
            {
              id: "6",
              name: "Thomas Wright, Investor",
              date: "Date: 5 October 2024",
              title: "Best investment decision",
              quote: "Investing in BudStroy for our real estate project was the best decision we made. Their expertise and reliability ensured strong returns and satisfied tenants.",
              tag: "Investment",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808396977-y6x1igll.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808391627-uxorcaon.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Working with top companies and organizations across the construction sector"
          tag="Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808408122-2vfzq1ot.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808409053-ins49j9z.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808410141-iurrlht0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808411065-40hhf7ea.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808412032-ho7zkb87.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808413058-34bgvefl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808413925-ghpwvpz0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808414763-ji3e9505.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          showCard={true}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardFour
          title="Latest Insights"
          description="Stay updated with construction trends, tips, and industry insights"
          tag="Blog"
          blogs={[
            {
              id: "1",
              title: "Sustainable Building Practices for 2025",
              description: "Explore the latest eco-friendly construction techniques and materials that reduce environmental impact while improving energy efficiency and long-term cost savings.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808398203-0bpb8mzs.jpg",
              imageAlt: "Sustainable green building"
            },
            {
              id: "2",
              title: "Modern Architectural Design Trends",
              description: "Discover contemporary design principles that blend aesthetics with functionality, creating spaces that inspire and serve modern living and working environments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808399357-vhdnq93o.jpg",
              imageAlt: "Modern architectural design"
            },
            {
              id: "3",
              title: "Safety Management in Construction",
              description: "Learn essential safety protocols and management strategies that protect workers and ensure project success while maintaining the highest industry standards.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808400600-n218zfaa.jpg",
              imageAlt: "Construction safety"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and construction process"
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "How do you ensure project timelines are met?",
              content: "We employ rigorous project management protocols with detailed scheduling, regular team communications, and proactive risk management. Our 98% on-time delivery rate demonstrates our commitment to meeting deadlines while maintaining quality standards."
            },
            {
              id: "2",
              title: "What is your warranty and guarantees policy?",
              content: "We provide comprehensive warranties on all construction work. Structural elements come with a 10-year warranty, finishes with 5-year coverage, and all materials are guaranteed against defects. We stand behind our work with full confidence."
            },
            {
              id: "3",
              title: "How do you handle changes during construction?",
              content: "We manage changes through a formal change order process. Any modifications are documented, reviewed, and approved by all parties. This ensures clear communication about timeline and cost impacts before implementation."
            },
            {
              id: "4",
              title: "Can you work with existing budgets and constraints?",
              content: "Absolutely. We specialize in value engineering and cost optimization. Our team works closely with clients to maximize quality within budget parameters, finding smart solutions that don't compromise on excellence."
            },
            {
              id: "5",
              title: "Do you offer sustainable building options?",
              content: "Yes, sustainability is a core value. We offer LEED-certified construction, energy-efficient materials, renewable energy integration, and waste reduction strategies. We help clients achieve their environmental goals responsibly."
            },
            {
              id: "6",
              title: "How is safety managed on site?",
              content: "Safety is paramount. We maintain strict OSHA compliance, conduct regular safety training, perform daily site inspections, and maintain incident reporting systems. Every team member is trained in current safety protocols and best practices."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Your Project?"
          description="Get in touch with our team today. Share your vision and we will help bring it to life with expert construction solutions tailored to your needs."
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
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "projectType",
              type: "text",
              placeholder: "Project Type (Residential, Commercial, etc.)",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project vision and requirements...",
            rows: 5,
            required: true
          }}
          buttonText="Send Inquiry"
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808401689-xmk2md5n.jpg"
          imageAlt="Construction project planning"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808402897-wd0e9gz2.jpg"
          imageAlt="Completed construction project"
          logoText="BudStroy"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765808384233-van74v22.jpg"
          copyrightText="© 2025 BudStroy. All rights reserved. Building excellence one project at a time."
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Services",
                  href: "services"
                },
                {
                  label: "Projects",
                  href: "projects"
                },
                {
                  label: "Team",
                  href: "team"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Blog",
                  href: "blog"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Careers",
                  href: "#"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Sitemap",
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