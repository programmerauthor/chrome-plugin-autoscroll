/**
 * 自动滚动页面，例如看小说的情况
 */
var ScrollBar = {
	interval:0,
	startScroll(){
        if(this.interval!=0){
            console.log(`scrolling ${this.interval}`);
            return;
        }
		this.interval =  setInterval(()=>{
			window.scrollTo(0,document.documentElement.scrollTop+1)
        },20);
        console.log('启动:'+this.interval);
	},
	cancelScroll(){
        clearInterval(this.interval);
        this.interval = 0;
        console.log('取消:'+this.interval);
	},
	scrollBarCss:`
	  position:fixed;
	  top:60px;
      right:60px;
      display:flex;
      flex-direction:row;
      opacity:0.3;
    `,
    scrollBarHtml:`
        <button type="button" class="start">start</button>
        <button type="button" class="stop">stop</button>
    `,
    createScrollBar(){
        //创建组件
        let scrollBar = document.createElement('div');
        //通过html字符串创建Element对象
        scrollBar.innerHTML = this.scrollBarHtml;
        //设置相关属性
        scrollBar.style.cssText = this.scrollBarCss;
        //设置点击事件
        let startBt = scrollBar.getElementsByClassName('start')[0];
        let stopBt = scrollBar.getElementsByClassName('stop')[0];
        startBt.onclick = this.startScroll.bind(this); // 绑定当前this
        stopBt.onclick = this.cancelScroll.bind(this); // 绑定当前this
        return scrollBar;
    },
	addScrollBar(){
        let scrollBar = this.createScrollBar();
        let body = document.getElementsByTagName('body');
        console.log(body);
        body = body[0];
        body.appendChild(scrollBar);
    }
}


ScrollBar.addScrollBar();