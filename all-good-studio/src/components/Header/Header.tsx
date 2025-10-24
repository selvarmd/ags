import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "../Button/Button";
import Styles from "./Header.module.scss";
import AgsContainer from "../Container/Container";

interface HeaderProps {
  theme: "light" | "dark";
}

const menuItems = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "stories", label: "Stories" },
  { id: "connect", label: "Connect" },
];

export default function Header({ theme }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [headerTheme, setHeaderTheme] = useState<"light" | "dark">(theme);
  // const [appTheme, setAppTheme] = useState<"light-theme" | "dark-theme">("light-theme");


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      highlightSection();
      updateHeaderTheme();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply theme class to <html> whenever theme changes
  // useEffect(() => {
  //   const html = document.documentElement;
  //   html.classList.remove("light-theme", "dark-theme");
  //   html.classList.add(appTheme);
  // }, [appTheme]);

  // Toggle theme and update <html> class
  // const toggleTheme = () => {
  //   setAppTheme((prev) => {
  //     const next = prev === "light-theme" ? "dark-theme" : "light-theme";
  //     document.documentElement.classList.remove("light-theme", "dark-theme");
  //     document.documentElement.classList.add(next);
  //     return next;
  //   });
  // };

  const highlightSection = () => {
    const scrollPos = window.scrollY + 100;
    for (const item of menuItems) {
      const el = document.getElementById(item.id);
      if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
        setActive(item.id);
        return;
      }
    }
    setActive("");
  };

  const updateHeaderTheme = () => {
    const scrollPos = window.scrollY + 100;
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.clientHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        const theme = section.getAttribute("data-theme") as "light" | "dark";
        if (theme) setHeaderTheme(theme);
      }
    });
  };

  const handleClick = (id: string) => {
    setAnchorEl(null);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppBar
      position="fixed"
      className={`${Styles.header} ${scrolled && Styles.scrolled} ${headerTheme === "dark" ? Styles.darkHeader : Styles.lightHeader}`}
    >
      <AgsContainer>
        <Toolbar disableGutters className={Styles.toolbar}>
          <Box className={Styles.logo}>
            <svg width="139" height="56" viewBox="0 0 139 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M20.5 19.1587C20.5 19.1587 19.2265 17.4453 15.9185 17.3866C10.6262 17.2928 7.36327 22.1138 6.75568 26.6901C6.11148 31.5421 6.31419 36.4992 11.8462 37.3226C14.9444 37.7837 19.4819 35.5505 19.4819 35.5505"
                  stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path
                  d="M85.667 31.9242C89.9539 27.5367 86.2028 16.3853 79.7726 16.3853C73.3424 16.3853 71.7344 20.9555 72.8061 26.8969C73.8778 32.8382 80.3084 37.4085 85.667 31.9242Z"
                  stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path
                  d="M134.448 21.8531C124.17 8.79053 110.294 29.5105 117.489 35.8166C124.683 42.1227 133.934 35.8166 134.448 27.7088C134.962 19.601 131.536 9.69137 129.309 3.38528"
                  stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path
                  d="M105.608 32.9236C111.443 29.4878 110.964 17.0804 104.243 15.4671C97.5219 13.8539 94.0667 18.4323 93.7172 24.5278C93.3677 30.6232 98.3146 37.2184 105.608 32.9236Z"
                  stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path
                  d="M51.389 8.40132C52.5025 7.58485 52.7432 6.02034 51.9267 4.90691C51.1102 3.79348 49.5457 3.55276 48.4323 4.36924L49.9107 6.38528L51.389 8.40132ZM39.3921 35.2853C39.5787 36.6533 40.8389 37.6111 42.207 37.4245C43.575 37.238 44.5328 35.9777 44.3462 34.6097L41.8692 34.9475L39.3921 35.2853ZM42.3717 20.2057L44.8013 20.7947L42.3717 20.2057ZM63.0486 26.2668C63.343 27.6158 64.6752 28.4707 66.0241 28.1764C67.3731 27.882 68.228 26.5499 67.9337 25.2009L65.4912 25.7339L63.0486 26.2668ZM65.4912 31.7227L67.986 31.5626C67.8996 30.2158 66.7599 29.1808 65.4111 29.224C64.0622 29.2672 62.9912 30.3732 62.9912 31.7227H65.4912ZM44.5879 42.958C45.9589 43.1219 47.2031 42.1434 47.367 40.7724C47.531 39.4015 46.5524 38.1572 45.1815 37.9933L44.8847 40.4756L44.5879 42.958ZM49.9107 6.38528L48.4323 4.36924C46.755 5.59924 45.0408 7.84249 43.5942 10.3992C42.1105 13.0214 40.763 16.2307 39.9421 19.6167L42.3717 20.2057L44.8013 20.7947C45.5037 17.8975 46.6692 15.1179 47.9459 12.8614C49.2598 10.5394 50.5535 9.01405 51.389 8.40132L49.9107 6.38528ZM42.3717 20.2057L39.9421 19.6167C38.475 25.6679 38.8698 31.4555 39.3921 35.2853L41.8692 34.9475L44.3462 34.6097C43.8633 31.0685 43.5434 25.9834 44.8013 20.7947L42.3717 20.2057ZM65.4912 25.7339L67.9337 25.2009C67.7116 24.1832 67.4534 22.7648 67.1088 21.5092C66.7544 20.2175 66.2303 18.7656 65.3028 17.5105C64.3288 16.1927 62.9513 15.1506 61.0675 14.6894C59.2548 14.2456 57.167 14.3866 54.7884 15.0278L55.4392 17.4416L56.0899 19.8554C57.9834 19.345 59.1625 19.3707 59.8785 19.546C60.5234 19.7039 60.9364 20.015 61.2817 20.4823C61.6735 21.0123 61.9976 21.7775 62.2871 22.8324C62.5865 23.9234 62.7681 24.9811 63.0486 26.2668L65.4912 25.7339ZM55.4392 17.4416L54.7884 15.0278C51.7158 15.8562 49.7169 18.1517 48.5692 20.7291C47.4301 23.2871 47.0227 26.3167 47.1623 29.1949C47.3019 32.0753 47.9995 35.0146 49.2757 37.4059C50.535 39.7653 52.565 41.9376 55.491 42.474L55.9418 40.015L56.3926 37.5559C55.5491 37.4013 54.5635 36.6943 53.6868 35.0516C52.827 33.4407 52.268 31.2549 52.1564 28.9527C52.0447 26.6483 52.3911 24.4376 53.1368 22.7631C53.8738 21.108 54.8905 20.1788 56.0899 19.8554L55.4392 17.4416ZM55.9418 40.015L55.491 42.474C60.2409 43.3447 63.5916 41.5044 65.5933 38.8834C67.4386 36.4671 68.107 33.4479 67.986 31.5626L65.4912 31.7227L62.9963 31.8828C63.0428 32.608 62.706 34.426 61.6195 35.8487C60.6894 37.0667 59.1817 38.0672 56.3926 37.5559L55.9418 40.015ZM65.4912 31.7227H62.9912C62.9912 36.1967 62.6983 40.7949 60.381 44.351C58.2078 47.686 53.8485 50.6571 44.3248 50.8754L44.3821 53.3747L44.4394 55.874C55.0195 55.6316 61.2148 52.2299 64.5701 47.0808C67.7814 42.1527 67.9912 36.1553 67.9912 31.7227H65.4912ZM44.3821 53.3747L44.3248 50.8754C39.491 50.9861 36.953 50.1507 35.8151 49.3308C35.2933 48.9549 35.117 48.6235 35.0504 48.4043C34.9805 48.1746 34.9658 47.8496 35.1225 47.396C35.4586 46.4232 36.51 45.1458 38.3014 44.1665C40.0419 43.2151 42.2552 42.6791 44.5879 42.958L44.8847 40.4756L45.1815 37.9933C41.7344 37.5812 38.482 38.3696 35.9032 39.7792C33.3755 41.1609 31.2542 43.2811 30.3966 45.7633C29.9565 47.0373 29.8396 48.4542 30.2665 49.8585C30.6966 51.2733 31.6158 52.4679 32.8923 53.3876C35.3511 55.1591 39.2212 55.9936 44.4394 55.874L44.3821 53.3747Z"
                  fill="#00DC72" />
              <path
                  d="M24.5356 15.3853C24.5356 15.3853 23.2622 22.6165 23.5395 27.5894C23.8219 32.6524 26.0296 36.9771 26.5277 38.3853M33.5 35.5689C33.5 35.5689 32.0059 28.5281 33.002 21.9567"
                  stroke="#00DC72" strokeWidth="5" strokeLinecap="round" />
              <path
                  d="M75.7013 45.3853C75.2837 45.3853 74.9079 45.3178 74.5738 45.1827C74.2397 45.0421 73.9773 44.8452 73.7863 44.592C73.5955 44.3389 73.5 44.0435 73.5 43.706H74.5917C74.6156 43.9591 74.72 44.1673 74.9049 44.3304C75.0958 44.4936 75.3613 44.5752 75.7013 44.5752C76.0533 44.5752 76.3277 44.4964 76.5246 44.3389C76.7214 44.1757 76.8199 43.9676 76.8199 43.7144C76.8199 43.5175 76.7572 43.3572 76.632 43.2334C76.5126 43.1096 76.3605 43.014 76.1756 42.9465C75.9966 42.879 75.7461 42.8058 75.4239 42.7271C75.0183 42.6258 74.6872 42.5245 74.4306 42.4233C74.1801 42.3164 73.9653 42.1532 73.7863 41.9338C73.6074 41.7144 73.5179 41.4218 73.5179 41.0562C73.5179 40.7186 73.6074 40.4233 73.7863 40.1701C73.9653 39.9169 74.2159 39.7228 74.538 39.5878C74.8602 39.4528 75.233 39.3853 75.6566 39.3853C76.2591 39.3853 76.7513 39.5287 77.1331 39.8157C77.5208 40.097 77.7356 40.4851 77.7774 40.9802H76.6498C76.632 40.7664 76.5246 40.5836 76.3277 40.4317C76.1308 40.2798 75.8713 40.2038 75.5492 40.2038C75.2569 40.2038 75.0183 40.2742 74.8333 40.4148C74.6484 40.5555 74.5559 40.758 74.5559 41.0224C74.5559 41.2024 74.6126 41.3515 74.7259 41.4697C74.8452 41.5822 74.9944 41.6722 75.1734 41.7397C75.3523 41.8072 75.5969 41.8804 75.9071 41.9591C76.3188 42.066 76.6528 42.1729 76.9094 42.2798C77.1718 42.3867 77.3926 42.5527 77.5715 42.7777C77.7565 42.9971 77.8489 43.2925 77.8489 43.6638C77.8489 43.9619 77.7624 44.2432 77.5894 44.5076C77.4224 44.7721 77.1748 44.9858 76.8467 45.149C76.5246 45.3065 76.1428 45.3853 75.7013 45.3853Z"
                  fill="currentColor" />
              <path d="M84.7707 39.4612V40.246H83.1152V45.3262H82.0951V40.246H80.4307V39.4612H84.7707Z"
                  fill="currentColor" />
              <path
                  d="M88.5152 39.4612V43.1996C88.5152 43.6441 88.6375 43.9788 88.8821 44.2038C89.1326 44.4289 89.4786 44.5414 89.9201 44.5414C90.3675 44.5414 90.7135 44.4289 90.9581 44.2038C91.2087 43.9788 91.334 43.6441 91.334 43.1996V39.4612H92.3541V43.1827C92.3541 43.6609 92.2437 44.066 92.023 44.3979C91.8023 44.7299 91.507 44.9774 91.1371 45.1406C90.7672 45.3037 90.3586 45.3853 89.9112 45.3853C89.4637 45.3853 89.0551 45.3037 88.6852 45.1406C88.3213 44.9774 88.032 44.7299 87.8172 44.3979C87.6025 44.066 87.4951 43.6609 87.4951 43.1827V39.4612H88.5152Z"
                  fill="currentColor" />
              <path
                  d="M97.4138 39.4612C98.076 39.4612 98.6546 39.5822 99.1498 39.8241C99.6509 40.0604 100.036 40.4036 100.304 40.8536C100.579 41.2981 100.716 41.8185 100.716 42.4148C100.716 43.0112 100.579 43.5287 100.304 43.9676C100.036 44.4064 99.6509 44.7439 99.1498 44.9802C98.6546 45.2109 98.076 45.3262 97.4138 45.3262H95.3825V39.4612H97.4138ZM97.4138 44.5414C98.1416 44.5414 98.6994 44.3557 99.0871 43.9844C99.4749 43.6131 99.6688 43.0899 99.6688 42.4148C99.6688 41.7341 99.4749 41.2024 99.0871 40.8199C98.6994 40.4373 98.1416 40.246 97.4138 40.246H96.4026V44.5414H97.4138Z"
                  fill="currentColor" />
              <path d="M104.447 39.4612V45.3262H103.427V39.4612H104.447Z" fill="currentColor" />
              <path
                  d="M110.323 45.3853C109.745 45.3853 109.211 45.2587 108.722 45.0055C108.238 44.7467 107.854 44.3895 107.567 43.9338C107.287 43.4725 107.147 42.9549 107.147 42.3811C107.147 41.8072 107.287 41.2925 107.567 40.8368C107.854 40.3811 108.238 40.0266 108.722 39.7735C109.211 39.5147 109.745 39.3853 110.323 39.3853C110.908 39.3853 111.442 39.5147 111.925 39.7735C112.414 40.0266 112.799 40.3811 113.079 40.8368C113.36 41.2925 113.5 41.8072 113.5 42.3811C113.5 42.9549 113.36 43.4725 113.079 43.9338C112.799 44.3895 112.414 44.7467 111.925 45.0055C111.442 45.2587 110.908 45.3853 110.323 45.3853ZM110.323 44.5498C110.735 44.5498 111.102 44.4626 111.424 44.2882C111.746 44.1082 111.997 43.855 112.176 43.5287C112.361 43.1968 112.453 42.8143 112.453 42.3811C112.453 41.9479 112.361 41.5681 112.176 41.2418C111.997 40.9155 111.746 40.6652 111.424 40.4908C111.102 40.3164 110.735 40.2292 110.323 40.2292C109.912 40.2292 109.545 40.3164 109.223 40.4908C108.901 40.6652 108.647 40.9155 108.462 41.2418C108.283 41.5681 108.194 41.9479 108.194 42.3811C108.194 42.8143 108.283 43.1968 108.462 43.5287C108.647 43.855 108.901 44.1082 109.223 44.2882C109.545 44.4626 109.912 44.5498 110.323 44.5498Z"
                  fill="currentColor" />
            </svg>
          </Box>
          {/* Desktop Nav */}
          <Box className={Styles.navDesktop}>
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className ={`${Styles.navItem} ${active === item.id && Styles.active}`}
              >
                {item.label}
              </Button>
            ))}
            <CustomButton
              variant="contained"
              href="https://calendly.com/divanshu/15min"
              target="_blank"
              rel="noreferrer"
              className={Styles.bookButton}
            >
              Book a 15-min intro
            </CustomButton>
            {/* Toggle button */}
            {/* <CustomButton
              variant="icon"
              onClick={toggleTheme}
              className={Styles.themeButton}
              aria-label="Toggle theme"
            >
              {appTheme === "light-theme" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </CustomButton> */}
          </Box>

          {/* Mobile Nav */}
          <Box className={Styles.navMobile}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              PaperProps={{ sx: { mt: 1 } }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  selected={active === item.id}
                >
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem>
                <CustomButton
                  href="https://calendly.com/divanshu/15min"
                  target="_blank"
                  rel="noreferrer"
                  className={Styles.bookButtonMobile}
                  variant="outlined"
                >
                  Book a 15-min intro
                </CustomButton>
              </MenuItem>
            </Menu>
            {/* Toggle button */}
            {/* <CustomButton
              variant="icon"
              onClick={toggleTheme}
              className={Styles.themeButton}
              aria-label="Toggle theme"
            >
              {appTheme === "light-theme" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </CustomButton> */}
          </Box>
        </Toolbar>
      </AgsContainer>
    </AppBar>
  );
}
