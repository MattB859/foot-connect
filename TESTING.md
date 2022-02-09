# Testing

## Navigation 

| <p align="center">Feature</p>    | <p align="center">Expected</p> | <p align="center">Testing </p> | <p align="center">Results </p> | Pass/Fail  |
| -------------------------------- | -----------------------------  | ------------------------       | ---------------------------    | :--------: |
| 
|  Nav links |Clicking nav-links will <br> show drop-down menu | Click nav links  | Drop-down menu seen | Pass |
|   |Clicking drop-down menu <br> links will navigate users <br> to the links page | Click drop-down <br> menu  links   | Product page seen   | Pass |
| Jeans  |Redirect to Jeans <br> product page| Click Jeans | Product page seen  | Pass |
|     | Clicking Women will show <br> a drop-down menu <br>  for womens category  | Click Men  | Drop-down menu shows <br> Jeans, Shoes, Hoodies, <br> Tracksuits, Sweatshirt, Dresses, <br> All Clothing   | Pass |
|     | Clicking Kids will show <br> a drop-down menu <br>  for kids category  | Click Men  | Drop-down menu shows <br> Jeans, Shoes, Hoodies, <br> Tracksuits, Sweatshirt, T-Shirts, <br> All Clothing   | Pass |
|     | Clicking Accessories will <br> show  a drop-down menu <br>  for accessories category  | Click accessories  | Drop-down menu shows <br> Hats & Caps, Bags & <br> Wallets, All Accessories   | Pass |


## Footer

| <p align="center">Feature</p>    | <p align="center">Expected</p> | <p align="center">Testing </p> | <p align="center">Results </p> | Pass/Fail  |
| -------------------------------- | -----------------------------  | ------------------------       | ---------------------------    | :--------: |
| Social Media <br> Links  | Redirect to <br> Facebook in a new tab    | Click Facebook Icon  | Facebook page opens in new tab | Pass       |
|               | Redirects to Twitter <br> in new tab   | Click Twitter  Icon   | Twitter page opens <br> in new tab  | Pass       |
|                 | Redirects to Instagram <br> in new tab     | Click Instagram Icon  | Instagram page opens <br> in new tab     | Pass     |
| Contact us <br> Link | Redirects to the <br> contact page | Click Contact us | Contact Us page shown | Pass |


## Buttons 

| <p align="center">Feature</p>  | <p align="center">Expected</p> | <p align="center">Testing</p>    | <p align="center">Results </p>  | Pass/Fail  |
| ------------------------------ | -----------------------------  | -------------------------------- | ------------------------------  | :--------: |
| Shop Now       | Redirects users to the product | Click Shop Now   | Navigates to product page   | Pass       |
| Scroll Up     | Redirect users back to <br> the top of the page    | Click the scroll <br> up button | Takes users back to <br> the top page     | Pass     |


## Log In 

| <p align="center">Feature</p>    | <p align="center">Expected</p>    | <p align="center">Testing </p>     | <p align="center">Results</p>  | Pass/Fail  |
| ------------------------------   | -----------------------------     | ------------------------------     | ----------------------------   | :--------: |
| Log In         | Enter the correct user, password, <br> email address will direct users <br> to their home   | Log in with correct <br> username/password/ <br> email address | home page  | Pass       |
|                | Incorrect username/password/ <br> email address | Error showing "incorrect <br> username/password" | Flash message <br> displaying error | Pass|



## Registration

| <p align="center">Feature</p>    | <p align="center">Expected</p>    | <p align="center">Testing </p>     | <p align="center">Results</p>  | Pass/Fail  |
| -------------------------------  | -----------------------------     | -------------------------------    | ------------------------------ | :--------: |
| Register   | Username and Password must <br> have a minimum length <br> of 5 characters | Attempt to enter username <br> and password with less than <br> 5 characters | error displays "please match the <br> requested formate" | Pass |
|          | Username and Password must <br> have a maximum length <br> of 15 characters | Attempt to enter username <br> and password with more <br> than 15 characters | Form restrcits the user from <br> using more than 15 characters | Pass |
|          | Users can not register <br> with an existing username | Attempt to register with <br> an existing username | error flash message <br> "Username already exists" | Pass |


