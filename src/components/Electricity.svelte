<script>
    import LightOff from "@/components/light/LightOff.svelte";
    import LightOn from "@/components/light/LightOn.svelte";

    export let electriciteGenerale = "OFF"

    const colorOn = "#FAFF00;#A4A653;#FAFF00"

</script>

<div>
    <div class="container">
        <svg width="344" height="124" viewBox="0 0 344 124" fill="none" xmlns="http://www.w3.org/2000/svg">

            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M336.522 25.545L341.507 30.6595L341.507 40.8886V43.4459V95.8699L344 98.4272L344 111.214L343.998 111.215L336.522 117.607L336.303 117.383L336.024 117.607L292 117.607L285 112.5H218L209.391 117.607H199.42L188.203 117.607H134.609L144.58 106.099H134.609L147.072 90.7554L140.841 102.263H152.058L144.58 112.5H209.391L217 108H286.5L291 111.214L330.29 111.214L336.522 104.82V34.4954L336.522 33.2168L334.029 30.6595L281.681 31.5261L291.695 17.2054H281.681L295.391 0.838837L289.159 13.6252H300.377L291.695 25.545H336.522ZM286.667 8.92277H4.98551H3.73913L0 12.7587V14.0373V33.2169L2.49275 37.0528V72.8546L0 76.6905V93.3127V95.87L2.49275 99.2938H130.297L121.615 111.214H132.832L126.601 124L140.311 107.633H130.297L140.311 93.3127H7.90004L4.98551 89.4768V76.6905L7 72.8546V37.0528L4.98551 33.2169L4.98551 17.8732L9.97101 14.0373H277.942L270.464 22.9878H281.681L275.449 34.4955L287.913 19.1519H277.942L286.667 8.92277Z"
                  fill="#FAFF00"
            >
                <animate
                        id="c2"
                        attributeName="fill"
                        values={colorOn}
                        dur="1s"
                        repeatCount="indefinite"
                        calcMode="linear"
                />
            </path>
            <path d="M4.98551 17.8733L8.72464 14.0374H277.942L270.464 22.9878H281.681L275.449 34.5676L273 39L277 39L272 48L281.681 37L276.5 37L281.681 31.3061L334.029 30.6596L336.522 33.2169V104.821L330.29 111.214H291L286.5 108H217L209.5 112.5H144.5L152.058 102.263H140.841L147.072 90.6835L149.5 87L156 87L163.5 75.5L154 85L147.072 85L140.242 93.3128H7.47826L4.98551 89.4769V76.5L7 73V37L4.98551 33.5V17.8733Z"
                  fill="#2A3950"/>
            <foreignObject width="344" height="344" x="15" y="35">
                <p>Electricité générale</p>
            </foreignObject>

        </svg>
        <div class="lights d-flex flex-row">
            <div class="mx-3">
                <LightOn active={electriciteGenerale === "ON"}/>
            </div>
            <LightOff active={electriciteGenerale === "OFF"}/>
        </div>
    </div>

</div>

<style>
    .container {
        position: relative;
    }

    p {
        color: #d9d9d9;
        font-size: 18px;
    }

    .lights {
        position: absolute;
        top: 50px;
        left: 200px;
    }
</style>
