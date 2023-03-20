import { z } from "zod";

const Book = z.object({
  title: z.string().max(100),
  description: z.string(),
  pages: z.number().positive(),
});

export default Book;
