const selectFrontSize=document.getElementById("selectFontSize");
const selectBgColor=document.getElementById("selectBgColor");
const resetButton=document.getElementById("resetButton");
const mainElement=document.querySelector("main");
//function
const setValues=(fontSize,Bgcolor)=>{
    selectBgColor.value=Bgcolor;
    selectFrontSize.value=fontSize;
    mainElement.style.fontSize=fontSize;
    mainElement.style.backgroundColor=Bgcolor;
}
//load local storage value
const initialSetup=()=>{
    const Bgcolor=localStorage.getItem("bgcolor");
    const fontSize=localStorage.getItem("fontSize");
    if(Bgcolor && fontSize){
        setValues(Bgcolor,fontSize);
    }

    if(!Bgcolor && !fontSize){
        setValues("16px","aqua")
    }

    if(!Bgcolor && fontSize){
        setValues(fontSize,"aqua")
    }

    if(Bgcolor && !fontSize){
        setValues("16px",Bgcolor)
    }

}
//changeFrontSize
const changeFrontSize=(event)=>{
    const selectFontSize=event.target.value;
    mainElement.style.fontSize=selectFontSize;
    localStorage.setItem("fontSize",selectFontSize);

}

//changeBgColor
const changeBgColor=(event)=>{
    const selectBgColor=event.target.value;
    mainElement.style.backgroundColor= selectBgColor;
    localStorage.setItem("bgcolor",selectBgColor);

}
//clearLocalStorage
const clearLocalStorage=()=>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgcolor");
    setValues("16px","aqua");

};
//add event listeners
selectFrontSize.addEventListener("change",changeFrontSize);
selectBgColor.addEventListener("change",changeBgColor);
resetButton.addEventListener("click",clearLocalStorage);
initialSetup();