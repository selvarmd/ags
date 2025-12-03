import { useEffect, useRef } from "react";
import "./portfolio-carousel.scss";
import CustomButton from "@/ags-components/Button/Button";
import { Link } from "react-router-dom";

type PortfolioItem = {
  id: string | number;
  title?: string;
  type?: string;
  logo?: string;
  image: string;
  href?: string;
};

type Props = {
  items: PortfolioItem[];
};

export default function PortfolioStackedScroll({ items }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const getCardHeight = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width < 576) return 400;
      if (width < 768) return 450;
      if (width < 992) return 500;
      if (width < 1200) return Math.max(height * 0.7, 600);
      if (width < 1400) return Math.max(height * 0.75, 650);
      return Math.max(height * 0.8, 700);
    };

    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const cardHeight = getCardHeight();
      const scrollTop = window.scrollY;
      const wrapperTop = wrapper.offsetTop;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardStart = wrapperTop + index * cardHeight;
        const prevCardFullyRevealed = cardStart - cardHeight;

        const baseOffset = index * (cardHeight * 0.067); // 40px for 600px height

        if (scrollTop < prevCardFullyRevealed) {
          card.style.transform = `translateY(${cardHeight * 0.133 + baseOffset}px) scale(1)`;
          card.style.opacity = `0.9`;
          return;
        }

        const progress = Math.min(
          Math.max((scrollTop - prevCardFullyRevealed) / cardHeight, 0),
          1
        );

        const translateY = cardHeight * 0.133 - progress * cardHeight * 0.133;
        const scale = 1 - progress * 0.02;
        const opacity = 0.9 + progress * 0.1;

        card.style.transform = `translateY(${
          translateY + baseOffset
        }px) scale(${scale})`;
        card.style.opacity = String(opacity);
      });
    };

    const onResize = () => {
      const wrapper = wrapperRef.current;
      if (wrapper) {
        const cardHeight = getCardHeight();
        const width = window.innerWidth;
        const extraSpace = width >= 992 ? cardHeight * 0.5 : 200;
        wrapper.style.height = `${items.length * cardHeight + extraSpace}px`;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    onResize(); // Set initial height
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [items]);

  return (
    <div
      ref={wrapperRef}
      className="portfolio-wrapper"
    >
      {items.map((it, idx) => (
        <div
          key={it.id}
          ref={(el) => (cardRefs.current[idx] = el)}
          className="portfolio-card"
          style={{ zIndex: idx + 1 }}
        >
          <div className="portfolio-card-inner">
            {it.type === "custom" ? (
              // ⭐ Your custom last div block here
              <div className="category-wrapper">
                <div className="title">Browse by Category</div>
                <ul className="">
                  <li>
                    <Link to="/portfolio" state={{ category: "enterpriseux" }}>
                      Enterprise UX
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio" state={{ category: "websites" }}>
                      Websites
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio" state={{ category: "digitalux" }}>
                      Digital UX
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio" state={{ category: "branding" }}>
                      Branding
                    </Link>
                  </li>
                </ul>
                <div className="btn-wrapper">
                  <Link to="/portfolio" state={{ category: "all" }}>
                    <CustomButton
                      variant="contained"
                      className="view-all-btn"
                      endIcon={
                        <svg
                          width="45"
                          height="26"
                          viewBox="0 0 45 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 13H44C32.3592 14.1892 32.1243 24.7405 32.0388 25M31.932 1C32.0175 1.25946 32.2524 11.8108 43.8932 13"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                        </svg>
                      }
                    >
                      View all Projects
                    </CustomButton>
                  </Link>
                </div>
              </div>
            ) : (
              // existing layout
              <a href={it.href || "#"} className="portfolio-link">
                <div className="portfolio-header">
                  <div className="portfolio-logo">
                    {it.logo && (
                      <img
                        src={it.logo}
                        alt={it.title}
                        className="portfolio-logo-img"
                      />
                    )}
                  </div>
                  <div className="portfolio-info">{it.type}</div>
                </div>

                <div className="portfolio-image-wrapper">
                  <img
                    src={it.image}
                    alt={it.title}
                    className="portfolio-image"
                  />
                </div>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
