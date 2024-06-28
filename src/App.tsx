import { IconButton, css } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import "./App.css";
import Portfolio from "./portfolio";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

function App() {
  return (
    <>
      <Carousel
        autoFocus
        useKeyboardArrows
        showStatus={false}
        showIndicators={false}
        autoPlay={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <div
              css={css`
                display: inline-flex;
                align-items: center;
                position: absolute;
                z-index: 2;
                top: 0;
                bottom: 0;
                left: 15px;
                &:hover {
                  .MuiIconButton-root {
                    opacity: 1;
                  }
                }
              `}
            >
              <IconButton
                css={css`
                  opacity: 0;
                  transition: opacity 100ms ease-in;
                `}
                onClick={onClickHandler}
                title={"이전 슬라이드"}
              >
                <ArrowBackIosRoundedIcon fontSize="large" />
              </IconButton>
            </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <div
              css={css`
                display: inline-flex;
                align-items: center;
                position: absolute;
                z-index: 2;
                top: 0;
                bottom: 0;
                right: 15px;
                &:hover {
                  .MuiIconButton-root {
                    opacity: 1;
                  }
                }
              `}
            >
              <IconButton
                css={css`
                  opacity: 0;
                  transition: opacity 100ms ease-in;
                `}
                onClick={onClickHandler}
                title={"다음 슬라이드"}
              >
                <ArrowForwardIosRoundedIcon fontSize="large" />
              </IconButton>
            </div>
          )
        }
      >
        {Portfolio.map((item, index) => (
          <div key={index}>
            <img src={item} alt={item} />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default App;
