function addToWishlist() {
    alert('Added to Wishlist!');
}

function addToBag() {
    alert('Added to Bag!');
}
function addToWishlist() {
    alert('Added to Wishlist!');
}

function addToBag() {
    alert('Added to Bag!');
}


function redirectToCheckoutForm() {
    window.location.href = 'checkout_form.html';

}
        function redirectToTransactionPage() {
            
            var name=document.getElementById("fname").value;
            var mail=document.getElementById("email").value;
            var address=document.getElementById("adr").value;
            var cty=document.getElementById("city").value;  
            var ste=document.getElementById("state").value;   
            var zipcode=document.getElementById("zip").value;   
            var cardname=document.getElementById("cname").value;
            var cardnum=document.getElementById("cnum").value;
            var expm=document.getElementById("expmonth").value;
            var expy=document.getElementById("expyear").value;
            var cv=document.getElementById("cvv").value;     
            
            if(name==""||mail==""||address==""||cty==""||ste==""||zipcode==""||cardname==""||cardnum==""||expm==""||expy==""||cv=="" )
            {
                alert("All fields must be filled");
                return false;
            }


           /* window.location.href = 'transaction_page.html';
            return false;*/

        }

        document.addEventListener('DOMContentLoaded', function() {
            var buyNowButton = document.getElementById('buy');
            buyNowButton.addEventListener('click', function() {
                window.location.href = 'checkout_form.html';
            });

        });

