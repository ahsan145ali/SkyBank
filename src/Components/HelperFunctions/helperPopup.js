import React from 'react'
import 'devextreme/dist/css/dx.light.css';
 
import {
    Popup
} from 'devextreme-react/popup';
 

const helperPopup = ({isVisible,togglePopup,content,title}) => {

    const renderContent = (content) =>{
        return(
          <>
            <p>{content}</p>
          </>
        )
      }
    
  return (
    <>
        <Popup contentRender={()=>renderContent(content)}
            visible={isVisible}
            hideOnOutsideClick={true}
            onHiding={togglePopup}
            showTitle={true}
            title={title}
            defaultWidth={700}
            defaultHeight={150}
        />

    </>
  )
}

export default helperPopup