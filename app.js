import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import routers from './routes/contacts';
import { HttpCode } from './lib/constants';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/contacts", routers.deleteRouter);
app.use("/contacts", routers.getByIdRouter);
app.use("/contacts", routers.getRouter);
app.use("/contacts", routers.postRouter);
app.use("/contacts", routers.putRouter);
app.use("/contacts", routers.patchRouter);

app.use((req, res) => {
  res.status(HttpCode.NOT_FOUND)
  .json({ 
    status: "error", 
    code: HttpCode.NOT_FOUND, 
    message: "Not found" 
  })
});

app.use((err, req, res, next) => {
  res.status(HttpCode.INTERNAL_SERVER_ERROR)
  .json({
    status: "fail",
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: err.message,
  })
});

export default app;
