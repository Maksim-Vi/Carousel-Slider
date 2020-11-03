import Head from 'next/head'


const HeadNavBar = ({children,title="Slider Bar",OpenSettings,settings,OpenFoolScreen,foolScreen}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="NextJs, Slaider, SlaidBar" />
                <meta name="description" content="Startup nextJs Slider." />
            </Head>
            <nav>
                <div className="qwe">
                    <img className="imgSettings" src='./Settings.png' onClick={()=>OpenSettings(!settings)} /> 
                    <img className="imgSettings" src='./foolScreen.png' onClick={()=>OpenFoolScreen()} />
                </div>
                
            </nav>
            <main>
                <div className="mainContainer">
                    {children}
                </div>  
            </main>
            <style jsx>{`
            nav{
               position:fixed;
               height:60px;
               left:0;
               top:0;
               right:0;
               background: #fff;
               display:flex;   
               flex-direction: collum; 
               justify-content: center;
               border-bottom: 3px solid #6c6c6c47; 
            }
            .qwe{
                display:flex;
                align-self: center;
                justify-content: flex-end;
            }
            main{
                margin-top: 60px;
                background: #6c6c6c2e;
                width: 100%;
                height: 100vh;
              }
            .mainContainer {
                padding:1rem;
            }
            .imgSettings{
                width:2.3%;
                align-self: flex-end;
                margin-right:5%;
            }
            .imgSettings:hover{
                border-bottom: 1px solid blue
            }
            }
        `}</style>
        </>
    )
}

export default HeadNavBar