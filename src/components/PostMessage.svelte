<script>
    import {MessageRequest} from "@/api/MessageRequest.ts";
    import {addMessage, messages} from "@/store/GameState.ts";

    let value = "";
    const postMessage = () => {
        MessageRequest.postMessage(value).then(() => {
            addMessage(value)
            value = "";
        })
    }

</script>

<div>
    <div class="container">
        <svg width="453" height="258" viewBox="0 0 453 258" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.3089 189.004L56.0627 188.269V187.215V57.187C56.0627 55.6804 55.4447 54.2397 54.3529 53.2015L43.0014 42.4061C42.9021 42.3117 42.8459 42.1807 42.8459 42.0438V8.29231C42.8459 8.01617 43.0698 7.79231 43.3459 7.79231H329.608C329.732 7.79231 329.852 7.83857 329.944 7.9221L343.532 20.2569C344.544 21.1757 345.862 21.6846 347.229 21.6846H449.5C449.776 21.6846 450 21.9085 450 22.1846V248.385C450 248.661 449.776 248.885 449.5 248.885H298.823C298.705 248.885 298.59 248.843 298.5 248.766L287.656 239.6C286.664 238.76 285.406 238.3 284.106 238.3H214.379C212.998 238.3 211.666 238.82 210.651 239.757L200.896 248.752C200.804 248.837 200.683 248.885 200.557 248.885H61.0374C60.9076 248.885 60.7829 248.834 60.6897 248.744L42.9982 231.619C42.9009 231.525 42.8459 231.395 42.8459 231.259V201.379C42.8459 201.245 42.9003 201.116 42.9967 201.022L55.3089 189.004Z"
                  fill="#0D1E38" fill-opacity="0.88" stroke="url(#paint0_linear_7_10)" stroke-width="5"/>
            <rect y="183.908" width="209.381" height="67.4769" fill="url(#paint1_radial_7_10)"/>
            <path d="M45.0672 187.715H51.2679L38.9579 199.422L38.8025 199.57V199.785V232.862V233.073L38.9548 233.221L58.7799 252.405L58.9253 252.546H59.1276H71.8444V255.515H56.5472L34.2375 233.972V198.015L45.0672 187.715Z"
                  fill="#D5E6FF" stroke="#C1DAFF"/>
            <path d="M331.798 3.92979L331.655 3.8H331.462H299.324L302.794 0.5H334.4L353.465 17.6923H346.959L331.798 3.92979Z"
                  fill="#D4E5FF" stroke="#C1DAFF"/>
            <path d="M190.947 252.377H202.077L213.903 241.792H281.726L287.638 247.085H217.381L205.555 258H190.947V252.377Z"
                  fill="#C1DAFF"/>
            <defs>
                <linearGradient id="paint0_linear_7_10" x1="428.501" y1="65.4923" x2="71.4746" y2="252.127"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#69749B"/>
                    <stop offset="1" stop-color="#8098EC"/>
                </linearGradient>
                <radialGradient id="paint1_radial_7_10" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(104.691 217.646) scale(51.128 34.294)">
                    <stop stop-color="#69749B" stop-opacity="0.53"/>
                    <stop offset="1" stop-color="#2B3B64" stop-opacity="0"/>
                </radialGradient>
            </defs>
        </svg>
        <div  class="messages-wrapper">
            <div  class="messages-container">
            {#each $messages as message}
                <p class="mb-1">{message.getMessageDate()} - {message.message}</p>
            {/each}
            </div>
        </div>
        <div class="text-area-container">
            <div class="d-flex flex-row  align-self-end">
            <textarea
                    placeholder="taper votre message..."
                    bind:value={value}
                    rows="2"
                    cols="33"
                    class="text-area"
            ></textarea>
                <button on:click={postMessage}>Envoyer</button>
            </div>
        </div>
    </div>
</div>

<style>
    textarea {
        width: 100%;
    }

    .container {
        width: 453px;
        position: relative;

    }


    .messages-container {
        height: 150px;
        width: 380px;
        overflow-y: auto;
    }
    .messages-wrapper {
        position: absolute;
        top: 30px;
        padding-left: 65px;
    }

    .messages-container p {
        color: #9b9b9b;
        font-size: 12px;
        width: 335px;
        text-overflow: ellipsis;
        overflow-x: hidden;
    }

    .text-area-container {
        position: absolute;
        bottom: 30px;
        padding-left: 65px;
        padding-right: 10px;
        width: 100%;
    }

    .text-area {
        padding-inline: 6px;
        resize: none;
        font-size: 12px;
        background-color: rgba(255, 255, 255, 0.15);
        color: #807e7e;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
