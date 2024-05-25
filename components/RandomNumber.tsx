


const RandomNumber = ({life}: { life: number }) => {
    
    const renderHearts = () => {
        const hearts = [];
        for (let i = 0; i < life; i++) {
            hearts.push(<span key={i}><img width={'50px'} src=
            "https://png.pngtree.com/png-vector/20220411/ourmid/pngtree-glossy-heart-best-vector-ai-and-png-png-image_4538478.png"
             alt="heart" className="inline-block" /></span>);
        }
        return hearts;
    };
    
    return ( <>
   {renderHearts()}
    </> );
}
 
export default RandomNumber;