const products =["mercedes", "audi", "ford", "lamborghini"];



function  showProduct(...show) {
    if (show == ""){
       console.log("là 1 chuỗi rỗng");
    }else{
        console.log(show);
    }  
}
// showProduct(...products);
function addProduct(string) {
    var string = prompt("nhập vào sản phẩm ");
    if(string.length <5){
        alert("nhập lại");
    }
    else{
        products[4]=string;
        console.log(products);
    }
}
// addProduct();

function  removeProduct(array) {
    console.log(array);
    let productDelete= prompt(" nhập vào sản phẩm cần xóa");
    let index = array.indexOf(productDelete)
    if( index == products ){
        array.splice(index,1)
        console.log(" xóa  thành công")
    }else{
        alert("không tìm thấy sản phẩm");
    }
    console.log(array);
    
    
}
// removeProduct(products)
function updateProduct(update) {
    var update =prompt(' nhập sản phẩm cần update ');
    if (update != products){
        console.log('không tìm thấy dữ liệu');
    }
    else{
        update==products;

    }
    console.log(products)
    
}


function removeAllProduct (myarray){
    console.log(myarray);

myarray.length = [];
console.log(myarray);
}
// removeAllProduct(products);

