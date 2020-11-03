import React,{useEffect,useCallback} from 'react';
import s from '../../../styles/slaider.module.scss'
import s_FoolScreen from '../../../styles/foolScreen.module.scss'
import Navigation from '../navigation/Navigation';
import classNames from 'classnames';
import FullScreenDiv from './FullScreen';

const SliderOneImage = ({ image, currentClick,setCurrentClick, settingsCmponent,hendlerPrevClick,hendlerNextClick,setFoolScreen,setFullScreenDiv,openFullScreen }) => {
    
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setFoolScreen(false)
           }

         };
         window.addEventListener('keydown', handleEsc);
     
         return () => {
           window.removeEventListener('keydown', handleEsc);
         };
    }, []);



    return (<FullScreenDiv openDiv={openFullScreen}>
        <div className={classNames({[`${s_FoolScreen.wrapper_FoolScreen}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.wrapper}`]: !settingsCmponent.foolScreen})}>
            <div className={classNames({[`${s_FoolScreen.slider_FoolScreen}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.slider}`]: !settingsCmponent.foolScreen})}>
                <div className={classNames({[`${s_FoolScreen.slides_FoolScreen}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.slides}`]: !settingsCmponent.foolScreen})}>
                    <img className={classNames({[`${s_FoolScreen.slide_FoolScreen}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.slide}`]: !settingsCmponent.foolScreen})} src={image[currentClick].img} onClick={()=>setFullScreenDiv()} />
                </div>
            </div>
            <Navigation settingsCmponent={settingsCmponent} setCurrentClick={setCurrentClick} hendlerPrevClick={hendlerPrevClick} hendlerNextClick={hendlerNextClick} currentImg={image[currentClick]} image={image}/>
        </div>
    </FullScreenDiv>)
}

export default SliderOneImage