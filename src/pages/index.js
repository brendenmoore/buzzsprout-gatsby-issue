import React from 'react'
import {Helmet} from 'react-helmet'

const index = () => {
  return (
    <div style={{maxWidth:'700px', margin:'auto'}}>
      <p>In the build, the player appears at the very top of the page. The embedded player should appear below</p>
      <Helmet>
        <title>Buzzsprout demo</title>
          <script
            type="text/javascript"
            charset="utf-8"
            src="https://www.buzzsprout.com/362981.js?player=small&limit=1&container_id=buzzsprout"
          ></script>
        </Helmet>
        <div id="buzzsprout" style={{width: '100%', height: '200px', backgroundColor: "gray"}}>Player should appear here</div>
        <p>iframe works fine, however, with the embed script, I am able to load the most recent episode automatically, whereas with the iframe I have to provide a specific episode id.</p>
      <iframe
        scrolling="no"
        width="100%"
        height="200"
        frameborder="0"
        title="Podcast Player"
        src="https://www.buzzsprout.com/362981/8283813-easter-sunday-message?client_source=small_player&amp;iframe=true"
      ></iframe>
    </div>
  )
}

export default index
