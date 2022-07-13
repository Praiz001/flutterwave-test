<template>
    <div class="app__toparticle">
        <div class="app__toparticle-head">
            <p class="app__toparticle-head_symbol">🚀</p>
            <p class="app__toparticle-head_title">Optimizing CSS for faster page loads </p>
            <span>
                <svg width="250" height="192" viewBox="0 0 250 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M232.109 4.3125C276.438 -6.88824 330.298 3.44721 359.515 38.6294C387.769 72.6521 378.198 123.443 366.454 166.086C357.684 197.93 327.794 215.099 304.474 238.48C281.106 261.91 265.049 297.703 232.109 300.784C197.846 303.989 174.58 270.694 144.817 253.413C94.171 224.007 -3.90965 224.529 0.120471 166.086C4.25834 106.081 106.76 124.426 156.084 90.0307C188.647 67.3231 193.623 14.0367 232.109 4.3125Z" fill="#E64611"/>
                </svg>
            </span>
        </div>
        <div class="app__toparticle-body">
            <div class="app__toparticle-body_tags">
                <p>Front-end</p>
                <p>.</p>
                <p>1 Hour Ago</p>
            </div>
            <h4 class="app__toparticle-body_title">Optimizing CSS for faster page loads </h4>
            <p class="app__toparticle-body_content">
                Not long ago I decided to improve the loading times of my website. It already loads pretty fast, but I knew there was still room for improvement and one of them was CSS loading. I will walk you through the process and show you how you can improve your load times as well.
                <br><br>
                To see how CSS affects the load time of a webpage we first have to know how the browser converts an HTML document into a functional webpage...
            </p>
            <div class="app__toparticle-body_footer">
                <p>3 Min Read</p>
                <button @click="this.$router.push('Details')">
                    <span>Read Full</span>
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16669 10H15.8334" stroke="#1473E6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 13.3333L15.8333 10" stroke="#1473E6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 6.66667L15.8333 10" stroke="#1473E6" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'TopArticle',
    data() {
        return{

        }
    }
}
</script>

<style lang="scss" scoped>

.app__toparticle{
    max-width: 1144px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    border: 1px solid #F5F5F5;
    padding: 8px;
    border-radius: 5px;

    gap: 15.5px;
    margin-top: 58px;
    

    .app__toparticle-head{
        position: relative;
        max-width: 500px;
        height: 280px;
        flex: 1;
        background-color: #EF5623;

        .app__toparticle-head_symbol{
            margin: 64px 0px 0px 16px;
            width: 48px;
            line-height: 57.28px;
            font-weight: 800;
        }

        .app__toparticle-head_title {
            margin: 0px 0px 0px 16px;
            width: 434px;
            color: #FFFFFF;
            font-weight: 900;
            font-size: 36px;
            line-height: 47.99px;

        }

        &.app__toparticle-head span{
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }
   
    .app__toparticle-body{
        max-width: 603px;
        display: flex;
        flex-direction: column;

        .app__toparticle-body_tags{
            display: flex; 
            align-items: center;
            gap: 4px;
            
            p:nth-child(1){
                font-weight: 700;
                font-size: 12px;
                line-height: 14.32px;
                color: #4B4B4B;
            }

            p:nth-child(2){
                font-weight: 700;
                font-size: 12px;
                line-height: 14.32px;
                color: #6E6E6E;
            }

            p:nth-child(3){
                font-weight: 500;
                font-size: 12px;
                line-height: 14.32px;
                color: #6E6E6E;
            }
        }

        .app__toparticle-body_title {
            margin: 8px 0;
            font-size: 22px;
            line-height: 26.25px;
            font-weight: 900;

            color: #2C2C2C;
        }

        .app__toparticle-body_content{
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            color: #6E6E6E;
        }

        .app__toparticle-body_footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 36px;
            
            p{
                color: #6E6E6E;
                font-size: 12px;
                font-weight: 500;
                line-height: 14.32px;
            }

            button{
                display: flex;
                align-items: center;
                border: none;
                background-color: transparent;
                color: #1473E6;
                cursor: pointer;

                font-size: 12px;
                font-weight: 700;
                line-height: 14.32px;
            }
            
        }

    }
}

</style>