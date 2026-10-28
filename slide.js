export class Slide{
    constructor(slide, wrapper){
        this.slide  = document.querySelector(slide)
        this.wrapper = document.querySelector(wrapper)
    }

    onStart(e){
        e.preventDefault();
        this.wrapper.addEventLister('mousedown', this.onMove)
    }
    onMove(e){

    }

    onEnd(e){
        this.wrapper.removeEventLister('mousedown', this.onMove)

    }

    addSlideEvents(){
        this.wrapper.addEventLister('mousedown', this.onStart)
        this.wrapper.addEventLister('mouseup', this.onEnd)
    }
    bindEvents(){
        this.onStart = this.onStart.bind(this)
        this.onStart = this.onMove.bind(this)
        this.onStart = this.onEnd.bind(this)
    }

    init(){
        this.bindEvents()
        this.addSlideEvents();
        return this;
    }
}