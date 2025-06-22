export default function Left({imgSrc}){

    return(
        <div className='image-container max-w-[226.73px] min-w-[187.03px] max-h-[300px] min-h-[272.67px] m-5 rounded-[10px]'>
            <img src={imgSrc} className='w-[100%] h-[100%] rounded-[5px]' alt="shop pic" />
        </div>
    )
}