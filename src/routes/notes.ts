import { prisma } from "../server/prisma";
import { publicProcedure, router } from "../server/trpc";
import { z } from "zod";

const getNotes = publicProcedure.query(async () => {
  const notes = await prisma.notes.findMany({
    orderBy: {
      title: 'asc'
    }
  });

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

const deleteNote = publicProcedure
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

const updateNote = publicProcedure
  .input(z.string())
  .mutation(async ({ input }) => {
    const note = await prisma.notes.findUnique({
      where: {
        uuid: input,
      },
    });

    if (note) {
      const updatedNote = await prisma.notes.update({
        data: {
          done: !note.done,
        },
        where: {
          uuid: input,
        },
      });

      return updatedNote;
    } else {
      throw new Error("Note not found");
    }
  });

export const notesRouter = router({
  get: getNotes,
  create: createNote,
  delete: deleteNote,
  toggleDone: updateNote,
});
