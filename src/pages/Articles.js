import React from "react";

import News from "../components/News";

const posts = [
    { id: 1, author: 'JacoWski', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział' },
    { id: 2, author: 'JacoWski', title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił' },
    { id: 3, author: 'JacoWski', title: 'Adam Małysz Zgolił wąs', intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy' }
  ];

const Article = () => {
    return(
        <>
            {posts.map((e) => (
                <News key={`news-${e.id}`} header={e.title} intro={e.intro} author={e.author} />
            ))}
        </>
    );
};

export default Article;