## Testing User Stories from User Experience (UX)

| User Stories | Expectation | Testing | Results | Pass/Fail |
| ------------ | ----------- | ------- | ------- | :------:  |
| Shopper      | I want to be able to... |    |  |           |
| | "Understand the main  purpose of the site" | On entering the site shoppers are greeted <br>  with fashion images and four cards displaying product categories | Click the product card  <br> 'Shop Now' button to view products | Pass |
| | "View individual product details" | Shoppers can use the navigation menu <br> and/or search bar to find a specific <br> category or product| Navigate to the products detail's <br> page their shoppers can find <br> the product rating, product<br> description, images, pricing, <br> and available sizes. | Pass |
| | "Quickly identify deals, clearance <br> items and special offers." | On the navigation bar there is a <br> Special Offers link | Shopper can click on the link to find deals, <br> clearances, and new arrivals | Pass |
| | "Easily view the total of <br> my purchases at any time." | Shoppers can add products to their <br> shopping cart to view the total amount. | On the navigation bar to the right <br> Shoppers will find the total sum of their order | Pass |
| Site User | "Easily register for an account" | Click Register, fill in a username, <br> email-address, password, click register. | Registration successful | Pass | 
|          | "Easily recover my password  in <br> case i forget it" | At the bottom of the Login page <br> site users can find a link (Forgot Password?) <br> enter your registered e-mail address <br> click the link to reset your password | Password successfully changed | Pass |
|      | "Receive an email confirmation <br> after registering." | A confirmation email is sent out <br> with every new registration. | Hello from Foot Connect! <br> You're receiving this e-mail because <br> user test has given your e-mail address <br> to register an account on <br> footconnect.com | Pass | 
|      |  "Have a personalized user profile" | Registered users can Navigate to their <br> profile page, here they can view/update <br> personal delivery details, and order <br>  history summery | Navigate to My Account, <br> Click on My Profile | Pass |
|        | "Add reviews" | Navigate to product detail page <br> click reviews and 'Add Comment' | Fill in the form and submit. <br> A message will display <br> 'Comment added successfully!' |  Pass |
| Shopper | "Sort a specific category" | Shopper have access to a sort by... filter <br> which allows shoppers to sort by <br> category, name, rating, and price. | Navigate to the <br>products page  find sort by filter | Pass |
| | "Sort a specific category" | Shoppers can sort by category <br> by clicking sort by... | Navigate to the products page. <br> Click sort by... Category (A-Z), Price (high to low), <br> Name (A-Z), and Rating (low to high) | Pass |
| | "Add a product to my wish list" | | | |
| | "Search for a product by <br> name or description" | On entering the site at the top of <br> the page shoppers will find a search bar | Click to search by name or description | Pass | 
|   | "Easily see what I've searched <br> for and the results" | Enter a name or product description <br> in the search bar | Shoppers can see the total number <br> of products found within a search result <br> 41 Products found for "Jordan"    | Pass |
|   | "Easily select the size and quantity <br> of a product when purchasing it." | Navigate to the products detail page | Select your size by clicking the input field, <br> Select the quantity by clicking plus or minus <br> to increase/decrease the quantity | Pass |
|     | "View items in my cart to be purchased" | Bootstrap toast has been used <br> to show a preview of the shopping <br> cart each time a shopper adds a product | Success! message can be seen  with product <br> images and the total cost of the items   | Pass | 
|       | "Change the quantity of items in my cart" | Navigate to the shopping cart | Shoppers can adjust the quantity <br> by pressing   plus or minus  | Pass |
|    | "See my order confirmation upon checkout" |  Navigate to the checkout page,  <br> fill out the form, and enter a <br> valid and card number | shoppers are directed to the checkout success <br> page where they can view <br> their order information | Pass |
|      | "Receive an email confirmation upon checkout" |  A success message is displayed upon checkout  | Order successfully processed! <br> Your  order number  is <br> ********. A confirmation email will be sent to test@gmail.com <br> | Pass |
| Admin User | "Add a product" | Navigate to my account and select <br> product management from the drop-down menu. | Users will need to fill <br> in the form to add a product to the store | Pass |


