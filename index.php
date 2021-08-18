<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Instagram</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/index.js"></script>
</head>
<body>
    <div id="content">
        <div id="site-bg"></div>
        <header>
            <div id="header-container-feed">
                <a href="#" class="mobile"><img class="icon" src="assets/img/photo.svg" alt="icône photo"></a>
                <a href="index.php" id="logo"><img src="assets/img/logo.png" alt="logo Instagram"></a>

                <input type="search" id="search" class="desktop" name="search" placeholder="Search">

                <div class="menu-header mobile">
                    <a href="#"><img class="icon" src="assets/img/tv.svg" alt="icône tv"></a>
                    <a href="#"><img class="icon" src="assets/img/send.svg" alt="icône send"></a>
                </div>
                <div class="menu-header desktop">
                    <span class="to-feed"><img class="icon icon-feed" src="assets/img/home-active.svg" alt="icône home"></span>
                    <a href="#"><img class="icon" src="assets/img/send.svg" alt="icône send"></a>
                    <a href="#"><img class="icon" src="assets/img/compass.svg" alt="icône compass"></a>
                    <a href="#" class="notification"><img class="icon" src="assets/img/heart.svg" alt="icône heart"><div class="display-notification"><p><img src="assets/img/bubble-filled.svg" alt="">1</p><p><img src="assets/img/heart-filled.svg" alt="icône heart">9</p><p><img src="assets/img/profile-filled.svg" alt="icône profile">5</p></div></a>
                    <span class="to-profile"><img class="icon" id="profile-picture" src="assets/img/pp.png" alt="image de profil"></span>
                </div>
            </div>

            <div id="header-container-profile">
                <span class="to-feed"><img id="back" class="icon" src="assets/img/back.svg" alt="icône back"></span>
                <p class="user-name mobile">username</p>
                <a class="mobile" href="#" id="user-header-more">...</a>
            </div>

            <nav>
                <span class="to-feed"><img class="icon icon-feed" src="assets/img/home-active.svg" alt="icône home"></span>
                <a href="#"><img class="icon" src="assets/img/search.svg" alt="icône search"></a>
                <a href="#"><img class="icon" src="assets/img/add.svg" alt="icône add"></a>
                <a href="#" class="notification"><img class="icon" src="assets/img/heart.svg" alt="icône heart"><div class="display-notification"><p><img src="assets/img/bubble-filled.svg" alt="icône bubble">1</p><p><img src="assets/img/heart-filled.svg" alt="icône heart">9</p><p><img src="assets/img/profile-filled.svg" alt="icône profile">5</p></div></a>
                <span class="to-profile"><img class="icon icon-profile" src="assets/img/profile.svg" alt="icône profile"></span>
            </nav>
            
        </header>
    
        <main>

            <?php 
                @require('req/feed.php');
                @require('req/profile.php');
                @require('req/search.php');
            ?>
  
        </main>
    </div>
</body>
</html>