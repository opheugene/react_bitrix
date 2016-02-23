<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <?php $APPLICATION->ShowHead()?>
    <title><?php $APPLICATION->ShowTitle()?></title>
</head>

<body>
    <?php /* ?>== REQUEST_URI: <?=$_SERVER["REQUEST_URI"];?> ==<br /><br /><?php //*/ ?>

    <div id="app"></div>
    <script src="<?=SITE_TEMPLATE_PATH?>/js/build.js"></script>

</body>
</html>
