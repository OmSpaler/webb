<?php include('cabeza.php');?>
        <!--empieza el contenido de la pagina-->
        <?php include('slider.php');?>
        <section id="contenido">
        <form class="contact_form" action="#" method="post">
            <ul>
                <li>
                    <h2>Contactanos</h2>
                </li>
                <li>
                    <label for="name">Nombre:</label>
                    <input type="text" placeholder="Johan Ricardo" required>
                    <h3 class="fax">Fax: 901955791</h3>
                    <img class="imgfax" src="dummy-images/faxicono.png" alt="">
                </li>
                <li>
                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="jricardo@ejemplo.com" required>
                    <h3 class="telefono">Telefono:(+591 2 22 644)</h3>
                    <img class="imgtelefono" src="dummy-images/iconotelefono.png" alt="">
                </li>
                <li>
                    <label for="website">Sitio Web:</label>
                    <input type="url" name="web" placeholder="http://tutosytips.com" required>
                    <h3 class="gmail">mail:coffebrand@.gmail.com.bo</h3>
                    <img class="imail" src="dummy-images/emailicono.png" alt="">
                    
                </li>
                <li>
                    <label for="Mensaje">Mensaje:</label>
                    <textarea name="Mensaje"  cols="40" rows="6" required></textarea>
                    
                </li>
                <li>
                    <button class="submit" type="submit">Enviar</button>
                </li>
            </ul>
        </form>
        <img class="mapa" src="dummy-images/mapa.png" alt=""></img>
</section>
        
        
        
        <!--empieza el pie de la pagina-->
       <?php include('pie.php');?>
  <?php include('menuanimado.php');?>
</body>
</html>