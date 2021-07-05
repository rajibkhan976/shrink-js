var Banner = {
    instantAds: undefined,
    setInstantAds: function(instantAdVars) {
        try {
            if (instantAdVars) {
                this.instantAds = instantAdVars;
            }
        } catch(error) {
            console.error(error);
        }
    },
    getInstantAds: function() {
        return this.instantAds;
    },
    setImage: function(element, source) {
        try {
            if (element && source && source.trim()) {
                element.src = source;
            }
        } catch(error) {
            console.error(error);
        }
    },
    setCopyText: function(element, copyText) {
        try {
            if (element && copyText && copyText.trim()) {
                element.innerHTML = copyText.trim();
            }
        } catch(error) {
            console.error(error);
        }
    },
    setFontHexVal: function(element, hexVal) {
        try {
            if (element && hexVal && hexVal.trim()) {
                element.style.setProperty('color', hexVal.trim());
            }
        } catch(error) {
            console.error(error);
        }
    },
    setFontSize: function(element, fontSize) {
        try {
            if (element && fontSize && fontSize.trim()) {
                element.style.setProperty('font-size', fontSize.trim() + 'px');
            }
        } catch(error) {
            console.error(error);
        }
    },
    setBGHexVal: function(element, hexVal) {
        try {
            if (element && hexVal && hexVal.trim()) {
                element.style.setProperty('background-color', hexVal);
            }
        } catch(error) {
            console.error(error);
        }
    },
    setXYOffset: function(element, XYCoordinate) {
        try {
            if (element && XYCoordinate && XYCoordinate.length !== 0) {
                element.style.setProperty('left', XYCoordinate[0] + 'px');
                element.style.setProperty('top', XYCoordinate[1] + 'px');
            }
        } catch(error) {
            console.error(error);
        }
    },
    fadeIn: function(element, duration, delay) {
        try {
            if (element && typeof duration === "number" && typeof delay === "number") {
                var fadein = new TimelineMax({});
                fadein.to(element, duration, { autoAlpha: 1 }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    fadeOut: function(element, duration, delay) {
        try {
            if (element && typeof duration === "number" && typeof delay === "number") {
                var fadeout = new TimelineMax({});
                fadeout.to(element, duration, { autoAlpha: 0 }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    fadeInOut: function(element, duration, delay) {
        try {
            if (element && typeof duration === "number" && typeof delay === "number") {
                var fadein = new TimelineMax({});
                fadein.fromTo(element, duration, { autoAlpha: 1 }, { autoAlpha: 0 }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    fadeOutIn: function(element, duration, delay) {
        try {
            if (element && typeof duration === "number" && typeof delay === "number") {
                var fadeout = new TimelineMax({});
                fadeout.fromTo(element, duration, { autoAlpha: 0 }, { autoAlpha: 1 }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideInFromToLeft: function(element, fromLeft, toLeft, duration, delay) {
        try {
            if (element && fromLeft && toLeft && typeof duration === "number" && typeof delay === "number") {
                var slideInLeft = new TimelineMax({});
                slideInLeft.fromTo(element, duration, { left: fromLeft }, { left: toLeft }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideOutFromToLeft: function(element, fromLeft, toLeft, duration, delay) {
        try {
            if (element && fromLeft && toLeft && typeof duration === "number" && typeof delay === "number") {
                var slideOutLeft = new TimelineMax({});
                slideInLeft.fromTo(element, duration, { left: fromLeft }, { left: toLeft }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideInToLeft: function(element, toLeft, duration, delay) {
        try {
            if (element && toLeft && typeof duration === "number" && typeof delay === "number") {
                var slideInLeft = new TimelineMax({});
                slideInLeft.to(element, duration, { left: toLeft }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideOutToLeft: function(element, toLeft, duration, delay) {
        try {
            if (element && toLeft && typeof duration === "number" && typeof delay === "number") {
                var slideOutLeft = new TimelineMax({});
                slideInLeft.to(element, duration, { left: toLeft }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideInFromToRight: function(element, fromRight, toRight, duration, delay) {
        try {
            if (element && fromRight && toRight && typeof duration === "number" && typeof delay === "number") {
                var slideInRight = new TimelineMax({});
                slideInRight.fromTo(element, duration, { right: fromRight }, { right: toRight }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideOutFromToRight: function(element, fromRight, toRight, duration, delay) {
        try {
            if (element && fromRight && toRight && typeof duration === "number" && typeof delay === "number") {
                var slideOutRight = new TimelineMax({});
                slideInRight.fromTo(element, duration, { right: fromRight }, { right: toRight }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideInToRight: function(element, toRight, duration, delay) {
        try {
            if (element && toRight && typeof duration === "number" && typeof delay === "number") {
                var slideInRight = new TimelineMax({});
                slideInRight.to(element, duration, { right: toRight }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideOutToRight: function(element, toRight, duration, delay) {
        try {
            if (element && toRight && typeof duration === "number" && typeof delay === "number") {
                var slideOutRight = new TimelineMax({});
                slideInRight.to(element, duration, { right: toRight }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideInFromToTop: function(element, fromTop, toTop, duration, delay) {
        try {
            if (element && fromTop && toTop && typeof duration === "number" && typeof delay === "number") {
                var slideInTop = new TimelineMax({});
                slideInTop.fromTo(element, duration, { top: fromTop }, { top: toTop }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideOutFromToTop: function(element, fromTop, toTop, duration, delay) {
        try {
            if (element && fromTop && toTop && typeof duration === "number" && typeof delay === "number") {
                var slideOutTop = new TimelineMax({});
                slideInTop.fromTo(element, duration, { top: fromTop }, { top: toTop }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideInToTop: function(element, toTop, duration, delay) {
        try {
            if (element && toTop && typeof duration === "number" && typeof delay === "number") {
                var slideInTop = new TimelineMax({});
                slideInTop.to(element, duration, { top: toTop }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideOutToTop: function(element, toTop, duration, delay) {
        try {
            if (element && toTop && typeof duration === "number" && typeof delay === "number") {
                var slideOutTop = new TimelineMax({});
                slideInTop.to(element, duration, { top: toTop }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideInFromToBottom: function(element, fromBottom, toBottom, duration, delay) {
        try {
            if (element && fromBottom && toBottom && typeof duration === "number" && typeof delay === "number") {
                var slideInBottom = new TimelineMax({});
                slideInBottom.fromTo(element, duration, { bottom: fromBottom }, { bottom: toBottom }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideOutFromToBottom: function(element, fromBottom, toBottom, duration, delay) {
        try {
            if (element && fromBottom && toBottom && typeof duration === "number" && typeof delay === "number") {
                var slideOutBottom = new TimelineMax({});
                slideInBottom.fromTo(element, duration, { bottom: fromBottom }, { bottom: toBottom }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideInToBottom: function(element, toBottom, duration, delay) {
        try {
            if (element && toBottom && typeof duration === "number" && typeof delay === "number") {
                var slideInBottom = new TimelineMax({});
                slideInBottom.to(element, duration, { bottom: toBottom }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    slideOutToBottom: function(element, toBottom, duration, delay) {
        try {
            if (element && toBottom && typeof duration === "number" && typeof delay === "number") {
                var slideOutBottom = new TimelineMax({});
                slideInBottom.to(element, duration, { bottom: toBottom }, delay);
            }
        } catch(error) {
            console.error(error);
        }
    },
    isImageLoaded: function(imgs) {
        try {
            if (imgs && imgs.length !== 0) {
                var loadedImages = 0;
                var tlBanner = new TimelineMax({});
                for(var i = 0; i < imgs.length; i++) {
                    imgs[i].onload = function(event) {
                        if (event.target.complete) {
                            loadedImages++;
                        }
                        if (loadedImages === imgs.length) {
                            tlBanner.set(banner, { autoAlpha: 1 });
                        }
                    }
                }
            }
        } catch(error) {
            console.error(error);
        }
    },
    resizeText: function(element) {
        try {
            if (element) {
                while (element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight) {
                    var fs = window.getComputedStyle(element, null).getPropertyValue('font-size');
                    fs = parseFloat(fs) * 0.7;
                    element.style.setProperty('font-size', fs + 'px');
                    if (fs <= 8) break;
                }
            }
        } catch(error) {
            console.error(error);
        }
    }
}