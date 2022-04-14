import React from "react";

const Card: React.FC<ICard> = ({ content }) => {
  return (
    <section className="p-4 max-w-md border-2 border-rose-600 text-xl">
      {content}
    </section>
  );
};

export default Card;
