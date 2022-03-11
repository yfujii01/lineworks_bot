import Koa from "koa";
import Router from "koa-router";
import koaBody from "koa-body";
const app = new Koa();
const router = new Router();
import axios from "axios";

app.use(koaBody());

router.get("/", (ctx, next) => {
    ctx.body = "Hello World!!";
});
router.post("/", (ctx, next) => {
    console.log('post call')
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
    ctx.body.test = 'これはテストです';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(koaBody())
app.listen(process.env.PORT || 3000);
