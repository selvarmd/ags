import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Styles from "./faq-section.module.scss";
import AgsContainer from "@/components/Container/Container";

const faqData = [
  {
    question: "Where do I get started?",
    answer:
      "Book a 15-min intro. Meet the lead designer, align on goals, and receive a scope, timeline, and fixed quote within 24 hours.",
  },
  {
    question: "What if I don't like the design?",
    answer: "We collaborate closely with you and refine until you're satisfied.",
  },
  {
    question: "I already have Figma—can you develop it?",
    answer: "Yes, we can directly develop from your Figma designs.",
  },
  {
    question: "Can you do mobile apps?",
    answer: "Absolutely! We design and build mobile apps for iOS and Android.",
  },
  {
    question: "What exactly do I get?",
    answer:
      "A complete design package with dedicated designer, up to 5 pages/screens, source files, and fixed pricing",
  },
  {
    question: "How does the delivery credit work?",
    answer:
      "If we miss a milestone, the value is credited back to you for future work or invoice deduction.",
  },
];

function FaqSection() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box component="section" className={Styles.faqSection} data-theme="light">
      <AgsContainer>
        {/* Title */}
        <Box className={Styles.titleBlock}>
          <Typography variant="h2" className={Styles.title}>
              <div>Have more questions?</div>
          </Typography>
          <Box className={Styles.subtitleWrapper}>
            <Typography variant="body1" className={Styles.subtitle}>
              Pricing / Process / Scope / Legal
            </Typography>
          </Box>
        </Box>

        {/* FAQ Accordion */}
        <Box className={Styles.accordionWrapper}>
          {faqData.map((item, index) => (
            <Accordion  key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              className={Styles.accordionItem}
            >
              <AccordionSummary
                expandIcon={
                  <span
                    className={`${Styles.expandIcon} ${
                      expanded === index ? Styles.expanded : ''
                    }`}
                  />
                  // <span className={`${Styles.customIcon} ${ expanded === index ? Styles.expanded : Styles.collapsed}`}></span>
                }
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
                className={Styles.accordionHeader}
              >
                <Typography className={Styles.accordionQuestion}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={Styles.accordionBody}>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </AgsContainer>
    </Box>
  );
}

export default FaqSection;
