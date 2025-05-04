import { z } from "zod";

export const generateDataSchema = {
    body: z.object({
    pets: z.number().int().positive(),
    users: z.number().int().positive()
    })
};