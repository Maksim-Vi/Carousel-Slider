import { useState, useEffect } from 'react'
import Timer from '../Settings/Timer'
import SliderTwoAndMore from './ViewSliders/SliderTwoAndMore'
import SliderOneImage from './ViewSliders/SliderOneImage'
import SliderThreeImage from './ViewSliders/SliderThreeImage'

const Slaider = (props) => {

    const image = [
        { "id": 1, "img": "http://habrastorage.org/files/3f2/628/bd5/3f2628bd58c8452db516195cb0c9bfc9.jpg" },
        { "id": 2, "img": "http://habrastorage.org/files/3e1/95d/c7f/3e195dc7f5a64469807f49a14f97ba0e.jpg" },
        { "id": 3, "img": "http://habrastorage.org/files/663/6b1/d4f/6636b1d4f8e643d29eab8c192fc1cea3.jpg" },
        { "id": 4, "img": "https://avtomaniya.com/pubsource/photo/9379/100-zhigul-tyuningjpeg.jpg" },
        { "id": 5, "img": "https://5koleso.ru/wp-content/cache/thumb/c9/b637edf794815c9_1200x580.jpg" },
    ]

    const [currentClick, setCurrentClick] = useState(0)
    let [openFullScreen,setOpenFullScreen] = useState(false)

    const hendlerPrevClick = () => {
        let newPrev = currentClick
        // from_beginning_to_end
        if (newPrev > 0 && props.settingsCmponent.value === 'from_beginning_to_end') {
            newPrev = currentClick - 1
        }

        // cycle
        if (newPrev >= 0 && props.settingsCmponent.value === 'cycle') {
            if (newPrev === 0) {
                newPrev = image.length - 1
            } else if (newPrev > 0) {
                newPrev = currentClick - 1
            }
        }

        setCurrentClick(newPrev)
    }

    const hendlerNextClick = () => {
        let newNext = currentClick
        // from_beginning_to_end
        if (newNext < image.length - 1 && props.settingsCmponent.value === 'from_beginning_to_end') {
            newNext = currentClick + 1
        }

        // cycle
        if (newNext < image.length && props.settingsCmponent.value === 'cycle') {
            if (newNext === image.length - 1) {
                newNext = 0
            } else {
                newNext = currentClick + 1
            }
        }

        setCurrentClick(newNext)
    }

    let setFullScreenDiv = () =>{
        setOpenFullScreen(!openFullScreen)       
    }


    const SelectSlider = () => {
        if (props.settingsCmponent.stateImage === 'oneImage') {
            return <SliderOneImage image={image} currentClick={currentClick} setCurrentClick={setCurrentClick} settingsCmponent={props.settingsCmponent} hendlerPrevClick={hendlerPrevClick} hendlerNextClick={hendlerNextClick} setFullScreenDiv={setFullScreenDiv} openFullScreen={openFullScreen} setFoolScreen={props.setFoolScreen}/>

        } else if (props.settingsCmponent.stateImage === 'threeImage_On_the_sides') {
            return <SliderThreeImage image={image} currentClick={currentClick} setCurrentClick={setCurrentClick} settingsCmponent={props.settingsCmponent} hendlerPrevClick={hendlerPrevClick} hendlerNextClick={hendlerNextClick} setFullScreenDiv={setFullScreenDiv} openFullScreen={openFullScreen} setFoolScreen={props.setFoolScreen}/>
        } else if (props.settingsCmponent.stateImage === 'twoImage') {
            return <SliderTwoAndMore image={image} currentClick={currentClick} setCurrentClick={setCurrentClick} settingsCmponent={props.settingsCmponent} hendlerPrevClick={hendlerPrevClick} hendlerNextClick={hendlerNextClick} setFullScreenDiv={setFullScreenDiv} openFullScreen={openFullScreen} setFoolScreen={props.setFoolScreen}/>
        }
    }

return (
    <Timer settingsCmponent={props.settingsCmponent} hendlerNextClick={hendlerNextClick}>
        {SelectSlider()}
    </Timer>
)
}

export default Slaider