import type { Photo } from "@/models/images";
import Image from "next/image";

type Props = {
    photo: Photo
}

export default function ImgContainer({photo}: Props)
{
    return (
        <div className="col py-1 relative overflow-hidden" key={photo.id}>
            <Image 
                src={photo.src.large}
                alt={photo.alt}
                // fill= {true}
                height={450}
                width={300}
                className="object-fit-cover border rounded"
            />
        </div>
    )
}