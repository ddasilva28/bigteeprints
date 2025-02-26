/*******************************
        Toggle Menu
 ******************************/

        var MenuItems = document.getElementById("MenuItems");

        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
            if (MenuItems.style.maxHeight == "0px")
            {
                MenuItems.style.maxHeight = "200px";
            }
            else
            {
                MenuItems.style.maxHeight = "0px";
            }
        }

/*******************************
        Product Gallery
******************************/
        var ProductImg = document.getElementById("ProductImg");
        var SmallImg = document.getElementsByClassName("small-img")

        SmallImg[0].onclick = function(){
            ProductImg.src =  SmallImg[0].src;
        }
        SmallImg[1].onclick = function(){
            ProductImg.src =  SmallImg[1].src;
        }
        SmallImg[2].onclick = function(){
            ProductImg.src =  SmallImg[2].src;
        }
        SmallImg[3].onclick = function(){
            ProductImg.src =  SmallImg[3].src;
        }

/*******************************
        Toggle Form
******************************/
function menutoggle() {
    var menuItems = document.getElementById("MenuItems");
    menuItems.classList.toggle('active');
}
