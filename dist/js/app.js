function wdf(){
    document.getElementById("sb-1").classList.add("sb-active")
    document.getElementById("sb-2").classList.remove("sb-active")
    document.getElementById("sb-3").classList.remove("sb-active")
    document.getElementById("sb-4").classList.remove("sb-active")

    document.getElementById("sbm-1").classList.add("si-wraper-mb-ac")
    document.getElementById("sbm-2").classList.remove("si-wraper-mb-ac")
    document.getElementById("sbm-3").classList.remove("si-wraper-mb-ac")
    document.getElementById("sbm-4").classList.remove("si-wraper-mb-ac")
    
    document.getElementById("sbit-1").classList.add("sb-item-ac")
    document.getElementById("sbit-2").classList.remove("sb-item-ac")
    document.getElementById("sbit-3").classList.remove("sb-item-ac")
    document.getElementById("sbit-4").classList.remove("sb-item-ac")

    document.getElementById("WD").style.display = "block";
    document.getElementById("DM").style.display = "none";
    document.getElementById("GD").style.display = "none";
    document.getElementById("UU").style.display = "none";
}

function dmf(){
    document.getElementById("sb-1").classList.remove("sb-active")
    document.getElementById("sb-2").classList.add("sb-active")
    document.getElementById("sb-3").classList.remove("sb-active")
    document.getElementById("sb-4").classList.remove("sb-active")

    document.getElementById("sbm-1").classList.remove("si-wraper-mb-ac")
    document.getElementById("sbm-2").classList.add("si-wraper-mb-ac")
    document.getElementById("sbm-3").classList.remove("si-wraper-mb-ac")
    document.getElementById("sbm-4").classList.remove("si-wraper-mb-ac")
    
    document.getElementById("sbit-1").classList.remove("sb-item-ac")
    document.getElementById("sbit-2").classList.add("sb-item-ac")
    document.getElementById("sbit-3").classList.remove("sb-item-ac")
    document.getElementById("sbit-4").classList.remove("sb-item-ac")

    document.getElementById("WD").style.display = "none";
    document.getElementById("DM").style.display = "block";
    document.getElementById("GD").style.display = "none";
    document.getElementById("UU").style.display = "none";
}

function gdf(){
    document.getElementById("sb-1").classList.remove("sb-active")
    document.getElementById("sb-2").classList.remove("sb-active")
    document.getElementById("sb-3").classList.add("sb-active")
    document.getElementById("sb-4").classList.remove("sb-active")

    document.getElementById("sbm-1").classList.remove("si-wraper-mb-ac")
    document.getElementById("sbm-2").classList.remove("si-wraper-mb-ac")
    document.getElementById("sbm-3").classList.add("si-wraper-mb-ac")
    document.getElementById("sbm-4").classList.remove("si-wraper-mb-ac")
    
    document.getElementById("sbit-1").classList.remove("sb-item-ac")
    document.getElementById("sbit-2").classList.remove("sb-item-ac")
    document.getElementById("sbit-3").classList.add("sb-item-ac")
    document.getElementById("sbit-4").classList.remove("sb-item-ac")

    document.getElementById("WD").style.display = "none";
    document.getElementById("DM").style.display = "none";
    document.getElementById("GD").style.display = "block";
    document.getElementById("UU").style.display = "none";
}

function uuf(){
    document.getElementById("sb-1").classList.remove("sb-active")
    document.getElementById("sb-2").classList.remove("sb-active")
    document.getElementById("sb-3").classList.remove("sb-active")
    document.getElementById("sb-4").classList.add("sb-active")

    document.getElementById("sbm-1").classList.remove("si-wraper-mb-ac")
    document.getElementById("sbm-2").classList.remove("si-wraper-mb-ac")
    document.getElementById("sbm-3").classList.remove("si-wraper-mb-ac")
    document.getElementById("sbm-4").classList.add("si-wraper-mb-ac")
    
    document.getElementById("sbit-1").classList.remove("sb-item-ac")
    document.getElementById("sbit-2").classList.remove("sb-item-ac")
    document.getElementById("sbit-3").classList.remove("sb-item-ac")
    document.getElementById("sbit-4").classList.add("sb-item-ac")

    document.getElementById("WD").style.display = "none";
    document.getElementById("DM").style.display = "none";
    document.getElementById("GD").style.display = "none";
    document.getElementById("UU").style.display = "block";
}