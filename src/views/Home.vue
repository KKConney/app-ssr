<template>
    <div class="home">
        <ul class="home-list">
            <li v-for="(item, index) in homeList" :key="index">
                <img :src="item.img" alt="">
                <div>
                    <h1>
                        <router-link to="/detail">{{item.title}}</router-link>
                    </h1>
                    <p>{{item.text}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
        data() {
			return {
				homeList: [
                    {
                        title: '比特大陆版“权力的游戏”',
                        img: require('@/assets/images/img.jpeg'),
                        text: '近日，"蚂蚁矿机ANTMINER"在微博发布北京比特大陆科技有限公司（以下简称"北京比特大陆"）关于近期经营协作的磋商及实时进展公告，称两位大股东——即詹克团与吴忌寒已就目前公司的生产经营问题达成了共识。'
                    },
					{
						title: '比特大陆版“权力的游戏”',
						img: require('@/assets/images/img.jpeg'),
						text: '近日，"蚂蚁矿机ANTMINER"在微博发布北京比特大陆科技有限公司（以下简称"北京比特大陆"）关于近期经营协作的磋商及实时进展公告，称两位大股东——即詹克团与吴忌寒已就目前公司的生产经营问题达成了共识。'
					},
					{
						title: '比特大陆版“权力的游戏”',
						img: require('@/assets/images/img.jpeg'),
						text: '近日，"蚂蚁矿机ANTMINER"在微博发布北京比特大陆科技有限公司（以下简称"北京比特大陆"）关于近期经营协作的磋商及实时进展公告，称两位大股东——即詹克团与吴忌寒已就目前公司的生产经营问题达成了共识。'
					},
					{
						title: '比特大陆版“权力的游戏”',
						img: require('@/assets/images/img.jpeg'),
						text: '近日，"蚂蚁矿机ANTMINER"在微博发布北京比特大陆科技有限公司（以下简称"北京比特大陆"）关于近期经营协作的磋商及实时进展公告，称两位大股东——即詹克团与吴忌寒已就目前公司的生产经营问题达成了共识。'
					},
					{
						title: '比特大陆版“权力的游戏”',
						img: require('@/assets/images/img.jpeg'),
						text: '近日，"蚂蚁矿机ANTMINER"在微博发布北京比特大陆科技有限公司（以下简称"北京比特大陆"）关于近期经营协作的磋商及实时进展公告，称两位大股东——即詹克团与吴忌寒已就目前公司的生产经营问题达成了共识。'
					}
                ]
            }
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-list {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        overflow: hidden;
        img {
            width: 150px;
            display: block;
            float: left;
        }
        div {
            text-align: left;
            padding-left: 170px;
            h1 {
                a {
                    color: #555;
                    text-decoration: none;
                    &:hover {
                        color: darkcyan;
                        text-decoration: underline;
                    }
                }
                font-size: 18px;
                margin: 0;
                margin-bottom: 10px;
            }
            p {
                margin: 0;
                font-size: 14px;
            }
        }
        padding: 20px 0;
        border-bottom: 1px solid #dbdbdb;
    }
}
</style>
