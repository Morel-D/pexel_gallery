import type { ImageResults } from "@/models/images";
import { ImageSchemaWithPhotos } from "@/models/images";
import env from "./env";

export default async function fetchImage(url: string): 
Promise<ImageResults | undefined>
{
    try
    {
        const res = await fetch(url, {
            headers:{Authorization: env.PEXELS_API_KEY
            
            }})

            if(!res.ok)
            {
                throw new Error("Fetch Image Error ! \n");
            }

            const imageResults: ImageResults = await res.json();

            console.log(imageResults);

            // Parse data with Zod schema

            const parsedData = ImageSchemaWithPhotos.parse(imageResults);

            if(parsedData.total_results === 0)
            {
                return undefined;
            }

            return parsedData;

    } catch(e)
    {
        // Will show in terminal console 
        if(e instanceof Error)
        {
            console.log(e.stack)
        }
    }
}