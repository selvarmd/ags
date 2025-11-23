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
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const wrapperTop = wrapper.offsetTop;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardStart = wrapperTop + index * viewportHeight;
        const prevCardFullyRevealed = cardStart - viewportHeight;

        const baseOffset = index * 60;

        if (scrollTop < prevCardFullyRevealed) {
          card.style.transform = `translateY(${120 + baseOffset}px) scale(1)`;
          card.style.opacity = `0.9`;
          return;
        }

        const progress = Math.min(
          Math.max((scrollTop - prevCardFullyRevealed) / viewportHeight, 0),
          1
        );

        const translateY = 120 - progress * 120;
        const scale = 1 - progress * 0.02;
        const opacity = 0.9 + progress * 0.1;

        card.style.transform = `translateY(${
          translateY + baseOffset
        }px) scale(${scale})`;
        card.style.opacity = String(opacity);
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <div
      ref={wrapperRef}
      className="portfolio-wrapper"
      style={{ height: `${items.length * 100}vh` }}
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
