import fetchImage from "@/lib/fetchImages";
import type { ImageResults } from "@/models/images";
import React from 'react'
import ImgContainer from "./imageContainer";

export default async function Gallery() {

    const url = 'https://api.pexels.com/v1/curated';

    const images: ImageResults | undefined = await fetchImage(url);

    if(!images) return <div className="text-center py-5"><h2 className="fw-bold text-dark">No image found</h2></div>

  return (
    <section>
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2 p-2 d-flex justify-content-center">
            {images.photos.map(photo => (
              <ImgContainer photo={photo} />
            ))}
        </div>    
    </section>
  )
}
