import React,{useCallback} from 'react';
import s from '../../../styles/slaider.module.scss'
import Navigation from '../navigation/Navigation';
import s_FoolScreen from '../../../styles/foolScreen.module.scss'
import classNames from 'classnames';
import FullScreenDiv from './FullScreen';

const SliderThreeImage = ({ image, currentClick,setCurrentClick, settingsCmponent,hendlerPrevClick,hendlerNextClick,setFoolScreen,setFullScreenDiv,openFullScreen }) => {

    let  ImagePrev = useCallback(() =>{
        if(currentClick === 0){
            return image[image.length-1].img
        }  else {
            return image[currentClick-1].img
        }
    },[currentClick]);

    let  ImageNext = useCallback(() =>{
        if(currentClick === image.length-1){
            return image[0].img
        }  else {
            return image[currentClick+1].img
        }
    },[currentClick]);

    React.useEffect(() => {
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
        <div className={classNames({[`${s_FoolScreen.FoolScreen_SliderThreeImage_wrapper}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.SliderThreeImage_wrapper}`]: !settingsCmponent.foolScreen})}>
            <div className={classNames({[`${s_FoolScreen.FoolScreen_SliderThreeImage_slider}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.SliderThreeImage_slider}`]: !settingsCmponent.foolScreen})}>
                <div className={classNames({[`${s_FoolScreen.FoolScreen_SliderThreeImage_slides_prev}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.SliderThreeImage_slides_prev}`]: !settingsCmponent.foolScreen})}>
                    <img className={classNames({[`${s_FoolScreen.FoolScreen_SliderThreeImage_slide}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.SliderThreeImage_slide}`]: !settingsCmponent.foolScreen})} src={ImagePrev()} />
                </div>
                <div className={`${classNames({[`${s_FoolScreen.FoolScreen_SliderThreeImage_slides_middle}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.SliderThreeImage_slides_middle}`]: !settingsCmponent.foolScreen})}`}>
                    <img className={classNames({[`${s_FoolScreen.FoolScreen_SliderThreeImage_slide}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.SliderThreeImage_slide}`]: !settingsCmponent.foolScreen})} src={image[currentClick].img} onClick={()=>{setFullScreenDiv()}}/>
                </div>
                <div className={`${classNames({[`${s_FoolScreen.FoolScreen_SliderThreeImage_slides_next}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.SliderThreeImage_slides_next}`]: !settingsCmponent.foolScreen})}`}>
                    <img className={classNames({[`${s_FoolScreen.FoolScreen_SliderThreeImage_slide}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.SliderThreeImage_slide}`]: !settingsCmponent.foolScreen})} src={ImageNext()} />
                </div>
            </div>
            <Navigation settingsCmponent={settingsCmponent} setCurrentClick={setCurrentClick} hendlerPrevClick={hendlerPrevClick} hendlerNextClick={hendlerNextClick} currentImg={image[currentClick]} image={image}/>
        </div>
    </FullScreenDiv>)
}

export default SliderThreeImage


