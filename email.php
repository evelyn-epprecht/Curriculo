<?php
    $assunto='Gostei do seu perfil';
    $destinatario='evelynrib2306@gmail.com';
    $conteudo = $_POST['email'];
    mail($destinatario, $assunto, $conteudo);
?>
     