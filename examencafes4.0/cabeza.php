<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <link rel="stylesheet" href="orbit-1.2.3.css">
	  	<link rel="stylesheet" href="estilo.css">
        <link rel="stylesheet" href="esteestilo.css">
		<!-- Attach necessary JS -->
		<script type="text/javascript" src="jquery-1.5.1.min.js"></script>
		<script type="text/javascript" src="jquery.orbit-1.2.3.min.js"></script>	
		<script type="text/javascript" src="jquery.orbit-1.2.3.js"></script>
			<!--[if IE]>
			     <style type="text/css">
			         .timer { display: none !important; }
			         div.caption { background:transparent; filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000);zoom: 1; }
			    </style>
			<![endif]-->
		
		<!-- Run the plugin -->
		<script type="text/javascript">
			$(window).load(function() {
				$('#featured').orbit();
			});
		</script>
</head>
<body>
  
    <div id="box">
        <!--empieza la cabeza de la pagina-->
        <div id="cabeza"><img src="img/logo.png" alt="" class="img1">
            <nav id="menu">
                <ul>
                    <li><a href="index1.php">INICIO</a> </li>
                    <li><a href="galeria.php">GALERIA</a> </li>
                    <li><a href="quienessomos.php">QUIENES SOMOS</a>
                    </li>
                    <li><a href="contactos.php">CONTACTO</a> </li>
                    <li><a href="formulario.php">FORMULARIO</a></li>
                </ul>
                <img class="pequetele" src="dummy-images/logotelefonopeque.png" alt="">
                <img class="facepeque" src="dummy-images/pequefacebook.png" alt="">
        </nav>
          
        </div>