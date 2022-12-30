<script>
    export let active = false;

    const COLOR_OFF = "#007B1B"
    const COLOR_ON = "#17E143"

    const COLOR = active ? COLOR_ON : COLOR_OFF;
</script>


<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    {#if active}
        <g filter="url(#filter0_f_30_9)">
            <circle cx="21.5" cy="21.5" r="17.5" fill={COLOR_ON}/>
        </g>
    {/if}
    <circle cx="21.5" cy="21.5" r="14.5" fill={COLOR} stroke="url(#paint0_linear_30_9)" stroke-width="2"/>
    <defs>
        <filter id="filter0_f_30_9" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_30_9"/>
        </filter>
        <linearGradient id="paint0_linear_30_9" x1="21.5" y1="6" x2="21.5" y2="37" gradientUnits="userSpaceOnUse">
            <stop stop-color="#013E00"/>
            <stop offset="1" stop-color="#CAFF95"/>
        </linearGradient>
    </defs>
</svg>


<style>
    p {
        color: #FFF;
        font-size: 24px;
    }

</style>
