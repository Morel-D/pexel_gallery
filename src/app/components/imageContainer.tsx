import type { Photo } from "@/models/images";
import Image from "next/image";

type Props = {
    photo: Photo
}

export default function ImgContainer({photo}: Props)
{
    return (
        <div className="col mx-1 py-1" key={photo.id}>
            <Image 
                src={photo.src.large}
                alt={photo.alt}
                width={250}
                height={250}
            />
        </div>
    )
}