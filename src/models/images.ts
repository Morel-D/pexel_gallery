import { z } from "zod"

const BascisImageSchema = z.object({
    page: z.number(),
    per_page: z.number(),
    prev_page: z.string().optional(),
    next_page: z.string().optional(),
    total_results: z.number() 
})


const PhotoShema = z.object({
    id: z.number(),
    width: z.number(),
    height: z.number(),
    url: z.string(),
    src: z.object({
        large: z.string()
    }),
    alt: z.string(),
    blurredDataUrl: z.string().optional(),
})

export const ImageSchemaWithPhotos = BascisImageSchema.extend({
    photos: z.array(PhotoShema)
})

export type Photo = z.infer<typeof PhotoShema>
export type ImageResults = z.infer<typeof ImageSchemaWithPhotos>