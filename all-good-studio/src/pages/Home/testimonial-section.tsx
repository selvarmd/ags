import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import TiltedCard from "@/components/TiltedCard.jsx";

import AgsContainer from "@/ags-components/Container/Container";

import CollapseIcon from "/images/icons/nav-arrow-up.svg";
import TestiImg1 from "/images/testi-1.svg";
import TestiImg2 from "/images/testi-2.svg";
import TestiImg3 from "/images/testi-3.svg";
import TestiImg4 from "/images/testi-4.svg";
import TestiImg5 from "/images/testi-5.svg";
import TestiImg6 from "/images/testi-6.svg";
import TestiImg7 from "/images/testi-7.svg";
import TestiImg8 from "/images/testi-8.svg";
import TestiImg9 from "/images/testi-9.svg";
import UserImg1 from "/images/user-1.png";
import UserImg2 from "/images/user-2.png";
import UserImg3 from "/images/user-3.png";

import Styles from "./testimonial-section.module.scss";

interface Testimonial {
  category: string;
  tag: string;
  authorName: string;
  authorImg: string;
  title: string;
  description: string;
  testimonialImg: string;
  percentTag: string;
  readLink: string;
}

const testimonials: Testimonial[] = [
  {
    category: "websites",
    tag: "Travel · App",
    authorName: "Mirza Kim",
    authorImg: UserImg1,
    title: "checkout, simplified.",
    description: "From 12 steps to 7. Faster, clearer.",
    testimonialImg: TestiImg1,
    percentTag: "+38% conversion",
    readLink: "#",
  },
  {
    category: "enterpriseUX",
    tag: "SaaS · App",
    authorName: "Robert De Niro",
    authorImg: UserImg2,
    title: "MVP in 48h.",
    description: "9 interviews; 2 test rounds; 3 key insights.",
    testimonialImg: TestiImg2,
    percentTag: "Time-to-test: 48h",
    readLink: "#",
  },
  {
    category: "digitalUX",
    tag: "Fintech · Dashboard",
    authorName: "Cambria Palencia",
    authorImg: UserImg3,
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    testimonialImg: TestiImg3,
    percentTag: "–47% time-to-task",
    readLink: "#",
  },
  {
    category: "branding",
    tag: "Fintech · Dashboard",
    authorName: "Cambria Palencia",
    authorImg: UserImg3,
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    testimonialImg: TestiImg4,
    percentTag: "–47% time-to-task",
    readLink: "#",
  },
  {
    category: "websites",
    tag: "Fintech · Dashboard",
    authorName: "Cambria Palencia",
    authorImg: UserImg3,
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    testimonialImg: TestiImg5,
    percentTag: "–47% time-to-task",
    readLink: "#",
  },
  {
    category: "branding",
    tag: "Fintech · Dashboard",
    authorName: "Cambria Palencia",
    authorImg: UserImg3,
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    testimonialImg: TestiImg6,
    percentTag: "–47% time-to-task",
    readLink: "#",
  },
  {
    category: "enterpriseUX",
    tag: "Fintech · Dashboard",
    authorName: "Cambria Palencia",
    authorImg: UserImg3,
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    testimonialImg: TestiImg7,
    percentTag: "–47% time-to-task",
    readLink: "#",
  },
  {
    category: "enterpriseUX",
    tag: "Fintech · Dashboard",
    authorName: "Cambria Palencia",
    authorImg: UserImg3,
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    testimonialImg: TestiImg8,
    percentTag: "–47% time-to-task",
    readLink: "#",
  },
  {
    category: "enterpriseUX",
    tag: "Fintech · Dashboard",
    authorName: "Cambria Palencia",
    authorImg: UserImg3,
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    testimonialImg: TestiImg9,
    percentTag: "–47% time-to-task",
    readLink: "#",
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Interface UX", value: "enterpriseUX" },
  { label: "Website", value: "websites" },
  { label: "Branding", value: "branding" },
  { label: "Digital UX", value: "digitalUX" },
];

const TestimonialSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredTestimonials = testimonials.filter(
    (t) => activeFilter === "all" || t.category === activeFilter
  );

  const displayedTestimonials = showAll
    ? filteredTestimonials
    : filteredTestimonials.slice(0, 3);

  const totalFiltered = filteredTestimonials.length;
  const remainingCount = Math.max(totalFiltered - 3, 0);

  return (
    <section className={Styles.testimonialSection} data-theme="light">
      <AgsContainer>
        <Box className={Styles.titleWrapper}>
          <Box className={Styles.titleBlock}>
            <Typography variant="h2" className={Styles.testimonialTitle}>
              <Box>Real stories.</Box>
              <Box>exceptional results.</Box>
            </Typography>
            <Box className={Styles.subtitle}>
              <Box>
                We design, build & ship websites and apps that shape the
              </Box>
              <Box>future of your business.</Box>
            </Box>
          </Box>

          <Box
            className={Styles.filters}
            role="tablist"
            aria-label="Case filters"
          >
            {filterOptions.map((filter) => (
              <Button
                key={filter.value}
                className={`${Styles.filterBtn} ${
                  activeFilter === filter.value ? Styles.active : ""
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </Button>
            ))}
          </Box>
        </Box>

        <Box className={Styles.gridWrapper}>
          <Box className={Styles.cardWrap}>
            <Box className={Styles.cardGrid}>
              {displayedTestimonials.map((testi, idx) => (
                <Box
                  key={idx}
                  className={`testi-card ${Styles.testiCard} ${
                    testi.category !== "all" ? "more" : ""
                  }`}
                  data-category={testi.category}
                >
                  <TiltedCard
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                      <Box className={Styles.testiCardContent}>
                        <span className={Styles.tag}>{testi.tag}</span>
                        <Box className={Styles.authorName}>
                          <Box className={Styles.authorImg}>
                            <img src={testi.authorImg} alt={testi.authorName} />
                          </Box>
                          <Typography variant="h3">
                            {testi.authorName}
                          </Typography>
                        </Box>
                        <Typography variant="h4">{testi.title}</Typography>
                        <Typography variant="body2">
                          {testi.description}
                        </Typography>
                        <Box className={Styles.testiImg}>
                          <img src={testi.testimonialImg} alt={testi.title} />
                        </Box>
                        <Box className={Styles.detWrapper}>
                          <Box className={Styles.percentTag}>
                            {testi.percentTag}
                          </Box>
                          <Button
                            href={testi.readLink}
                            className={Styles.readLink}
                          >
                            Read the case
                          </Button>
                        </Box>
                      </Box>
                    }
                  />
                </Box>
              ))}
            </Box>

            {filteredTestimonials.length > 3 && (
              <Box className={Styles.showMore}>
                <Button
                  onClick={() => setShowAll((prev) => !prev)}
                  aria-expanded={showAll}
                  className={Styles.toggleCards}
                >
                  {showAll ? (
                    <img alt="collapse" src={CollapseIcon} />
                  ) : (
                    `+${remainingCount}`
                  )}
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </AgsContainer>
    </section>
  );
};

export default TestimonialSection;