# Chrome Developer Tools

Chrome Dev Tools was used for inspection of HTML, and CSS. It helped to diagnose problems, and debug issues right in the browsers.

## Responsive Testing

-   The website was tested to ensure all pages render well on a variety of devices and screen sizes such as:

    - Desktop 
    - Laptop 
    - Motorola G4 
    - Galaxy S5/7
    - Pixel 2
    - Pixel 2 XL
    - Samsung Galaxy S20
    - iPhone 5/SE 
    - iPhone 6/7/8/Plus 
    - iPhone X, 
    - iPad/Pro.

The Website was tested on Google Chrome, Firefox, Microsoft Edge and Safari browsers.

A large amount of testing was done to ensure that all pages were linking correctly.

Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

## Bug's found and fixed

<details><summary>CLICK ME</summary>
<p>

<img align="center"  src="media/code-bug.png">

</p>
</details>


- ### The Bug in this code was causing shoe sizes not to display.

```
 {% if item.product.has_sizes %}

```
- ### I overcome the issue by adding further conditions

```
 {% if item.product.has_sizes or item.product.shoe_sizes %} 
```

- ### The bug in this code was causing carousel img width to be over stretched and unresponsive

```
.carousel-cell { 
width: 20%;
margin-right:10px; 
background: none;
border-radius: 5px;
counter-increment: carousel-cell;
}
```
- ### In this new code I simply changed the width with a 290px.

```
.carousel-cell { 
width: 290px;
margin-right:10px; 
background: none;
border-radius: 5px;
counter-increment: carousel-cell;
}
```

The quantity-form has been used twice, and hides one or the other depending on the screen size However, as the quantity-form uses an ID to identify itself, only the first element within the HTML with that ID is picked up by the corresponding code.

- ### In this new code I simply changed the ID on the quantity-form to a class.

- ### Error Bug
```
// Disable +/- buttons outside 1-99 range
    function handleEnableDisable(itemId) {
        var currentValue = parseInt($(`#id_qty_${itemId}`).val());
        var minusDisabled = currentValue < 2;
        var plusDisabled = currentValue > 98;
        $(`#decrement-qty_${itemId}`).prop('disabled', minusDisabled);
        $(`#increment-qty_${itemId}`).prop('disabled', plusDisabled);
    }
```

-  ### Fixed bug
```
  <!-- Fix Bug -->
    <button class="decrement-qty btn btn-sm btn-black rounded-0 decrement-qty_{{ item.item_id }} 
        {% if item.size %}decrement-size_{{ item.item_id }}_{{ item.size }}{% endif %}"
        data-item_id="{{ item.item_id }}" data-size="{{ item.size }}">
        <span>
            <i class="fas fa-minus fa-sm"></i>
        </span>
    </button>
      
            
    <input class="form-control form-control-sm qty_input id_qty_{{ item.item_id }} 
    {% if item.size %}size_{{ item.item_id }}_{{ item.size }}{% endif %}" type="number"
     name="quantity" value="{{ item.quantity }}" min="1" max="99"
     data-item_id="{{ item.item_id }}" data-size="{{ item.size }}">

```
```
 function handleEnableDisable(itemId, size) {
        if (size) {
            var currentValue = parseInt($(`.size_${itemId}_${size}`).val());
        } else {
            var currentValue = parseInt($(`.id_qty_${itemId}`).val());
        }

        var minusDisabled = currentValue < 2;
        var plusDisabled = currentValue > 98;

        if (size) {
            $(`.decrement-size_${itemId}_${size}`).prop('disabled', minusDisabled);
            $(`.increment-size_${itemId}_${size}`).prop('disabled', plusDisabled);
        } else {
            $(`.decrement-qty_${itemId}`).prop('disabled', minusDisabled);
            $(`.increment-qty_${itemId}`).prop('disabled', plusDisabled);
        }
    }
    
```