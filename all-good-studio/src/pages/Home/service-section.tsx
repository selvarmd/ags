import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import AgsContainer from "@/components/Container/Container";
import CustomButton from "@/components/Button/Button";

import AuditFixImg from '/images/icons/audit-fix.png';
import BrandAssetsImg from '/images/icons/brand-assest.png';
import ClickablePrototypeImg from '/images/icons/clickable-prototype.png';
import DesignSystemImg from '/images/icons/design-system.png';
import WireframesImg from '/images/icons/wireframe-ux.png';
import WebLaunchImg from '/images/icons/website-launch.png';

import Styles from './service-section.module.scss';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const services: Service[] = [
  {
    icon: WebLaunchImg,
    title: "2-Days Website Launch",
    description: "Go live fast with a polished, ready-to-use site.",
    features: ["Up to 5 pages", "CMS setup", "Basic SEO", "1 revision", "Launch checklist"],
    price: "from $1,50",
  },
  {
    icon: ClickablePrototypeImg,
    title: "Clickable Prototype in 1 Week",
    description: "Turn your idea into a working demo you can click and test.",
    features: ["Up to 3 flow", "Mobile + desktop screen", "Simple test plan", "1 feedback round", "Handoff file"],
    price: "from $1,000",
  },
  {
    icon: AuditFixImg,
    title: "24-Hour Audit & Fix Plan",
    description: "Get quick clarity on what’s hurting your site or app, plus fixes you can apply right away.",
    features: ["Review of 3 key pages", "Speed + usability check", "Annotated screenshot", "Priority fixes list", "Short video walkthrough"],
    price: "from $400",
  },
  {
    icon: BrandAssetsImg,
    title: "Ready-Made Brand Assets",
    description: "Instant visuals for web, social, and campaigns.",
    features: ["Icon + illustration set", "Social templates", "Website hero images", "AI-made brand graphics", "Simple usage guide"],
    price: "from $600",
  },
  {
    icon: DesignSystemImg,
    title: "Brand Refresh + Design System",
    description: "Update your look and build a toolkit you can reuse everywhere.",
    features: ["Logo refinements/new options", "Updated colors + fonts", "Core buttons + layouts", "Organized library file", "Easy style guide"],
    price: "from $2,000",
  },
  {
    icon: WireframesImg,
    title: "Wireframes + UX Copy in 24 Hours",
    description: "Low-fidelity screens with high-conversion UX writing, ready to test.",
    features: ["Wireframes for up to 5 pages", "Mobile + desktop views", "Conversion-focused text", "Usability best practices", "Clear next-step plan"],
    price: "from $500",
  },
];

const ServiceSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered autoplay
  useEffect(() => {
    const handleScroll = () => {
      if (!swiperRef.current) return;

      const carouselTop = swiperRef.current.el.offsetTop;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollTop + windowHeight * 0.6 >= carouselTop) {
        swiperRef.current.autoplay?.start();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const swiper = swiperRef.current;
        if (!swiper?.autoplay) return;

        if (entry.isIntersecting) {
          swiper.autoplay.start(); // start when visible
        } else {
          swiper.autoplay.stop(); // stop when not visible
        }
      },
      { threshold: 0.3 } // 30% of section must be visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <Box component="section" className={Styles.serviceSection}>
      <AgsContainer>
          <Box className={Styles.titleBlock}>
              <h2>
                <Box className={Styles.serviceTitleTop}>Rapid, premium digital
                </Box>
                <Box className={Styles.serviceTitleMiddle}>solutions—expertly
                </Box>
                <Box className={Styles.serviceTitleBottom}>delivered.</Box>
              </h2>
              <Box className={Styles.serviceTitleDescriptionWrapper}>
                <Typography variant="body1" className={Styles.serviceTitleDescription}>
                    Fast where it helps. Careful where it counts. Fixed scopes. Clear pricing.
                </Typography>
              </Box>
          </Box>
      </AgsContainer>
      <Box className={Styles.serviceGridWrapper}>
        <Box className={Styles.services}>
          <SwiperComponent
            onSwiper={(swiper: SwiperType) => {
              swiperRef.current = swiper;

              // Enable pause on hover
              if (swiper.autoplay) {
                swiper.el.addEventListener("mouseenter", () =>
                  swiper.autoplay?.stop()
                );
                swiper.el.addEventListener("mouseleave", () =>
                  swiper.autoplay?.start()
                );
              }

              // Initially stop autoplay until section appears
              swiper.autoplay?.stop();
            }}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx} className={Styles.serviceSlide}>
                <Box className={Styles.serviceCard}>
                  <Box className={Styles.icon}>
                    <img src={service.icon} alt={service.title} />
                  </Box>
                  <Typography variant="h3">{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                  <Box className={Styles.serciveCardContent}>
                    <ul>
                      {service.features.map((feat: string, i: number) => (
                        <li key={i}>
                          <span/>{feat}
                        </li>
                      ))}
                    </ul>
                    <Box className={Styles.priceWrapper}>
                      <Box className={Styles.price}>{service.price}</Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </Box>
      </Box>
      <AgsContainer>
        <Box className={Styles.reqLinkWrapper}>
          <CustomButton
            variant="contained"
            href="https://calendly.com/divanshu/15min"
            target="_blank"
            className={Styles.reqButton}
            endIcon={
              <svg width="45" height="26" viewBox="0 0 45 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 13H44C32.3592 14.1892 32.1243 24.7405 32.0388 25M31.932 1C32.0175 1.25946 32.2524 11.8108 43.8932 13"
                  stroke="currentColor" stroke-width="1.5" />
              </svg>
            }
          >
            Request your free UI/UX audit
          </CustomButton>
        </Box>
      </AgsContainer>
    </Box>
  );
};

export default ServiceSection;
