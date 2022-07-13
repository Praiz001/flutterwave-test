<template>
        <div class="app__articlecard ">
            <div class="app__articlecard-image">
                <img :src="data.src" alt="card photo">
            </div>
            <div class="app__articlecard-bottom">
                <div class="app__articlecard-bottom_tags">
                    <p>{{ data.stack}}</p><p>.</p><p>{{ data.time}}</p>
                </div>
                <div class="app__articlecard-bottom_title">
                    {{ data.title}}
                </div>
                <div class="app__articlecard-bottom_desc">
                    {{ data.desc}}
                </div>
                <div class="app__articlecard-bottom_footer">
                    <p>{{ data.duration}}</p>
                    <div>
                    <button @click="$emit('goToNext')">
                        {{ data.action}}
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
        </div>

</template>

<script>
export default {
    name:'ArticleCard',
    props: {
        data: Object
    }
}
</script>

<style lang="scss" scoped>

.app__articlecard {
    display: flex;
    width: 350px;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #F5F5F5;

    .app__articlecard-image{
        width: 330px;
        height: 200px;
    }

    .app__articlecard-bottom {
        .app__articlecard-bottom_tags {
            display: flex;
            gap: 4px;
            margin-top: 16px;

            p:nth-child(1){
                font-weight: 500;
                font-size: 12px;
                line-height: 14.32px;
                color: #4B4B4B;
            }

            p:nth-child(2){
                font-weight: 400;
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

        .app__articlecard-bottom_title{
            margin: 8px 0;
            font-size: 18px;
            line-height: 21.48px;
            font-weight: 700;
            color: #2C2C2C;
        }

        .app__articlecard-bottom_desc{
            font-size: 12px;
            font-weight: 400;
            line-height: 21px;
            color: #6E6E6E;
            width: 330px;
            height: 74px;
        }

        .app__articlecard-bottom_footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 22px;
            
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

