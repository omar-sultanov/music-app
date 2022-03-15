import React,{useState,useEffect} from 'react'

const Player = ({songs}) => {
        const [stateOf, setStateOf] = useState(false);
        const [classTitle, setClassTitle] = useState("fas fa-play-circle");
        const [index, setIndex] = useState(0);
        const item=songs.slice(index,index+1);
        const playHandler=()=>{
            if (stateOf) {
                setClassTitle("fas fa-play-circle")
                setStateOf(false)
                const audioItem = document.getElementById("audioItem")
                audioItem.pause()
            }
            else{
                setClassTitle("fas fa-stop-circle")
                setStateOf(true)
                const audioItem = document.getElementById("audioItem")
                audioItem.play()           
            }  
        }
        const plusHandlerId=()=>{
            (index<=item.length+1)?setIndex(index+1):setIndex(0);
        }
        const minusHandlerId=()=>{
            (0<index)?setIndex(index-1):setIndex(songs.length-1);
        }
        useEffect(() => {
            if (stateOf===true) {
                const audioItem = document.getElementById("audioItem")
            audioItem.play()  
            }
        }, [item])

    return (
        <div className="Player">
            <div className="image">
                <img src={item[0].img_src} alt={item[0].img_src} />
            </div>
            <div className="artist">{item[0].artist}</div>
            <h3 className="title">{item[0].title}</h3>
            <div className="controls">
                <button onClick={minusHandlerId}><i className="fas fa-caret-left"></i></button>
                <button onClick={playHandler}><i className={classTitle}></i></button>
                <button onClick={plusHandlerId}><i className="fas fa-caret-right"></i></button>
            </div>
            <audio id="audioItem" controls src={item[0].src} type="audio/mp3"/>
        </div>     
    )
}
export default Player