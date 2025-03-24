import React from 'react';
import articleImg from '../../assets/images/tumb_dashboards.svg'

export class Article extends React.Component {
  render() {
    return (
      <article>
        <img src={articleImg} alt="" />
        <div className="article-infos">
            <h2>Desingnin Dashboards</h2>
            <h3>NASA</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed saepe iusto expedita esse voluptates vitae dolorum dignissimos eos quae a magnam maxime, aliquid numquam quam sint quis quasi eligendi unde?</p>
        </div>
      </article>
    );
  }
}