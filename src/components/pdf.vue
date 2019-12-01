<template>
    <div id="ContractPreview">

        <canvas v-for="page in pages" :id="'the-canvas'+page" :key="page"></canvas>

    </div>
</template>

<script>
    import PDFJS from "pdfjs-dist";
    import pdfjsLib from "pdfjs-dist";
    // const Base64 = require('js-base64').Base64

    export default {
        name: "ContractPreview",
        data() {
            return {
                title: "个人简历",
                pdfDoc: null,
                pages: 0
            };
        },
        methods: {
            // 初始化pdfjs
            initThePDFJSLIB: function() {
                pdfjsLib.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.js";
            },
            _renderPage(num) {
                this.pdfDoc.getPage(num).then(page => {
                    let canvas = document.getElementById("the-canvas" + num);
                    let ctx = canvas.getContext("2d");
                    let dpr = window.devicePixelRatio || 1;
                    let bsr =
                        ctx.webkitBackingStorePixelRatio ||
                        ctx.mozBackingStorePixelRatio ||
                        ctx.msBackingStorePixelRatio ||
                        ctx.oBackingStorePixelRatio ||
                        ctx.backingStorePixelRatio ||
                        1;
                    let ratio = dpr / bsr;
                    let viewport = page.getViewport(
                        screen.availWidth / page.getViewport(1).width
                    );
                    canvas.width = viewport.width * ratio;
                    canvas.height = viewport.height * ratio;
                    canvas.style.width = viewport.width + "px";
                    canvas.style.height = viewport.height + "px";
                    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
                    let renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };
                    page.render(renderContext);
                    if (this.pages > num) {
                        this._renderPage(num + 1);
                    }
                });
            },
            _loadFile(url) {
                PDFJS.getDocument(url).then(pdf => {
                    this.pdfDoc = pdf;
                    this.pages = this.pdfDoc.numPages;
                    this.$nextTick(() => {
                        this._renderPage(1);
                    });
                });
            }
        },
        mounted() {
            this.initThePDFJSLIB();
            document.title = this.title;
            let url = 'http://139.199.101.231:80/1.pdf';
            this._loadFile(url);
        }
    };
</script>

<style scoped>
    canvas {
        display: block;
        border-bottom: 1px solid black;
    }
</style>