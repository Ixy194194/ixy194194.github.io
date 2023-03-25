import {FC, useCallback, useLayoutEffect, useRef, useState} from 'react';
import ImageCard from './ImageCard';
import { ImageCardProps } from "../../types/ImageCardProps";
import { ImageLineArray } from '../../types/ImageLineProps';
import ImageLine from './ImageLine';

const ImageBoard: FC = () => {
    const imageCardProps: Array<ImageCardProps> = [
        {key: 0, src: "/001.jpg", width: 180, height: 300},
        {key: 1, src: "/002.jpg", width: 180, height: 500},
        {key: 2, src: "/003.jpg", width: 180, height: 300},
        {key: 3, src: "/004.jpg", width: 180, height: 200},
        {key: 4, src: "/005.jpg", width: 180, height: 300},
        {key: 5, src: "/006.jpg", width: 180, height: 400},
        {key: 6, src: "/007.jpg", width: 180, height: 300},
        {key: 7, src: "/008.jpg", width: 180, height: 600},
        {key: 8, src: "/009.jpg", width: 180, height: 300},
        {key: 9, src: "/010.jpg", width: 180, height: 200},
        {key: 10, src: "/011.jpg", width: 180, height: 200},
        {key: 11, src: "/012.jpg", width: 180, height: 100},
    ];

    const imageCards = imageCardProps.map((imageCardProp) => (
        <ImageCard key={imageCardProp.key}
                   src={imageCardProp.src}
                   width={imageCardProp.width}
                   height={imageCardProp.width}
        />
    ));
    const shuffleCards = useCallback(() => {
        const copyImageCards = [...imageCards];

        for (let i = copyImageCards.length - 1; i >= 0; i--) {
            const rnd = Math.floor(Math.random() * (i + 1));
            const tmp = copyImageCards[i];
            copyImageCards[i] = copyImageCards[rnd];
            copyImageCards[rnd] = tmp;
        }

        return copyImageCards;
    }, [imageCards]);

    type cardLineArray = Array<ImageLineArray>;
    const [cardLines, setCardLines] = useState<cardLineArray>([]);
    const lineAnimClassName = "image-line-anim";

    const speedSecond = 30;
    const lineHeight = 374;

    const initLine = useCallback((lineCount: number) => {
        if (lineCount > cardLines.length) {
            const pushArray: cardLineArray = [];

            for (let i = cardLines.length; i < lineCount; i++)
                pushArray.push([shuffleCards(), shuffleCards()]);

            setCardLines([...cardLines, ...pushArray]);
        }
        else if (lineCount < cardLines.length) {
            setCardLines(cardLines.filter((v, i) => (i < lineCount)));
        }
    }, [cardLines, shuffleCards]);

    const refOnceExecutedInit = useRef(true);
    useLayoutEffect(() => {
        if (process.env.NODE_ENV === "development" && refOnceExecutedInit.current) {
            refOnceExecutedInit.current = false;
            return;
        }

        const getlineCount = () => {
            return Math.ceil(window.innerHeight / lineHeight);
        };

        initLine(getlineCount());

        const resizeEvent = () => {
            initLine(getlineCount());
        };

        window.addEventListener("resize", resizeEvent);
        return () => {
            window.removeEventListener("resize", resizeEvent);
        };
        // これは初回レンダリング時のみ実行したいので明示的にwarnを切ってあります
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refOnceExecutedAnimate = useRef(true);
    useLayoutEffect(() => {
        if (process.env.NODE_ENV === "development" && refOnceExecutedAnimate.current) {
            refOnceExecutedAnimate.current = false;
            return;
        }

        (async () => {
            const anime = (await import("animejs")).default;

            const lineElements = document.getElementsByClassName(lineAnimClassName);
            anime.remove(lineElements);

            for (let i = 0; i < lineElements.length; i++) {
                const lineElement: HTMLElement = lineElements[i] as HTMLElement;
                const isReverse = (i + 1) % 2 === 0;
                const moveWidth =
                    (lineElement.offsetWidth / 2)
                    + (3 * parseFloat(getComputedStyle(document.documentElement).fontSize) / 4)
                    - 15;

                anime.set(lineElement, {
                    translateX: isReverse ? -(lineElement.offsetWidth - window.innerWidth) : 0,
                    translateY: lineHeight * i
                });
                const lineAnim = anime({
                    targets: lineElement,
                    translateX: isReverse ? -moveWidth + window.innerWidth : -moveWidth,
                    autoplay: true,
                    duration: ((speedSecond * 1000) / window.innerWidth) * moveWidth,
                    easing: 'linear'
                });

                if (i !== 0) continue;
                lineAnim.finished.then(() => {
                    setCardLines(cardLines.map((v, mi) => (
                        (mi + 1) % 2 === 0 ? [shuffleCards(), v[0]] : [v[1], shuffleCards()]
                    )));
                });
            }
        })();
    }, [cardLines, imageCards.length, shuffleCards, speedSecond]);

    return (
        <div className="fixed w-full z-10">
            {cardLines.map((v, i) => (
                <ImageLine key={i} lineArray={v} />
            ))}
        </div>
    );;
};

export default ImageBoard;
