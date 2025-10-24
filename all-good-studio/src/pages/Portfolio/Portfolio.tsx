import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";

import AgsContainer from "@/components/Container/Container";

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

import Styles from "./portfolio.module.scss";

interface PortfolioItem {
  id: number;
  category: string;
  tag: string;
  authorImg: string;
  authorName: string;
  title: string;
  description: string;
  image: string;
  percentTag: string;
  link: string;
}

interface LocationState {
  category?: string;
}

const filters = [
  { key: "all", label: "All" },
  { key: "enterpriseux", label: "Enterprise UX" },
  { key: "websites", label: "Websites" },
  { key: "branding", label: "Branding" },
  { key: "digitalux", label: "Digital UX" },
];

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: "websites",
    tag: "Travel · App",
    authorImg: UserImg1,
    authorName: "Mirza Kim",
    title: "checkout, simplified.",
    description: "From 12 steps to 7. Faster, clearer.",
    image: TestiImg1,
    percentTag: "+38% conversion",
    link: "./hybiz.html",
  },
  {
    id: 2,
    category: "enterpriseux",
    tag: "SaaS · App",
    authorImg: UserImg2,
    authorName: "Robert De Niro",
    title: "MVP in 48h.",
    description: "9 interviews; 2 test rounds; 3 key insights.",
    image: TestiImg2,
    percentTag: "Time-to-test: 48h",
    link: "./hybiz.html",
  },
  {
    id: 3,
    category: "enterpriseux",
    tag: "Fintech · Dashboard",
    authorImg: UserImg3,
    authorName: "Cambria Palencia",
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    image: TestiImg3,
    percentTag: "-47% time-to-task",
    link: "./hybiz.html",
  },
  {
    id: 4,
    category: "digitalux",
    tag: "Fintech · Dashboard",
    authorImg: UserImg3,
    authorName: "Cambria Palencia",
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    image: TestiImg4,
    percentTag: "-47% time-to-task",
    link: "./hybiz.html",
  },
  {
    id: 5,
    category: "branding",
    tag: "Fintech · Dashboard",
    authorImg: UserImg3,
    authorName: "Cambria Palencia",
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    image: TestiImg5,
    percentTag: "-47% time-to-task",
    link: "./hybiz.html",
  },
  {
    id: 6,
    category: "websites",
    tag: "Fintech · Dashboard",
    authorImg: UserImg3,
    authorName: "Cambria Palencia",
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    image: TestiImg6,
    percentTag: "-47% time-to-task",
    link: "./hybiz.html",
  },
  {
    id: 7,
    category: "branding",
    tag: "Fintech · Dashboard",
    authorImg: UserImg3,
    authorName: "Cambria Palencia",
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    image: TestiImg7,
    percentTag: "-47% time-to-task",
    link: "./hybiz.html",
  },
  {
    id: 8,
    category: "enterpriseux",
    tag: "Fintech · Dashboard",
    authorImg: UserImg3,
    authorName: "Cambria Palencia",
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    image: TestiImg8,
    percentTag: "-47% time-to-task",
    link: "./hybiz.html",
  },
  {
    id: 9,
    category: "digitalux",
    tag: "Fintech · Dashboard",
    authorImg: UserImg3,
    authorName: "Cambria Palencia",
    title: "fewer screens, better flow.",
    description: "12 screens to 7; cleaner paths.",
    image: TestiImg9,
    percentTag: "-47% time-to-task",
    link: "./hybiz.html",
  },
];

const Portfolio: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState; // Typed
  const initialCategory = state?.category || "all";
  const [selectedFilter, setSelectedFilter] = useState(initialCategory);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.title = "Portfolio | All Good Studio";
  }, []);

  const filteredData =
    selectedFilter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedFilter);

  return (
    <Box
      component="section"
      className={Styles.portfolioWrapper}
      data-theme="light"
    >
      <AgsContainer>
        <Box className={Styles.titleWrapper}>
          <Typography variant="h2" className={Styles.title}>
            <Box>Where vision</Box>
            <Box>meets execution.</Box>
          </Typography>

          <Typography variant="body1" className={Styles.subtitle}>
            Every project we launch blends strategy, creativity, and precision —
            turning bold ideas into scalable digital experiences that drive
            measurable growth.
          </Typography>
        </Box>

        <Box
          className={Styles.filters}
          role="tablist"
          aria-label="Case filters"
        >
          {filters.map((f) => (
            <Button
              key={f.key}
              onClick={() => {
                setSelectedFilter(f.key);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`${Styles.filterBtn} ${
                selectedFilter === f.key ? Styles.active : ""
              }`}
            >
              {f.label}
            </Button>
          ))}
        </Box>

        <Box className={Styles.portfolioGridWrapper}>
          <Grid container spacing={3} className={Styles.portfolioCardGrid}>
            {filteredData.map((item) => (
              <Box
                key={item.id}
                className={Styles.portfolioCard}
                data-category={item.category}
              >
                <span className={Styles.tag}>{item.tag}</span>

                <Box className={Styles.authorName}>
                  <Box className={Styles.authorImg}>
                    <img src={item.authorImg} alt={item.authorName} />
                  </Box>
                  <Typography variant="h3">{item.authorName}</Typography>
                </Box>

                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1">{item.description}</Typography>

                <Box className={Styles.testiImg}>
                  <img src={item.image} alt={item.title} />
                </Box>

                <Box className={Styles.detWrapper}>
                  <Box className={Styles.percentTag}>{item.percentTag}</Box>
                  <Link to={item.link} className={Styles.readLink}>
                    Read the case
                  </Link>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </AgsContainer>
    </Box>
  );
};

export default Portfolio;
