<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="author" content="Sahil Kumar">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Shopping Cart System</title>
  <link type="text/css" rel="stylesheet" href="css/index.css">
    <link type="text/css" rel="stylesheet" href="css/bootstrap.css">
    <link type="text/css" rel="stylesheet" href="css/bootstrapecommerce.css">
 <!-- <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css' /> !-->
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css' />
  <style>
  .fa, .fas {
    font-weight: 900;
    color: black;
}
  
   
    .titoli {
        color: #FADC15;
        font-family: "Sabado";
        text-align: right;
        font-size: 30px;
    }
    
    .titolineri {
        color: black;
        font-family: "Sabado";
        text-align: right;
        font-size: 30px;
    }
    
    .titoli1 {
        color: #FADC15;
        font-family: "Sabado";
        text-align: center;
        font-size: 30px;
    }
    
  
    .btn btn-info btn-block addItemBtn{
      color: #FADC15;
    }
    .testodiprova {
      padding-top:50px;
        display: block;
        padding-left:300px;4
    }
    
    @media screen and (max-width: 680px) {
        #herobanner {
            height: cover;
            width: cover;
            background-size: cover;
        }
       
    }
    
    @media screen and (min-width: 400px) {}
    /* desktop con monitor largo: più di 1200 pixel */
    
    @media (min-width: 1200px) {}
    /* per device con monitor larghi da 768 a 979 pixel: tablet orizzontali o desktop */
    /* tra 480 pixel e 767 pixel: tablet vari */
    /* Tutto ciò che ha un monitor più piccolo di 480 pixel: telefoni */
    
    @media (max-width: 480px) {
        .hero h1 {
            color: black;
            font-family: Sabado;
            font-size: 9px;
        }
        .intro {
            line-height: 30px;
            font-family: 'Poppins', sans-serif;
        }
    }
    
    .bold {
        padding-top: 30px;
        font-weight: 700;
    }
    
    .interlinea {
        line-height: 30px;
    }
    
    .intro {
        line-height: 30px;
        padding-left: 300px;
        padding-right: 300px;
        font-family: 'Poppins', sans-serif;
    }
    
    @media (max-width: 480px) {
        .intro {
            color: black;
            line-height: 30px;
            padding-left: 10px;
            padding-right: 10px;
            font-family: 'Poppins', sans-serif;
        }
    }
    
    @media (max-width: 480px) {
        .intro {
            line-height: 30px;
            padding-left: 10px;
            padding-right: 10px;
            font-family: 'Poppins', sans-serif;
        }
        .product_item {
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }
    
    .breadcrumbs {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .breadcrumbs li {
        list-style: none;
        margin: 0;
        padding: 0;
        display: block;
        float: left;
        font-family: Helvetica Neue, sans-serif;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: .05em;
        line-height: 20px;
        color: black;
    }
    
    .breadcrumbs li a {
        display: block;
        font-size: 10px;
        padding: 0 40px 0 0px;
        color: black;
        text-decoration: none;
        height: 20px;
        position: relative;
        perspective: 700px;
    }
    
    .breadcrumbs li a:after {
        content: '';
        width: 20px;
        height: 20px;
        border-color: #333;
        border-style: solid;
        border-width: 1px 1px 0 0;
        -webkit-backface-visibility: hidden;
        outline: 1px solid transparent;
        position: absolute;
        right: 20px;
        -webkit-transition: all .15s ease;
        -moz-transition: all .15s ease;
        -ms-transition: all .15s ease;
        transition: all .15s ease;
        -webkit-transform: rotateZ(45deg) skew(10deg, 10deg);
        -moz-transform: rotateZ(45deg) skew(10deg, 10deg);
        -ms-transform: rotateZ(45deg) skew(10deg, 10deg);
        transform: rotateZ(45deg) skew(10deg, 10deg);
    }
    
    .breadcrumbs li a:hover:after {
        right: 15px;
        -webkit-transform: rotateZ(45deg) skew(-10deg, -10deg);
        -moz-transform: rotateZ(45deg) skew(-10deg, -10deg);
        -ms-transform: rotateZ(45deg) skew(-10deg, -10deg);
        transform: rotateZ(45deg) skew(-10deg, -10deg);
    }
    .top{
    padding-top:300px;
    }
</style>
</head>

<body>

  
  <!-- Navbar start 
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <a class="navbar-brand" href="index.php"><i class="fas fa-mobile-alt"></i>&nbsp;&nbsp;Mobile Store</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link active" href="index.php"><i class="fas fa-mobile-alt mr-2"></i>Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-th-list mr-2"></i>Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="checkout.php"><i class="fas fa-money-check-alt mr-2"></i>Checkout</a>
        </li>
        
      </ul>
    </div>
  </nav>
 Navbar end -->


<section id="hero2" class="hero">

<header class="global-nav">
    <nav role="navigation" class="container">
        <ul class="nav-wrapper">
            <!-- Start Logo Section -->
            <li class="navsection-logo">

                </a>
            </li>
            <!-- End Logo Section -->
            <!-- Start Primary Section -->
            <li class="navsection-primary">
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="chisiamo.html">CHI SIAMO </a></li>
                    <li><a href="noleggio.html">NOLEGGIO</a></li>
                    <li><a href="contatti.html">CONTATTI</a></li>
                    <li class="nav-item">
          <a class="nav-link" href="cart.php"><i class="fas fa-shopping-cart"></i> <span id="cart-item" class="badge badge-danger"></span></a>
        </li>
                </ul>
          
                        <!-- End Primary Section -->
                        <!-- Start Mobile Section -->
                        <li class="navsection-mobile">
                            <!-- Mobile Menu Button -->
                            <h2>Menu</h2>
                            <a class="mobilemenu-wrapper" id="toggle">
                                <span class="bars"></span>
                                <span class="bars"></span>
                                <span class="bars"></span>
                            </a>
                            <!-- Overlay -->
                            <div class="overlay" id="overlay">
                                <div>
                                    <ul>
                                        <li><a href="index.html">HOME</a></li>
                                        <li><a href="chisiamo.html">CHI SIAMO </a></li>
                                        <li><a href="noleggio.html">NOLEGGIO</a></li>
                                        <li><a href="contatti.html">CONTATTI</a></li>
                                        <li><a href="/">Konsultation</a></li>
                                        <i class="fas fa-shopping-cart"></i>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <!-- End Mobile Section -->
                        <!-- Start Search Section -->

                        <div>
                        </div>
                    </li>
        </ul>
    </nav>
</header>

<div>
</div>


</nav>
<div class="inner">
    <h1 class="yellowtitle"> QR BIKE</h1>

    <h7 class="noisiamo">CHI SIAMO </h7>
</div>
</section>



</section>




<h1 class="testodiprova">
        MOUNTAIN E BIKE COLLECTION -
        <bold>STAND OUT</bold>
    </h1>

    <p class="intro">
        Distinguiti, fatti notare.<b> STAND OUT</b> è la collezione dedicata a chi vuole distinguersi in modo unico, e ricerca un prodotto di carattere e forte personalità. Forme, design e colori all’avanguardia contraddistinguono questi prodotti dall’inconfondibile
        stile Bottecchia. Esperienza e tradizione si fondono all’innovazione tecnologica e di design per creare una collezione assolutamente unica. STAND OUT is the collection dedicated to those who want to stand out in a unique way, and search for a
        product with character and strong personality. Cutting-edge shapes, designs and colours distinguish these products with the unmistakable Bottecchia style. Experience and tradition blend together technological innovation and design to create an
        absolutely unique collecti
    </p>

  <div class="spazio">
    <ul class="breadcrumbs">
            <li><a href="index.html">Home</a></li>
            <li><a href="noleggio.html">Noleggio</a></li>
            <li><a href="#">Ebike</a></li>

        </ul>
  </div>
  
  <div class="container">
    
    <div id="message"></div>
    <div class="row mt-2 pb-3">
      <?php
  			include 'config.php';
  			$stmt = $conn->prepare('SELECT * FROM product');
  			$stmt->execute();
  			$result = $stmt->get_result();
  			while ($row = $result->fetch_assoc()):
  		?>
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2">
        <div class="card-deck">
          <div class="card p-2 border-secondary mb-2">
            <img src="<?= $row['product_image'] ?>" class="card-img-top" height="250">
            <div class="card-body p-1">
              <h4 class="card-title text-center text-info"><?= $row['product_name'] ?></h4>
              <h5 class="card-text text-center text-danger"><i class="fas fa-rupee-sign"></i>&nbsp;&nbsp;<?= number_format($row['product_price'],2) ?>/-</h5>

            </div>
            <div class="card-footer p-1">
              <form action="" class="form-submit">
                <div class="row p-2">
                  <div class="col-md-6 py-1 pl-4">
                    <b>Quantity : </b>
                  </div>
                  <div class="col-md-6">
                    <input type="number" class="form-control pqty" value="<?= $row['product_qty'] ?>">
                  </div>
                </div>
                <input type="hidden" class="pid" value="<?= $row['id'] ?>">
                <input type="hidden" class="pname" value="<?= $row['product_name'] ?>">
                <input type="hidden" class="pprice" value="<?= $row['product_price'] ?>">
                <input type="hidden" class="pimage" value="<?= $row['product_image'] ?>">
                <input type="hidden" class="pcode" value="<?= $row['product_code'] ?>">
                <button class="btn btn-info btn-block addItemBtn"><i class="fas fa-cart-plus"></i>&nbsp;&nbsp;Add to
                  cart</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <?php endwhile; ?>
    </div>
  </div></div>
  <!-- Displaying Products End -->

  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js'></script>

  <script type="text/javascript">
  $(document).ready(function() {

    // Send product details in the server
    $(".addItemBtn").click(function(e) {
      e.preventDefault();
      var $form = $(this).closest(".form-submit");
      var pid = $form.find(".pid").val();
      var pname = $form.find(".pname").val();
      var pprice = $form.find(".pprice").val();
      var pimage = $form.find(".pimage").val();
      var pcode = $form.find(".pcode").val();

      var pqty = $form.find(".pqty").val();

      $.ajax({
        url: 'action.php',
        method: 'post',
        data: {
          pid: pid,
          pname: pname,
          pprice: pprice,
          pqty: pqty,
          pimage: pimage,
          pcode: pcode
        },
        success: function(response) {
          $("#message").html(response);
          window.scrollTo(0, 0);
          load_cart_item_number();
        }
      });
    });

    // Load total no.of items added in the cart and display in the navbar
    load_cart_item_number();

    function load_cart_item_number() {
      $.ajax({
        url: 'action.php',
        method: 'get',
        data: {
          cartItem: "cart_item"
        },
        success: function(response) {
          $("#cart-item").html(response);
        }
      });
    }
  });
  </script>
</body>

</html>