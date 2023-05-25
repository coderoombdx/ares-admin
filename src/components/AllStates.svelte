<script>
    import State from "@/components/State.svelte";
    import Enigme from "@/components/Enigme.svelte";
    import {Etat} from "@/models/GameState.ts";

    export let title;
    export let id;
    export let state;
    export let enigmes;
    export let module;

    const color = (s) => {
        if(s === Etat.ADEBUTER) return "#c70000"
        else if(s === Etat.ENCOURS) return "#ff995f"
        return "#72d352"
    }
</script>

<div>
    <div id={id} class="container">

        <svg width="243" height="349" viewBox="0 0 243 349" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.7049 256.399L23.1329 255.765V255V67.0622C23.1329 65.8026 22.7005 64.5811 21.9081 63.602L12.6114 52.1158C12.5393 52.0268 12.5 51.9157 12.5 51.8012V3.00024C12.5 2.7241 12.7239 2.50024 13 2.50024H166.902C167.073 2.50024 167.231 2.58716 167.323 2.73081L174.509 13.964C175.52 15.5442 177.266 16.5002 179.142 16.5002H232C232.276 16.5002 232.5 16.7241 232.5 17.0002V64.8273C232.5 64.953 232.453 65.0741 232.367 65.1664L221.959 76.4427C221.021 77.4586 220.5 78.7906 220.5 80.1732V102.793C220.5 104.213 221.049 105.578 222.032 106.602L232.361 117.361C232.45 117.454 232.5 117.578 232.5 117.707L232.5 339C232.5 339.276 232.276 339.5 232 339.5H152.42C152.226 339.5 152.049 339.387 151.967 339.211L146.745 327.973C145.843 326.032 143.897 324.791 141.757 324.791H106.35C104.145 324.791 102.154 326.107 101.29 328.135L96.5783 339.196C96.4998 339.381 96.3187 339.5 96.1183 339.5H22.1661C22.0056 339.5 21.8549 339.423 21.7608 339.293L12.5948 326.613C12.5332 326.527 12.5 326.425 12.5 326.32V271.668C12.5 271.568 12.5298 271.471 12.5856 271.388L22.7049 256.399Z"
                  fill="#0D1E38" fill-opacity="0.88" stroke="url(#paint0_linear_19_2)" stroke-width="5"/>
            <rect x="20" y="248" width="209.381" height="67.4769" fill="url(#paint1_radial_19_2)"/>
            <path d="M242 114.2V141H238V116V115.811L237.874 115.669L226.5 102.811V78.8927L237.871 66.3356L238 66.1927V66V48.5H241.5V67.8027L231.635 78.3585L231.5 78.5027V78.7V103V103.2L231.638 103.345L242 114.2Z"
                  fill={color(state)} stroke={color(state)}/>
            <path d="M179.261 11.5L171.957 1H177.232L182.084 8.27735L182.232 8.5H182.5H234V11.5H179.261Z" fill={color(state)}
                  stroke={color(state)}/>
            <path d="M88.447 345.085H99.5769L105.947 330L141.055 330L143 335H109.5L103 349H88.447V345.085Z"
                  fill={color(state)}/>
            <path d="M0.5 331.5V267.5L11 251.5L15.553 255L6.5 269V330L17.5 344.5H40.5V349H13.5L0.5 331.5Z"
                  fill={color(state)}/>
            <defs>
                <linearGradient id="paint0_linear_19_2" x1="221.899" y1="83.6616" x2="-16.2264" y2="132.56"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#69749B"/>
                    <stop offset="1" stop-color="#8098EC"/>
                </linearGradient>
                <radialGradient id="paint1_radial_19_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(124.691 281.738) scale(51.128 34.294)">
                    <stop stop-color="#69749B" stop-opacity="0.53"/>
                    <stop offset="1" stop-color="#2B3B64" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <foreignObject height="300" width="200" x="35" y="20">
                <div class="d-flex flex-row">
                    <h2 class="px-2">{title}</h2>
                </div>
                <ul class="mt-2">
                    {#each enigmes as enigme, index}
                        <li key={index}>
                            <Enigme
                                    enigme={enigme}
                            />
                        </li>
                    {/each}
                </ul>
            </foreignObject>
        </svg>


    </div>
</div>

<style>
    textarea {
        width: 100%;
    }

    .container {
        position: relative;

    }

    p {
        color: #9b9b9b;
        font-size: 12px;
    }

    li {
        color: #9b9b9b;
        font-size: 12px;
    }

    h2 {
        color: #9b9b9b;
        font-size: 18px;
    }

</style>
