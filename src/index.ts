import express from "express";
//import { AppDataSource } from "../data-source";

// 라우터 모듈
import routes from "./router";

let app = express();

// x-www-form-urlencoded를 파싱
app.use(
  express.urlencoded({
    extended: true,
  })
);

// body-parser는 내장되어있음. json 파싱하기 위해서 설정만 추가
app.use(express.json());

// // 모든 http method 허용
// app.use("/allMethod", (req, res) => {
//   res.send("allMethod");
// });

// // GET만 허용
// app.get("/get", (req, res) => {
//   res.send("get");
// });

// // GET + query parameter
// app.get("/get2", (req, res) => {
//   const { name } = req.query;
//   res.send(`get ${name}`);
// });

// // GET + uri parameter
// app.get("/get3/:name", (req, res) => {
//   const { name } = req.params;
//   res.send(`get ${name}`);
// });

// // POST만 허용
// app.post("/post", (req, res) => {
//   const { name } = req.body;
//   res.send(`post ${name}`);
// });

// // POST - JSON 리턴
// app.post("/post2", (req, res) => {
//   const result = {
//     code: 0,
//     message: "duck",
//   };
//   res.send(result);
// });

// // POST - JSON 보내기
// app.post("/post3", (req, res) => {
//   console.log(req.body);
//   const result = req.body;
//   res.send(result);
// });

app.use("/api", routes);

app.listen(8080, () => {
  console.log("server is listening 8080");
});
