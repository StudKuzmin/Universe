import lottie from 'lottie-web'

class LottieAnimation {
    #loadAnimation = NaN;
    #spaceAnimation = NaN;
    #notFoundAnimation = NaN;

    loadAnimation = (rf) => {
        this.#loadAnimation = lottie.loadAnimation({
            container: rf,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../src/json/loadAnimaton.json')
        })
    }
    loadAnimationDelete = () => {
        this.#loadAnimation.destroy();
    }

    spaceAnimation = (rf) => {
        this.#spaceAnimation = lottie.loadAnimation({
            container: rf,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../src/json/spaceAnimation.json')
        })
    }
    spaceAnimationDelete = () => {
        this.#spaceAnimation.destroy();
    }

    notFoundAnimation = (rf) => {
        this.#notFoundAnimation = lottie.loadAnimation({
            container: rf,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../src/json/notFound.json')
        })
    }
    notFoundAnimationDelete = () => {
        this.#notFoundAnimation.destroy();
    }
}

export const lottieAnimation = new LottieAnimation();