import { Image } from "../entity/Image";
import { AppDataSource } from "../../data-source";

export class ImageController {
  static viewImage = async (req, res) => {
    const { board_id } = req.params;
    console.log(req.params);
    const db = AppDataSource.getRepository(Image)
      .createQueryBuilder("image")
      .where("boardid = :board_id", { board_id });
    const image = await db.getOne();

    res.writeHead(200, {
      "Content-Type": image.mimetype,
      "Content-Length": image.data.length,
    });

    res.end(image.data);
  };
}
