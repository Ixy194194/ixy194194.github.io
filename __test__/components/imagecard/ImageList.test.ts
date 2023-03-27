import "@testing-library/jest-dom";
import { readdir } from "fs/promises";
import imageList from "../../../components/imagecard/ImageList";

describe("ImageList", () => {
    test("画像定義にない名前が含まれていないか", async () => {
        const dir = await readdir(__dirname + "/../../../public", {
            withFileTypes: true,
        });
        const files = dir
            .filter((de) => {
                if (!de.isFile()) return false;
                return true;
            })
            .map((de) => `/${de.name}`);

        expect(files).toEqual(
            expect.arrayContaining(imageList.map((v) => v.src))
        );
    });
});
