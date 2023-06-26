import { publicProcedure, router } from "../server/trpc";
import { z } from "zod";

const getNotes = publicProcedure.query(() => {
  return [
    {
      id: 1,
      title: "note1",
      content: "my content note",
    },
  ];
});

const createNoteType = { title: z.string(), description: z.string() };
const createNote = publicProcedure
  .input(z.object(createNoteType))
  .mutation(({ input }) => {
    console.log("input", input);
    return "received";
  });

export const notesRouter = router({
  get: getNotes,
  create: createNote,
});
