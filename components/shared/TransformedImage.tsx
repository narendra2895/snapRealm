"use client"
import { dataUrl, debounce, download, getImageSize } from '@/lib/utils'
import { CldImage, getCldImageUrl } from 'next-cloudinary'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

const TransformationPage = ({ image, type, title, transformationConfig, isTransforming, setIsTransforming, hasDownload = false }: TransformedImageProps) => {
    const downloadHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();

            download(getCldImageUrl({
                width: image?.width,
                height: image?.height,
                src: image?.publicId,
                ...transformationConfig
            }),title)
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex-between'>
                <h3 className='h3-bold text-dark-600'>Transformed</h3>
                {hasDownload && (
                    <button className='download-btn' onClick={downloadHandler}>
                        <Image className='pb-[6px]' src='https://res.cloudinary.com/dldblks5t/image/upload/v1716112509/icons8-download-26_ywnfvb.png' height={24} width={24} alt='Download' />
                    </button>

                )}
            </div>
            {image?.publicId && transformationConfig ? (
                <div className='relative'>
                    <CldImage
                        width={getImageSize(type, image, 'width')}
                        height={getImageSize(type, image, 'height')}
                        src={image?.publicId}
                        alt={image.title}
                        sizes={'(max-width:767px) 100vw,50vw'}
                        placeholder={dataUrl as PlaceholderValue}
                        className='transformed-image'
                        onLoad={()=>{setIsTransforming && setIsTransforming(false)}}
                        onError={()=>{debounce(()=>{setIsTransforming && setIsTransforming(false)},8000)()}}
                        {...transformationConfig}
                    />
                    {isTransforming && (
                        <div className='transforming-loader'>
                            <Image className='animate-spin' src='https://res.cloudinary.com/dldblks5t/image/upload/v1716113239/icons8-spinner-50_lz6d9c.png' alt='spinner' width={50} height={50} />
                            <p className='text-white/80'>Please wait..</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className='transformed-placeholder'>
                    Transformed Image
                </div>
            )
            }
        </div>
    )
}

export default TransformationPage;