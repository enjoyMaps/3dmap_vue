import Vue from 'vue'
Vue.directive("drag", {   					//指令的名称
    inserted: function (el, binding) {		//当被绑定的元素插入到 DOM 中时
        // el.style.position = "absolute";
        /* el.style.left = binding.arg.left + "px";
        el.style.top = binding.arg.top + "px"; */
        el.onmousedown = function (e) {
            var x = e.clientX - el.offsetLeft;
            var y = e.clientY - el.offsetTop;
            document.onmousemove = function (eve) {
                el.style.left = eve.clientX - x + "px";
                el.style.top = eve.clientY - y + "px";
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    }
})
