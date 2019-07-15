# canvas

### 在画板中绘制图片

``` js
let cv = document.querySelector("canvas");
let cxt = cv.getContext("2d");
let img = new Image();
img.src = "1.jpg"
img.onload = function () {
    cxt.drawImage(this, 0, 0, 650, 420, 0, 0, 650, 420)
}
```