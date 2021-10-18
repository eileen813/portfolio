import React from "react";
import "./About.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function About() {
  return (
    <>
      <div>
        <img className="headshot" src="./headshot.jpeg" alt="headshot"></img>
        <article>
          As a software engineer with 10+ years as a real estate professional,
          and a thorough understanding of company branding, and client
          satisfaction, I bring a people-facing perspective to the software
          engineering industry. When I'm not coding, I love spending time with
          my family, my pups, gardening, and photography.
        </article>
        <h1>
          Below are a few of my <span>favorite</span> things:
        </h1>
      </div>

      <div className="image-list">
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}

const itemData = [
  {
    img: "./orchid.jpeg",
    title: "Orchid",
    rows: 2,
    cols: 2,
  },
  {
    img: "./hibiscus.jpeg",
    title: "Hibiscus",
  },
  {
    img: "./moo.jpeg",
    title: "Moo-Moo",
  },
  {
    img: "./benson.jpeg",
    title: "Benson",
    cols: 2,
  },
  {
    img: "./orangerose.jpeg",
    title: "Orange Rose",
    cols: 2,
  },
  {
    img: "./plumeria.jpeg",
    title: "Plumeria",
    rows: 2,
    cols: 2,
  },
  {
    img: "curly.jpeg",
    title: "Curly",
  },
  {
    img: "https://cdn.wallpapersafari.com/73/20/efEQvk.jpg",
    title: "Acura",
  },
  {
    img: "./collage.jpeg",
    title: "collage",
    rows: 3,
    cols: 2,
  },

  {
    img: "./bucs.jpeg",
    title: "bucs",
    rows: 2,
    cols: 2,
  },

  {
    img: "./florida.jpeg",
    title: "Florida",
    rows: 5,
    cols: 4,
  },
];
