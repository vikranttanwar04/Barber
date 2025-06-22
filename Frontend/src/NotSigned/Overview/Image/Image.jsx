

export default function Image({imgSrc}){
    
    return(
        <div className='max-w-[240px] me-2 my-3 rounded-[5px]'>
            <img src={imgSrc} className='w-[100%] h-[100%] rounded-[5px]' alt="shop pic" />
        </div>
    )
}