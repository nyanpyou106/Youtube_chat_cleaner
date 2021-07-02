YoutubeLIVEのコメントの構成はこんな感じだった

```html
<yt-live-chat-text-message-renderer class="style-scope yt-live-chat-item-list-renderer" id="CkUKGkNPR1NfZWUtdWZFQ0Zid3pyUVlkM0xVSUNBEidDSUc4OExDLXVmRUNGUlRhandvZEhkc0l4ZzE2MjQ4NTQ1MjcxNDI%3D" author-type="">
    <!--css-build:shady-->
    <!--コメントの本体-->
    <yt-img-shadow id="author-photo" class="no-transition style-scope yt-live-chat-text-message-renderer" height="24" width="24" style="background-color: transparent;" loaded="">
        <!--css-build:shady-->
        <img id="img" class="style-scope yt-img-shadow" alt="" height="24" width="24" src="https://yt4.ggpht.com/ytc/AKedOLTgIAhp03ojO_RMS0GRxAbbuEmq6gBlKy8JRI1rFg=s64-c-k-c0x00ffffff-no-rj">
    </yt-img-shadow>
    <div id="content" class="style-scope yt-live-chat-text-message-renderer">
        <span id="timestamp" class="style-scope yt-live-chat-text-message-renderer">1:28 PM</span>
        <yt-live-chat-author-chip class="style-scope yt-live-chat-text-message-renderer">
        <!--css-build:shady-->
            <span id="author-name" dir="auto" class="style-scope yt-live-chat-author-chip">寒山と拾得
                <span id="chip-badges" class="style-scope yt-live-chat-author-chip"></span>
            </span>
            <span id="chat-badges" class="style-scope yt-live-chat-author-chip"></span>
        </yt-live-chat-author-chip>
        ​<span id="message" dir="auto" class="style-scope yt-live-chat-text-message-renderer">苗だけで普通に育つうん？</span>
        <span id="deleted-state" class="style-scope yt-live-chat-text-message-renderer"></span>
        <a id="show-original" href="#" class="style-scope yt-live-chat-text-message-renderer"></a>
    </div>
    <!--メニュー関係-->
    <div id="menu" class="style-scope yt-live-chat-text-message-renderer">
        <yt-icon-button id="menu-button" class="style-scope yt-live-chat-text-message-renderer" touch-feedback="">
            <!--css-build:shady-->
            <button id="button" class="style-scope yt-icon-button" aria-label="コメントの操作">
                <yt-icon icon="more_vert" class="style-scope yt-live-chat-text-message-renderer">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                        <g class="style-scope yt-icon"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="style-scope yt-icon"></path></g>
                    </svg>
                <!--css-build:shady-->
                </yt-icon>
            </button>
            <yt-interaction id="interaction" class="circular style-scope yt-icon-button">
                <!--css-build:shady-->
                <div class="stroke style-scope yt-interaction"></div>
                <div class="fill style-scope yt-interaction"></div>
            </yt-interaction>
        </yt-icon-button>
    </div>
    <div id="inline-action-button-container" class="style-scope yt-live-chat-text-message-renderer" aria-hidden="true">
        <div id="inline-action-buttons" class="style-scope yt-live-chat-text-message-renderer"></div>
    </div>
</yt-live-chat-text-message-renderer>
```

