<div id="main-feed">
    <div id="main-left">
        <div id="stories">
            <a href="#" class="story" id="your-story">
                <div class="frame">
                    <div class="white-circle"></div>
                    <div class="picture"></div>
                </div>
                <p>Your Story</p>
            </a>

            <a href="#" class="story live">
                <div class="frame">
                    <div class="white-circle"></div>
                    <div class="picture"></div>
                    <div class="live-status">Live</div>
                </div>
                <p>username</p>
            </a>
            
            <?php for ($i=0; $i < 10; $i++) { ?>
                <a href="#" class="story">
                    <div class="frame">
                        <div class="white-circle"></div>
                        <div class="picture"></div>
                    </div>
                    <p>username</p>
                </a>
            <?php } ?>
        </div>

        <div id="posts">
            <!-- <?php for ($i=0; $i < 4; $i++) { ?>
                <div class="post">
                    <div class="post-top">
                        <a href="profile.php" class="post-publisher">
                            <div class="post-frame">
                                <div class="post-white-circle"></div>
                                <div class="post-profile-picture"></div>
                            </div>
                            <div class="post-profile">
                                <p>username</p>
                                <p>Your place</p>
                            </div>
                        </a>
                        <a href="#" class="post-more">...</a>
                    </div>

                    <div class="post-picture">
                        <div class="display-picture" style="background-image: url('assets/img/pp.png');"></div>
                    </div>

                    <div class="post-bot">
                        <div class="post-buttons">
                            <div class="post-buttons-left">
                                <a href="#"><img class="icon" src="assets/img/heart.svg" alt=""></a>
                                <a href="#"><img class="icon" src="assets/img/bubble.svg" alt=""></a>
                                <a href="#"><img class="icon" src="assets/img/send.svg" alt=""></a>
                            </div>
                            <a href="#"><img class="icon" src="assets/img/file.svg" alt=""></a>
                        </div>
                        <a href="#" class="post-likes">1.984 likes</a>
                        <div class="post-comment">
                            <a href="profile.php" class="comment-username">username</a>
                            <p>Hi! <a href="#" class="hashtag">#you</a></p>
                        </div>
                        <div class="post-infos">
                            <p>9 minutes ago  - <a href="#">See translation</a></p>
                        </div>
                    </div>
                </div>
            <?php } ?> -->
        </div>
        
    </div>

    <div id="main-right" class="large-desktop">
        <div id="right-profile">
            <div id="right-organisation-profile">
                <span class="to-profile"><img src="assets/img/pp.png" alt="image de profil"></span>
            
                <div id="right-names">
                    <span class="to-profile" id="right-pseudo">User</span>
                    <p id="right-title">User</p>
                </div>
            </div>
            
            <a href="#">Switch</a>
        </div>

        <div id="right-to-suggestions">
            <p>Suggestions for you</p>
            <a href="#">See all</a>
        </div>

        <div id="right-suggestions">
            <?php for ($i=0; $i < 5; $i++) { ?>
                <div class="right-suggestion">
                    <div class="right-organisation-suggestion">
                        <span class="to-profile"><div class="suggestion-pp"></div></span>
                        <div class="suggestion-infos">
                            <span class="suggestion-pseudo to-profile">User</span>
                            <p class="suggestion-followers">Followers : User + 6 other persons</p>
                        </div>
                    </div>
                    <a href="#">Follow</a>
                </div>
            <?php } ?>
        </div>

        <p id="right-links"><a href="#">About</a> - <a href="#">Help</a> - <a href="#">API</a> - <a href="#">Jobs</a> - <a href="#">Privacy</a> - <a href="#">Terms</a> - <a href="#">Locations</a> - <a href="#">Top Accounts</a> - <a href="#">Hashtags</a> - <a href="#">Language</a></p>

        <p id="privacy">© 2021 INSTAGRAM FROM FACEBOOK</p>

    </div>
</div>