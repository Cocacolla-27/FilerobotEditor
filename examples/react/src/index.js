import React, { useState } from 'react';
import { render } from 'react-dom';
import FilerobotImageEditor from '../../../projects/react';


const App = () => {
  const src = 'https://cdn.scaleflex.it/demo/stephen-walker-unsplash.jpg';


  return (
    <div>
      <h1>Filerobot Image Editor</h1>

      <img src={src} onClick={() => { toggle(true) }} alt="example image" style={{ maxWidth: '100%' }} />

      <FilerobotImageEditor
        show={true}
        src={src}
      // onClose={() => { toggle(false) }}
      // onOpen={() => console.log('Editor is opened.')}
      // onComplete={(props) => { console.log(props) }}
      // onBeforeComplete={(props) => { console.log(props); return false; }}
      />
    </div>

    // const image_src = 'https://cdn.scaleflex.it/demo/stephen-walker-unsplash.jpg';
    // const url = 'https://www.slazzer.com/api/v1/remove_image_background';
    // const fData = new FormData();
    // fData.append('source_image_file', image_src);
    // // fData.append('output_image_format', 'base64')	
    // axios.post(
    //   url,
    //   fData,
    //   {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       'API-KEY': '9fd6e94f3dd24659b7961cae090cdac6'
    //     }
    //   }
    // )
    //   .then((res) => {
    //     console.log("getting data  : ", res)
    //     // src = res.output_image_url
    //     // fetch(res.data.output_image_url)
    //     // .then(res => res.blob())
    //     // .then(blob => {
    //     //   const nfile = new File([blob], "File name",{ type: "image/png" })
    //     //   nfile.uid = uid;
    //     //   onChange(nfile);

    //     // })
    //   })
  )
};

render(<App />, document.getElementById('app'));
