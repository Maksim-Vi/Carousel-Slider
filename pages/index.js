import { useState, useEffect } from 'react'
import HeadNavBar from '../components/HeadNav/HeadNavBar'
import Slaider from '../components/MainFildSlaider/Slaider'
import SettingsPopup from '../components/Settings/SettingsPopup'


export default function Home() {
// open popup settings
  const [settings, setSettings] = useState(false)

// Settings
  const [value, setValue] = useState('cycle')
  const [isCounter, setIsCounter] = useState(false)
  const [isCounter_Speed, setIsCounter_Speed] = useState(3000)
  const [dots, setDots] = useState(true)
  const [navigation, setNavigation] = useState(true)
  const [stateImage, setStateImage] = useState('oneImage')

  const [foolScreen, setFoolScreen] = useState(false)

  const [settingsCmponent, setSettingsCmponent] = useState({
    value: value,
    isCounter: isCounter,
    isCounter_Speed: isCounter_Speed,
    dots: dots,
    navigation:navigation,
    stateImage: stateImage,
    foolScreen:foolScreen,
  })
  
  const handleRadioChange = (e) =>{
    setValue(e.target.value)
  }

  const handleIsCounterChange = (event) =>{
    setIsCounter(event.target.checked);
  }

  const handleIsCounter_SpeedChange = (e) =>{
    setIsCounter_Speed(e.target.value)
  }

  const handleNavigation = (e) =>{
    if(e.target.name === 'Dots'){
      setDots(e.target.checked)
    } else {
      setNavigation(e.target.checked)
    }
  }

  const OpenSettings = (settings) =>{
    setSettings(settings)
  }

  const OpenFoolScreen = () =>{
    setFoolScreen(!foolScreen)
  }

  const handleChangeImage = (e) =>{
    setStateImage(e.target.value);
  }

  useEffect(() => {
    setSettingsCmponent({
      value: value,
      isCounter: isCounter,
      isCounter_Speed: isCounter_Speed,
      dots: dots,
      navigation:navigation,
      stateImage: stateImage,
      foolScreen:foolScreen,
    })
  }, [value,isCounter,isCounter_Speed,dots,navigation,stateImage,foolScreen])

  return (
    <HeadNavBar OpenSettings={OpenSettings} settings={settings} OpenFoolScreen={OpenFoolScreen} foolScreen={foolScreen}>
      <Slaider settingsCmponent={settingsCmponent} setFoolScreen={setFoolScreen}/>
      {settings 
        ? <SettingsPopup handleRadioChange={handleRadioChange} 
                         handleIsCounterChange={handleIsCounterChange} 
                         handleIsCounter_SpeedChange={handleIsCounter_SpeedChange}
                         handleNavigation={handleNavigation}
                         settingsCmponent={settingsCmponent}
                         handleChangeImage={handleChangeImage}/>
        : <></>
      }
    </HeadNavBar>
  )
}


/*
1) попап ошибки, если выбран автоперелист должен быть выбран cycle
2) не уберается галочка с автоматического перелистования
3) сделать конпки перелистывания крассивые
4) сделать точки в низу отображения 
5) посмотреть что с счетчиком !!!
============ в по=ланах
1) изменение размера картинки
2) виды перелистывания (по 2,3 картинки на слайде задавать руками с настроек, одна в центре и по процентов 20 по бокам ...)
3) стилизация css вид цвет перелистывания кнопкок чекбоксов навигации ...
4) 

*/