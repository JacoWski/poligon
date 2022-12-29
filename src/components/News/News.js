import React from "react";

import Author from "./Author";

const style = {
  backgroundColor: 'azure',
  border: '#61dafb 1px solid',
  padding: 10,
  para: {
    backgroundColor: 'antiquewhite'
  }
};

const News = (props) => {
  const { header, intro, author } = props;
  return(
    <div style={style}>
      <h2>{header}</h2>
      <p style={style.para}>{intro}</p>
      <Author author={author}/>
    </div>
  );
};

export default News;