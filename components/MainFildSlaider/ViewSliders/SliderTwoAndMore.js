import React,{useCallback} from 'react';
import s from '../../../styles/slaider.module.scss'
import Navigation from '../navigation/Navigation';
import classNames from 'classnames';
import s_FoolScreen from '../../../styles/foolScreen.module.scss'
import FullScreenDiv from './FullScreen';

const SliderTwoAndMore = ({image,currentClick,setCurrentClick, settingsCmponent,hendlerPrevClick,hendlerNextClick,setFoolScreen,setFullScreenDiv,openFullScreen}) => {
    let  maxImgCount = useCallback(() =>{
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
        <div className={classNames({[`${s_FoolScreen.FoolScreen_sliderTwoAndMore__wrapper}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.sliderTwoAndMore__wrapper}`]: !settingsCmponent.foolScreen})}>
            <div className={classNames({[`${s_FoolScreen.FoolScreen_sliderTwoAndMore}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.sliderTwoAndMore}`]: !settingsCmponent.foolScreen})}>
                <div className={classNames({[`${s_FoolScreen.FoolScreen_sliderTwoAndMore__slides}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.sliderTwoAndMore__slides}`]: !settingsCmponent.foolScreen})}>
                    <img  className={classNames({[`${s_FoolScreen.FoolScreen_imgSlide}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.imgSlide}`]: !settingsCmponent.foolScreen})} src={image[currentClick].img} onClick={()=>{setFullScreenDiv()}}/>
                </div>
                <div className={classNames({[`${s_FoolScreen.FoolScreen_sliderTwoAndMore__slides}`]: settingsCmponent.foolScreen || openFullScreen,[`${s.sliderTwoAndMore__slides}`]: !settingsCmponent.foolScreen})}>
                    <img className={classNames({
                            [`${s_FoolScreen.FoolScreen_imgSlide}`]: settingsCmponent.foolScreen || openFullScreen,
                            [`${s.imgSlide}`]: !settingsCmponent.foolScreen})
                        } src={maxImgCount()} onClick={()=>{setFullScreenDiv()}}/>
                </div>
            </div>
            <Navigation settingsCmponent={settingsCmponent} setCurrentClick={setCurrentClick} hendlerPrevClick={hendlerPrevClick} hendlerNextClick={hendlerNextClick} currentImg={image[currentClick]} image={image}/>
        </div>
    </FullScreenDiv>)
}

export default SliderTwoAndMore