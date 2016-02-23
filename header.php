<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>
<?php if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest'):?>
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <?php $APPLICATION->ShowHead()?>
        <title><?php $APPLICATION->ShowTitle()?></title>
    </head>

    <body>
        <?php /* ?><div id="panel"><?php $APPLICATION->ShowPanel();?></div><?php //*/ ?>
        == REQUEST_URI: <?=$_SERVER["REQUEST_URI"];?> ==<br /><br />

        <div id="app"></div>
        <script src="<?=SITE_TEMPLATE_PATH?>/js/build.js"></script>

    </body>
    </html>

<?php elseif (file_exists($_SERVER["DOCUMENT_ROOT"] . $_SERVER["REQUEST_URI"])):?>

    <?php require_once(($_SERVER["DOCUMENT_ROOT"] . $_SERVER["REQUEST_URI"]));?>

<?php endif;?>