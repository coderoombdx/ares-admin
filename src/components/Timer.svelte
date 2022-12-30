<script lang="ts">
    import {CompteAReboursRequests} from "@/api/CompteAReboursRequests.ts";

    export let time;
    const resetGame = () => CompteAReboursRequests.resetCompteARebours()


    let addedTime = 0;
    let addedSecList = []
    const addTime = () => {
        CompteAReboursRequests.updateCompteARebours(addedTime).then(() => {
            addedSecList.push(addedTime)
            addedTime = 0;
        })
    }

    const minutesAndSecond = (currentTime: number) => {
        const a = currentTime / 60
        const minutes = parseInt(a.toString()).toString().padStart(2, '0');
        const secondsLeft = (currentTime - minutes * 60).toString().padStart(2, '0');
        return { minutes, secondsLeft }
    }

</script>

<div class="timer-container">
    <svg width="430" height="265" viewBox="0 0 430 265" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M312 133C312 188.228 267.228 233 212 233C156.772 233 112 188.228 112 133C112 77.7715 156.772 33 212 33C267.228 33 312 77.7715 312 133ZM122.259 133C122.259 182.562 162.438 222.741 212 222.741C261.562 222.741 301.741 182.562 301.741 133C301.741 83.4375 261.562 43.2592 212 43.2592C162.438 43.2592 122.259 83.4375 122.259 133Z"
              fill="#00607E"/>
        <path d="M325 132.5C325 194.632 274.632 245 212.5 245C150.368 245 100 194.632 100 132.5C100 70.368 150.368 20 212.5 20C274.632 20 325 70.368 325 132.5ZM108.99 132.5C108.99 189.667 155.333 236.01 212.5 236.01C269.667 236.01 316.01 189.667 316.01 132.5C316.01 75.333 269.667 28.9899 212.5 28.9899C155.333 28.9899 108.99 75.333 108.99 132.5Z"
              fill="#C1CFFF"/>
        <path d="M300.628 231.443C281.14 248.801 256.96 260.017 231.122 263.685C205.283 267.353 178.937 263.308 155.388 252.06L166.515 228.768C185.476 237.825 206.689 241.081 227.494 238.128C248.299 235.175 267.768 226.144 283.459 212.167L300.628 231.443Z"
              fill="#0082AB" fill-opacity="0.6"/>
        <path d="M334.766 90.2388C328.562 72.4285 318.558 56.1813 305.447 42.6245C292.335 29.0678 276.432 18.5261 258.838 11.731L250.728 32.7295C265.275 38.348 278.425 47.0643 289.266 58.2736C300.107 69.483 308.379 82.9169 313.508 97.6432L334.766 90.2388Z"
              fill="#0082AB" fill-opacity="0.6"/>
        <path d="M92.6551 145.522C90.9174 128.96 92.6459 112.217 97.7307 96.3595C102.816 80.5016 111.145 65.8758 122.19 53.4123C133.235 40.9489 146.753 30.9208 161.884 23.9659C177.016 17.0111 193.429 13.2818 210.08 13.0154L210.296 26.4958C195.515 26.7323 180.946 30.0426 167.515 36.216C154.084 42.3895 142.084 51.2909 132.28 62.3541C122.476 73.4173 115.083 86.3999 110.569 100.476C106.055 114.552 104.521 129.414 106.064 144.115L92.6551 145.522Z"
              fill="#0082AB" fill-opacity="0.7"/>
        <circle cx="212.5" cy="132.5" r="87.5" fill="#0D1E38" fill-opacity="0.88"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2.5 242V240.5V220L9.5 213H21.5L24.5 215.5H32.5L37 213H117.5L121.5 215H127.5L129.5 213.5L131.5 212C131.5 212 129.626 210.529 128.5 209.5C125.639 206.885 122 202 122 202L121 202.5L127.5 210.285V211L126.5 212H121.5L119 210.285L37 209.5L32.5 212H24.5L21.5 209.5H9.5L0 220V243.5L6 250H99.5L104 247H110.5L114.5 250H153.219L153.5 250L162.519 233.975L159.813 232.678L151.699 247H117.5L112.5 244H101.5L97 247H8.5L2.5 242Z"
              fill="#004E67"/>
        <path d="M4.5 226.5V220.5L9.5 215H20.5L23 217.5H33L37 215H117.5L121.5 217H127.5L130 215H133.5C133.5 215 139.649 220.801 144 224C149.153 227.789 158 232.5 158 232.5L151 245H117.5L112.5 242H101.5L96.5 245H20.5H9.5L4.5 240.5V226.5Z"
              fill="#00607E"/>
        <path
                d="M72 222.5L79 217H116L120.5 219V242.5H117.5L111.5 239H101L95 242.5H75.5L72 239V222.5Z"
                on:click={addTime}
                fill="black"
                id="button-add-time"
        />
        <foreignObject x="10" y="218" width="60" height="30">
            <div xmlns="http://www.w3.org/1999/xhtml">
                <input bind:value={addedTime} class="add-time-input"/>
            </div>
        </foreignObject>
        <line x1="95.5" y1="220" x2="95.5" y2="235" stroke="white"/>
        <line x1="103.001" y1="227.625" x2="87.4949" y2="227.625" stroke="white"/>
        <path d="M426 104.93L419.5 100.5L372.354 100.254L369.781 103.238L363.538 103.198L360.719 100.18L321.5 100.18L320 97L335 91.5L338.5 98L362 98L364.5 100.5L368.5 100.5L371 98L419 98L428.5 104L428.5 129L420.5 136L413.5 136L411 134L407 134L403.757 136L363 136L361.5 134L357.5 134L356 136.143L326.5 136.143L326.5 133.636L354.5 133.636L356 131.5L362.5 131.5L364 133.636L403.5 133.636L406.19 132.015L412 132.015L414 133.636L420.209 133.636L426 128.5L426 104.93Z"
              fill="#004E67"/>
        <path d="M424 120.5L424 128L419 132.135L415.5 132.135L412.5 130.02L405.5 130.02L402.5 132.135L365 132.135L363.525 130.144L354.853 130.144L353.422 132.135L326.5 132.5C326.5 132.5 326.543 122.371 325.5 116C324.606 110.534 322 102.256 322 102.256L360.707 102.18L363.525 105.198L369.768 105.238L372.625 102.256L419 102.256L424 105.5L424 120.5Z"
              fill="#00607E"/>
        <g filter="url(#filter0_d_15_16)" id="reset-button" on:click={resetGame}>
            <circle cx="397.5" cy="116.5" r="12.5" fill="#FF0000"/>
            <circle cx="397.5" cy="116.5" r="11.5" stroke="black" stroke-width="2"/>
        </g>
        <path d="M399.033 108.214C401.069 108.68 403.225 109.879 404.433 111.583C405.642 113.287 406.18 115.376 405.947 117.451C405.713 119.526 404.723 121.443 403.167 122.836C401.61 124.228 399.595 124.999 397.507 125C395.418 125.002 393.402 124.234 391.843 122.844C390.284 121.454 389.292 119.539 389.055 117.464C388.818 115.389 389.353 113.299 390.559 111.594C391.765 109.888 393.922 108.683 395.957 108.214L395.957 109.805C394.312 110.184 392.864 111.155 391.889 112.534C390.915 113.913 390.482 115.602 390.673 117.279C390.865 118.957 391.667 120.505 392.927 121.628C394.187 122.752 395.817 123.372 397.505 123.371C399.194 123.37 400.822 122.747 402.081 121.621C403.339 120.496 404.139 118.946 404.328 117.269C404.517 115.591 404.081 113.903 403.105 112.525C402.128 111.148 400.679 110.179 399.033 109.802V108.214Z"
              fill="#D9D9D9"/>
        <rect x="397" y="107" width="1" height="9" fill="#D9D9D9"/>
        <defs>
            <filter id="filter0_d_15_16" x="381" y="104" width="33" height="33" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_16"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_16" result="shape"/>
            </filter>
        </defs>
        <circle
                class="circle2"
                cx="212" cy="132.5"
                r="80"
                stroke-dasharray="500"
                stroke-dashoffset="500"
                color="#FFF"
                stroke="#D5E6FF"
                stroke-width="8px"
                fill="transparent"
        >
            <animate
                    id="c1"
                    attributeName="stroke-dashoffset"
                    values="0;500"
                    dur={time + "s"}
                    repeatCount="indefinite"
                    calcMode="linear"
            />
            <animate
                    id="c2"
                    attributeName="stroke"
                    values="#D5E6FF;#DD0000"
                    dur="2700s"
                    repeatCount="indefinite"
                    calcMode="linear"
            />
        </circle>
    </svg>

    <div class="timer-text-container">
        <div class="timer text-center">
            <div class="d-flex flex-row">
            <span>
                {minutesAndSecond(time).minutes}
            </span>
                <span>
                :
            </span>
                <span>
               {minutesAndSecond(time).secondsLeft}
            </span>
            </div>
        </div>
    </div>

</div>

<style>

    .timer-container {
        position: relative;
    }

    .timer-text-container {
        position: absolute;
        top: 105px;
        left: 178px;
    }

    .add-time-input {
        font-size: 12px;
        color: #FFF;
        width: 55px;
        height: 20px;
        background-color: transparent;
        border-bottom-width: 1px;
        border-bottom-color: #f1f1f1;
    }

    .timer {
        position: absolute;
        top: 0;
        color: #e7c2d5;
        font-size: 30px;
        font-weight: 700;
    }

    #reset-button {
        cursor: pointer;
    }

    #button-add-time {
        cursor: pointer;
    }

</style>
