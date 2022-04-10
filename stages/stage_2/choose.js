document.addEventListener("DOMContentLoaded",(e) => {
    // 获取轮播容器
    const container = document.getElementById("my-slider");
    // 获取轮播的图片集合
    const items = container.querySelectorAll(".slider-list__item");
    // 定时器变量
    // let timer = null;
    // 多长时间轮播一张图片
    const interval = 1500;
    // 获取上一张按钮
    const previousButton =  container.querySelector(".slide-list__previous")
    // 获取下一张按钮
    const nextButton =  container.querySelector(".slide-list__next") 
    //获取 小圆点 controller  容器
    const controller = container.querySelector(".slider-list__controller");
    // 获取 小圆点集合
    const buttons = controller.querySelectorAll(".slider-list__controller-button");
    // 给上一张按钮绑定事件
    previousButton.addEventListener("click",(e)=>{
    stop()
    previous()
    autoStart()
    e.preventDefault()
    })
    // 给下一张按钮绑定事件
    nextButton.addEventListener("click",(e)=>{
    stop()
    next()
    autoStart()
    e.preventDefault()
    })
    // 鼠标经过事件停止自动轮播, 并切换到当前位置
    // controller.addEventListener("mouseover",(e)=>{
    // const nextItemIndex = getControllerIndex(e.target)
    // // 如果存在
    // if(nextItemIndex > -1){
    // // 停止轮播
    // stop()
    // slideTo(nextItemIndex)
    // }
    // })


    // // 鼠标离开时候启动 自动轮播
    // controller.addEventListener("mouseout",(e)=>{
    // const nextItemIndex = getControllerIndex(e.target)
    // //如果存在
    // if(nextItemIndex > -1){
    // // 自动播放
    // autoStart()
    // }
    // })
    // 获取当前的图片dom节点
    function getCurrentItem(){
    return container.querySelector(".slider-list__item--active")
    }
    // 获取当前的图片位置
    function getCurrentItemIndex(){
    return Array.from(items).indexOf(getCurrentItem())
    }
    /**
    * 获取控制点的位置
    * @param  {String} target  鼠标经过的节点
    * @return {Number}  鼠标经过节点的位置
    */
    function getControllerIndex(target){
    const nextItemIndex = Array.from(buttons).indexOf(target);
    return nextItemIndex
    }
    //下一张图片
    function next() {
    // 获取下一张图片的位置
    const nextItemIndex = ( getCurrentItemIndex() + 1) % items.length;
    // 切换
    slideTo(nextItemIndex)
    }
    /**
    * 切换到指定位置的图片
    * @param  {number} index 图片的位置
    * @return {undefined} 
    */
    function slideTo( index ) {
    // 获取当前展示的图片 节点
    const currentItem = getCurrentItem(),
    // 获取下一次要展示的图片节点
    nextItem = items[index],
    // 获取 当前展示 圆点的 节点
    currentButton = buttons[getCurrentItemIndex()],
    // 获取 下一次要展示的圆点节点
    nextButton = buttons[index]
    
    
    // 隐藏 当前的图片
    currentItem.classList.remove("slider-list__item--active")
    // // 显示 指定 index 的图片
    nextItem.classList.add("slider-list__item--active")
    
    
    
    // 取消 当前圆点的高亮状态
    currentButton.classList.remove("slider-list__controller-button--active")
    // 添加 要展示圆点的高亮状态
    nextButton.classList.add("slider-list__controller-button--active")
    
    
    }
    // //自动轮播
    function autoStart() {
    let timer = setInterval(function(){ 
    // 切换到下一张
    next()
    },interval)
    }
    //开始轮播
    autoStart()
    
    });

