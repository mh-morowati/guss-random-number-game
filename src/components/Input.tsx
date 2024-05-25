import { useRef, useState } from "react";
import RandomNumber from "./RandomNumber";


const Input = () => {
    
    const [stage, setStage] = useState(10);
    const initialTargetNumber = Math.floor(Math.random() * stage) + 1;
    const [targetNumber, setTargetNumber] = useState<number>(initialTargetNumber);
    const [message,setMessage] = useState('');
    let [heart,setHeart] = useState(5);
    
    const inputRef = useRef<HTMLInputElement>(null);
        // const inputRef = createRef<HTMLInputElement>();
   
        
    const checkNumber = () =>{
        if(parseInt(inputRef.current!.value || '') === targetNumber){
            inputRef.current!.value = '';
            setMessage('you were right');
            setHeart(5)
            setStage(stage + 1);
            setTargetNumber(initialTargetNumber);
            
        }
       else if(parseInt(inputRef.current!.value || '') >= targetNumber){
        inputRef.current!.value = '';
        setMessage('Go Down');
        setHeart(heart - 1);
       }
       else{
        inputRef.current!.value = '';
        setMessage('Go Up');
        setHeart(heart - 1);
       }
      
       if(heart === 0){
        setMessage('Game Over');
       
        
    }
    }
    const resetGame = () => {
        setStage(10); // Reset stage to 1
        setTargetNumber(initialTargetNumber);
        setMessage('');
        setHeart(5);
        if (inputRef.current){
            inputRef.current!.value = '';
        }
       
    };
    
    return (<>
    <div className="relative right-1/3"><RandomNumber life={heart}/></div>
    <div className="relative top-40">
    <h1>{message}</h1>
    <h1>Say a number between 0 & {stage}</h1>
    {heart === 0 && (
                    <button
                        onClick={resetGame}
                        className="mt-4 px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md"
                    >
                        Play Again
                    </button>
                )}
    </div>
   {heart !== 0 && (<div className="relative top-80">
        <input ref={inputRef} className="p-10 w-2/5 rounded-full shadow-box1 shadow-box2 shadow-box3" type="number" /><br />
        <button onClick={checkNumber} className="mt-10 justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200
         bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">My Number</button>
         
    </div>)}</>);
}

export default Input;