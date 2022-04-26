import React from 'react';
import './UrlContainer.css';
import URLCard from '../URLCard/URLCard';

const UrlContainer = ({ urls }) => {
  // console.log(urls)
  const urlEls = urls.map((url, index) => {
    return (
      <div className="url">
        <URLCard 
          title={url.title}
          id={url.id}
          key={url.id}
          short={url.short_url}
          long={url.long_url}
        />
      </div>
    )
  })

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