1人のコメントを1投稿分全部抜き出すとこんな感じ(メンバーかつモデレーターの人)
```html
<yt-live-chat-text-message-renderer class="style-scope yt-live-chat-item-list-renderer" id="CjkKGkNNZkU3dUR3d1BFQ0ZjTWZmUW9kQlFFSF9nEhtDUDc2bGNfdHdQRUNGZHhTaFFvZDZ5OERtdzI%3D" author-type="moderator">
    <!--css-build:shady-->
    <yt-img-shadow id="author-photo" class="no-transition style-scope yt-live-chat-text-message-renderer" height="24" width="24" loaded="" style="background-color: transparent;">
        <!--css-build:shady-->
        <img id="img" class="style-scope yt-img-shadow" alt="" height="24" width="24" src="https://yt4.ggpht.com/ytc/AKedOLSCCOtC76Ju5CGal715aajkluz1YMr6t5oFGYkm=s32-c-k-c0x00ffffff-no-rj">
    </yt-img-shadow>
    <div id="content" class="style-scope yt-live-chat-text-message-renderer">
        <span id="timestamp" class="style-scope yt-live-chat-text-message-renderer">0:30</span>
        <yt-live-chat-author-chip class="style-scope yt-live-chat-text-message-renderer">
            <!--css-build:shady-->
            <span id="author-name" dir="auto" class="moderator style-scope yt-live-chat-author-chip">
                蚊取り豚野郎
                <span id="chip-badges" class="style-scope yt-live-chat-author-chip"></span>
            </span>
            <span id="chat-badges" class="style-scope yt-live-chat-author-chip">
                <yt-live-chat-author-badge-renderer class="style-scope yt-live-chat-author-chip" aria-label="モデレーター" type="moderator" shared-tooltip-text="モデレーター">
                    <!--css-build:shady-->
                    <div id="image" class="style-scope yt-live-chat-author-badge-renderer">
                        <yt-icon class="style-scope yt-live-chat-author-badge-renderer">
                            <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                                <g class="style-scope yt-icon">
                                    <path d="M9.64589146,7.05569719 C9.83346524,6.562372 9.93617022,6.02722257 9.93617022,5.46808511 C9.93617022,3.00042984 7.93574038,1 5.46808511,1 C4.90894765,1 4.37379823,1.10270499 3.88047304,1.29027875 L6.95744681,4.36725249 L4.36725255,6.95744681 L1.29027875,3.88047305 C1.10270498,4.37379824 1,4.90894766 1,5.46808511 C1,7.93574038 3.00042984,9.93617022 5.46808511,9.93617022 C6.02722256,9.93617022 6.56237198,9.83346524 7.05569716,9.64589147 L12.4098057,15 L15,12.4098057 L9.64589146,7.05569719 Z" class="style-scope yt-icon"></path>
                                </g>
                            </svg>
                            <!--css-build:shady-->
                        </yt-icon>
                    </div>
                </yt-live-chat-author-badge-renderer>
                <yt-live-chat-author-badge-renderer class="style-scope yt-live-chat-author-chip" aria-label="メンバー（1 年）" type="member" shared-tooltip-text="メンバー（1 年）">
                    <!--css-build:shady-->
                    <div id="image" class="style-scope yt-live-chat-author-badge-renderer">
                        <img src="https://yt3.ggpht.com/nsaQIeBAfKxyI8NiF6sVEZ9ZmjLp0acaniGBWcUj1Y1KbEyviHtOAAh2JpxikEsvDyH43xM43-U=s16-c-k" class="style-scope yt-live-chat-author-badge-renderer" alt="メンバー（1 年）">
                    </div>
                </yt-live-chat-author-badge-renderer>
            </span>
        </yt-live-chat-author-chip>
        ​<span id="message" dir="auto" class="style-scope yt-live-chat-text-message-renderer">きちゃー！</span>
        <span id="deleted-state" class="style-scope yt-live-chat-text-message-renderer"></span>
        <a id="show-original" href="#" class="style-scope yt-live-chat-text-message-renderer"></a>
    </div>
    <div id="menu" class="style-scope yt-live-chat-text-message-renderer">
        <yt-icon-button id="menu-button" class="style-scope yt-live-chat-text-message-renderer" touch-feedback="">
            <!--css-build:shady-->
            <button id="button" class="style-scope yt-icon-button" aria-label="コメントの操作">
                <yt-icon icon="more_vert" class="style-scope yt-live-chat-text-message-renderer">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                        <g class="style-scope yt-icon">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="style-scope yt-icon"></path>
                        </g>
                    </svg>
                    <!--css-build:shady-->
                </yt-icon>
            </button>
            <yt-interaction id="interaction" class="circular style-scope yt-icon-button">
                <!--css-build:shady-->
                <div class="stroke style-scope yt-interaction"></div>
                <div class="fill style-scope yt-interaction"></div>
            </yt-interaction>
        </yt-icon-button>
    </div>
    <div id="inline-action-button-container" class="style-scope yt-live-chat-text-message-renderer" aria-hidden="true">
        <div id="inline-action-buttons" class="style-scope yt-live-chat-text-message-renderer"></div>
    </div>
</yt-live-chat-text-message-renderer>
```