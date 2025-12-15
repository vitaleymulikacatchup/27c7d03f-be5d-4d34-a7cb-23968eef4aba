"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardCarouselSplit from "@/components/sections/hero/HeroBillboardCarouselSplit";
import MediaSplitTabsAbout from "@/components/sections/about/MediaSplitTabsAbout";
import FeatureCardFour from "@/components/sections/feature/FeatureCardFour";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardEleven from "@/components/sections/team/TeamCardEleven";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import BlogCardFour from "@/components/sections/blog/BlogCardFour";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Webild"
          button={{ text: "Get Started", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarouselSplit
          title="Welcome to Webild"
          buttons={[
            { text: "Get Started", href: "#contact" },
            { text: "Learn More", href: "#about" },
          ]}
          mediaItems={[
            { imageSrc: "/images/noise.webp", imageAlt: "Webild Hero Image 1" },
            { imageSrc: "/images/noise.webp", imageAlt: "Webild Hero Image 2" },
            { imageSrc: "/images/noise.webp", imageAlt: "Webild Hero Image 3" },
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="About Us"
          description="We are a team of passionate developers and designers"
          mediaItems={[
            { imageSrc: "/images/noise.webp", imageAlt: "Team" },
            { imageSrc: "/images/noise.webp", imageAlt: "Office" },
            { imageSrc: "/images/noise.webp", imageAlt: "Meeting" },
            { imageSrc: "/images/noise.webp", imageAlt: "Design" },
            { imageSrc: "/images/noise.webp", imageAlt: "Development" },
            { imageSrc: "/images/noise.webp", imageAlt: "Launch" },
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardFour
          title="Our Services"
          description="What we offer"
          features={[
            {
              id: "1",
              title: "Web Development",
              description: "Custom web applications",
              imageSrc: "/images/noise.webp",
            },
            {
              id: "2",
              title: "UI/UX Design",
              description: "Beautiful user experiences",
              imageSrc: "/images/noise.webp",
            },
            {
              id: "3",
              title: "Consulting",
              description: "Strategic guidance",
              imageSrc: "/images/noise.webp",
            },
            {
              id: "4",
              title: "Maintenance",
              description: "Ongoing support",
              imageSrc: "/images/noise.webp",
            },
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="By the numbers"
          metrics={[
            { id: "1", value: "100+", label: "Projects Completed" },
            { id: "2", value: "50+", label: "Team Members" },
            { id: "3", value: "1000+", label: "Clients Served" },
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardEleven
          groups={[
            {
              id: "leadership",
              groupTitle: "Leadership",
              members: [
                {
                  id: "1",
                  title: "John Doe",
                  subtitle: "CEO",
                  detail: "john@webild.com",
                  imageSrc: "/images/noise.webp",
                },
                {
                  id: "2",
                  title: "Jane Smith",
                  subtitle: "CTO",
                  detail: "jane@webild.com",
                  imageSrc: "/images/noise.webp",
                },
              ],
            },
            {
              id: "design",
              groupTitle: "Design Team",
              members: [
                {
                  id: "3",
                  title: "Sarah Johnson",
                  subtitle: "Lead Designer",
                  detail: "sarah@webild.com",
                  imageSrc: "/images/noise.webp",
                },
                {
                  id: "4",
                  title: "Mike Brown",
                  subtitle: "UI Designer",
                  detail: "mike@webild.com",
                  imageSrc: "/images/noise.webp",
                },
              ],
            },
          ]}
          animationType="slide-up"
          title="Meet Our Team"
          description="The talented people behind our success"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Clients Say"
          description="Testimonials from happy customers"
          testimonials={[
            {
              id: "1",
              nameTitle: "Client Name, Company",
              quote: "Great service and excellent results!",
              imageSrc: "/images/noise.webp",
            },
            {
              id: "2",
              nameTitle: "Another Client, Business",
              quote: "Highly recommended for quality work.",
              imageSrc: "/images/noise.webp",
            },
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted By"
          description="Leading companies trust us"
          logos={[
            "/images/noise.webp",
            "/images/noise.webp",
            "/images/noise.webp",
            "/images/noise.webp",
            "/images/noise.webp",
            "/images/noise.webp",
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardFour
          title="Latest Articles"
          description="Read our latest insights"
          blogs={[
            {
              id: "1",
              title: "Blog Post Title",
              items: ["Category", "Jan 15, 2025", "5 min read"],
              imageSrc: "/images/noise.webp",
            },
            {
              id: "2",
              title: "Another Blog Post",
              items: ["Technology", "Jan 12, 2025", "8 min read"],
              imageSrc: "/images/noise.webp",
            },
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions"
          faqs={[
            {
              id: "1",
              title: "What services do you offer?",
              content: "We offer web development, UI/UX design, and consulting services.",
            },
            {
              id: "2",
              title: "How long does a project take?",
              content: "Project timelines vary based on complexity and scope.",
            },
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="We'd love to hear from you"
          imageSrc="/images/noise.webp"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          logoText="Webild"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" },
              ],
            },
            {
              title: "Product",
              items: [
                { label: "Features", href: "#" },
                { label: "Pricing", href: "#" },
              ],
            },
          ]}
          copyrightText="© Webild, Inc. 2025"
        />
      </div>
    </ThemeProvider>
  );
}
