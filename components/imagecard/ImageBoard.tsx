import { FC, useCallback, useLayoutEffect, useRef, useState } from 'react';
import ImageCard, { imageCardSize } from './ImageCard';
import { ImageLineArray } from '../../types/ImageLineProps';
import ImageLine, { imageLinePaddingSize } from './ImageLine';
import imageCardProps from './ImageCardProps';

const ImageBoard: FC = () => {
    const imageCards = imageCardProps.map((imageCardProp) => (
        <ImageCard key={imageCardProp.key}
                   src={imageCardProp.src}
                   width={imageCardProp.width}
                   height={imageCardProp.height}
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

    const getRootFontSize = () =>
        parseFloat(getComputedStyle(document.documentElement).fontSize);

    const initLine = useCallback(() => {
        const lineCount = Math.ceil(window.innerHeight / (
            ((imageLinePaddingSize.y / 2) + imageCardSize.height) * getRootFontSize()
        ));

        if (lineCount > cardLines.length) {
            const pushArray: cardLineArray = [];

            for (let i = cardLines.length; i < lineCount; i++)
                pushArray.push([shuffleCards(), shuffleCards()]);

            setCardLines([...cardLines, ...pushArray]);
        }
        else if (lineCount < cardLines.length) {
            setCardLines(cardLines.filter((v, i) => (i < lineCount)));
        }
        else {
            setCardLines([...cardLines]);
        }
    }, [cardLines, shuffleCards]);

    const refOnceExecutedInit = useRef(true);
    useLayoutEffect(() => {
        if (process.env.NODE_ENV === "development" && refOnceExecutedInit.current) {
            refOnceExecutedInit.current = false;
            return;
        }

        initLine();

        const resizeEvent = () => {
            initLine();
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
                    + ((imageLinePaddingSize.x / 2) * getRootFontSize() / 4)
                    - 12.5;

                anime.set(lineElement, {
                    translateX: isReverse ? -(lineElement.offsetWidth - window.innerWidth) : 0,
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
    }, [cardLines, imageCards.length, shuffleCards]);

    return (
        <div className="fixed overflow-hidden flex flex-wrap z-10">
            {cardLines.map((v, i) => (
                <ImageLine key={i} lineArray={v} />
            ))}
        </div>
    );
};

export default ImageBoard;
