import app from "./app";
import connectDB from "./server/prisma";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  connectDB();
});

console.log("Server on port", port);
