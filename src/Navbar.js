import React from 'react';
import "./Navbar.css";
//import 'bootstrap/dist/css/bootstrap.css';

const Navbar =()=> {
    return (
        <div class="mix">
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header menuitem">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Menu Item 1</a></li>
        <li><a href="#">Menu Item 2</a></li>
        <li><a href="#">Menu Item 3</a></li>
      </ul>
    </div>
    <div>  <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> <span class="fa fa-gift bigicon"></span> 4 - Items in Cart<span class="caret"></span></a>
          <ul class="dropdown-menu dropdown-cart" role="menu">
              <li>
                  <span class="item">
                    <span class="item-left">
                        <img src="http://www.prepbootstrap.com/Content/images/template/menucartdropdown/item_1.jpg" alt="" />
                        <span class="item-info">
                            <span>Item name</span>
                            <span>price: 27$</span>
                        </span>
                    </span>
                    <span class="item-right">
                        <button class="btn btn-danger  fa fa-close"></button>
                    </span>
                </span>
              </li>
<li>
                  <span class="item">
                    <span class="item-left">
                        <img src="http://www.prepbootstrap.com/Content/images/template/menucartdropdown/item_2.jpg" alt="" />
                        <span class="item-info">
                            <span>Item name</span>
                            <span>price: 3$</span>
                        </span>
                    </span>
                    <span class="item-right">
                        <button class="btn btn-danger  fa fa-close"></button>
                    </span>
                </span>
              </li>
                            <li>
                  <span class="item">
                    <span class="item-left">
                        <img src="http://www.prepbootstrap.com/Content/images/template/menucartdropdown/item_3.jpeg" alt="" />
                        <span class="item-info">
                            <span>Item name</span>
                            <span>price: 12$</span>
                        </span>
                    </span>
                    <span class="item-right">
                        <button class="btn btn-danger  fa fa-close"></button>
                    </span>
                </span>
              </li>
<li>
                  <span class="item">
                    <span class="item-left">
                        <img src="http://www.prepbootstrap.com/Content/images/template/menucartdropdown/item_4.jpg" alt="" />
                        <span class="item-info">
                            <span>Item name</span>
                            <span>price: 7$</span>
                        </span>
                    </span>
                    <span class="item-right">
                        <button class="btn btn-danger  fa fa-close"></button>
                    </span>
                </span>
              </li>              
              <li class="divider"></li>
              <li><a class="text-center" href="#">View Cart</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}


export default Navbar;