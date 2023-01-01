import React from "react";

import News from "components/News";
import Card from 'components/Card';

const posts = [
    { id: 1, author: 'JacoWski', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział' },
    { id: 2, author: 'JacoWski', title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił' },
    { id: 3, author: 'JacoWski', title: 'Adam Małysz Zgolił wąs', intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy' }
  ];

const Article = () => {
    return(
        <div className="article">
            <Card title={'Pilne: Co to był za dzień!'}
                    intro={'Tego świat jeszcze nie widział'}
                    content={'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'}
                    showMore
            />
            {posts.map((e) => (
                <News key={`news-${e.id}`} header={e.title} intro={e.intro} author={e.author} />
            ))}
        </div>
    );
};

export default Article;
