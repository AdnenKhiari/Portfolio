import Image from 'next/image';
import React from 'react';

export default function Loading() {  
    return <div className='loader'>
        <Image src={"/blocks-shuffle-3.svg"}  width={100} height={100}  alt='Loading animation for tech portfolio'/>
    </div>
}

