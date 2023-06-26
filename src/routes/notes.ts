import { prisma } from "../server/prisma";
import { publicProcedure, router } from "../server/trpc";
import { z } from "zod";

const getNotes = publicProcedure.query(async () => {
  const notes = await prisma.notes.findMany();

  return notes;
});

const createNoteType = { title: z.string(), description: z.string() };
const createNote = publicProcedure
  .input(z.object(createNoteType))
  .mutation(async ({ input }) => {
    // TODO: maybe add try catch
    const note = await prisma.notes.create({
      data: {
        title: input.title,
        description: input.description,
      },
    });

    return note;
  });

const deleteNode = publicProcedure
  .input(z.string())
  .mutation(async ({ input }) => {

    const note = await prisma.notes.delete({
      where: {
        uuid: input,
      },
    });

    if (!note) throw new Error("Note not found");

    return true;
  });

export const notesRouter = router({
  get: getNotes,
  create: createNote,
  delete: deleteNode,
});
