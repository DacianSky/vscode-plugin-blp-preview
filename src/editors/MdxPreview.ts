import BasePreview from "./BasePreview";

export default class MdxPreview extends BasePreview {
    getCssSource(): string[] {
        return [
            '/media/preview.css',
        ];
    }

    getJSSource(): string[] {
        return [
            '/media/message.js',
            '/media/viewer.min2.js',
            '/media/modelPreview.js',
        ];
    }

    getHTMLTempalte(): string {
        return `
        <div class="container" dropzone="copy">
            <div class="inner">
                <canvas id="canvas" width="300" height="300"></canvas>
            </div>
            <div class="controls">
                <label>显示网格 <input id="grid" type="checkbox"/></label>
                <label>动作列表 <select id="select"><option>None</option></select></label>
                <label>队伍颜色 <select id="teamcolor"><option>None</option></select></label>
                <label>速度 <input type="range" id="volume" name="volume" value="10" min="0" max="80"></label>
            </div>
        </div>
        `;
    }

    onActive() {
        this.previewGetter.binarySizeStatusBarEntry.show(this.id, this._imageBinarySize);
    }

    onVisible(): void {
        this.previewGetter.binarySizeStatusBarEntry.hide(this.id);
    }

    onDispose(): void {
        this.previewGetter.binarySizeStatusBarEntry.hide(this.id);
    }
}