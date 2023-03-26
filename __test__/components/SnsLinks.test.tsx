import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SnsLink from "../../components/SnsLinks";

describe("SnsLink", () => {
    test("Twitterのリンクテキストが表示されているか", () => {
        render(<SnsLink />);
        const aTag = screen.getByText("Twitterss");
        expect(aTag).toBeInTheDocument();
    }),
        test("TwitterのUrlが意図したものになっているかどうか", () => {
            render(<SnsLink />);
            const aTag = screen.getByText("Twitter");
            expect(aTag.closest("a")).toHaveAttribute(
                "href",
                "https://twitter.com/Ixy"
            );
        }),
        test("Instagramのリンクテキストが表示されているか", () => {
            render(<SnsLink />);
            const aTag = screen.getByText("Instagram");
            expect(aTag).toBeInTheDocument();
        }),
        test("InstagramのUrlが意図したものになっているかどうか", () => {
            render(<SnsLink />);
            const aTag = screen.getByText("Instagram");
            expect(aTag.closest("a")).toHaveAttribute(
                "href",
                "https://www.instagram.com/ixy__194/?hl=ja"
            );
        }),
        test("YouTubeのリンクテキストが表示されているか", () => {
            render(<SnsLink />);
            const aTag = screen.getByText("YouTube");
            expect(aTag).toBeInTheDocument();
        }),
        test("YouTubeのUrlが意図したものになっているかどうか", () => {
            render(<SnsLink />);
            const aTag = screen.getByText("YouTube");
            expect(aTag.closest("a")).toHaveAttribute(
                "href",
                "https://www.youtube.com/@ixy"
            );
        }),
        test("fanboxのリンクテキストが表示されているか", () => {
            render(<SnsLink />);
            const aTag = screen.getByText("fanbox");
            expect(aTag).toBeInTheDocument();
        }),
        test("fanboxのUrlが意図したものになっているかどうか", () => {
            render(<SnsLink />);
            const aTag = screen.getByText("fanbox");
            expect(aTag.closest("a")).toHaveAttribute(
                "href",
                "https://ixy.fanbox.cc/"
            );
        }),
        test("Ci-enのリンクテキストが表示されているか", () => {
            render(<SnsLink />);
            const aTag = screen.getByText("Ci-en");
            expect(aTag).toBeInTheDocument();
        }),
        test("Ci-enのUrlが意図したものになっているかどうか", () => {
            render(<SnsLink />);
            const aTag = screen.getByText("Ci-en");
            expect(aTag.closest("a")).toHaveAttribute(
                "href",
                "https://ci-en.dlsite.com/creator/5868"
            );
        });
});
