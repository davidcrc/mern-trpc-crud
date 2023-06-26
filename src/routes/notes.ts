import { publicProcedure, router } from "../server/trpc";

const getNotes = publicProcedure.query(() => {
  return [
    {
      id: 1,
      title: "note1",
      content: "my content note",
    },
  ];
});

export const notesRouter = router({
  get: getNotes,
});
