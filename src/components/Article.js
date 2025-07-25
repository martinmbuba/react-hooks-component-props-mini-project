import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus feature: minutes to read with emojis
  const renderMinutes = () => {
    if (!minutes) return null;
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return (
        <span>
          {"☕️".repeat(cups)} {minutes} min read
        </span>
      );
    } else {
      const boxes = Math.ceil(minutes / 10);
      return (
        <span>
          {"🍱".repeat(boxes)} {minutes} min read
        </span>
      );
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {renderMinutes()}
    </article>
  );
}

export default Article;
