<script>
    import  backAvatar from '../../../../assets/assets/article/SubArticlesTex/conteAvatarArticulo.png';
    import IconPublication from '../../_articles/_components/IconPublication.svelte'
    import { fade } from 'svelte/transition';
    let reactions = ['Clickbait','Preciso','Dudoso','Sesgado'];
    let showLink =false;
    let iconPublic =  {
            agua: {
                name: "agua",
                views: 1},
            tierra: {
                name:"tierra", 
                views: 3},
            aire: {
                name:"aire", 
                views: 6},
            fuego: {
                name:"fuego", 
                views: 8},
        }
    let textLink = ['Link-Como cambiar el mundo','Link-Como cambiar el mundo','Link-Como cambiar el mundo']
</script>
<main class="container">
      <div class={showLink == true ? 'container_all container_long':'container_all'} in:fade={{ delay: 400 }}>
        <div class="container_top">
            <div class="container_avatar">
                <img src="#" alt="">
            </div>
            <div class="container_info_avatar">
                <img src="{backAvatar}" alt="contAvatar">
                <div class="info_avatar_text">
                    <span>Sesgos Populares</span>
                    <p>@fatuo-456</p>
                </div>
            </div>
        </div>
        <div class="container_center">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et fugit assumenda deserunt reprehenderit aliquam nobis error sapiente eum earum iusto distinctio est officia odio, optio, commodi tempore, ad ab!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et fugit assumenda deserunt reprehenderit aliquam nobis error sapiente eum earum iusto distinctio est officia odio, optio, commodi tempore, ad ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et fugit assumenda deserunt reprehenderit aliquam nobis error sapiente eum earum iusto distinctio est officia odio, optio, commodi tempore, ad ab!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et fugit assumenda deserunt reprehenderit aliquam nobis error sapiente eum earum iusto distinctio est officia odio, optio, commodi tempore, ad ab!
            </p>
        </div>
        <div class="line"></div>
        {#if !showLink}
          <div class="container_addLink">
              <span>Agrega Link Relacionado</span>
          </div>
          <div class="container_bottom">
              <div class="container_bottom_all">
                  {#each reactions as reaction}
                    <div class="container_bottom_single">
                        <div class="container_bottom_img" on:click={() => showLink = !showLink }>
                          <p>{reaction}</p>
                        </div>
                    </div>
                  {/each}
              </div>
          </div>
        {:else}
            <div class="body_bg_icons">
              <div class="bg_icons" on:click={() => showLink = !showLink }>
                  {#each Object.keys(iconPublic) as item}
                      <IconPublication elemento={item} vistas={iconPublic[item].views}/>
                  {/each}
              </div>
          </div>
          <div class="bg_points"></div>
          {#each textLink as item}
            <div class="link_reaction"><u><span>{item}</span></u></div>
          {/each}
        {/if}
      </div>
</main>
<style>

  .container {
    position: relative;
    width: 100%;
    height: calc(100% - 240px);
    overflow: hidden auto;
    padding: 0px;
    margin:0px ;
    }  
  .container_all {
    width:318px;
    height:426px;
    margin: 20px auto;
    background-image: url('../../../../assets/assets/article/SubArticlesTex/fondoArticuloOpen.png');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 4px 3px 10px #00000063;
    border-radius: 20px;
    font-family: 'Montserrat';
  }
  .container_long {
    height:535px;
  }
  .container_info_avatar {
    display: flex;
    height: 60px;
    width: 90%;
    margin: 0 auto;
    color: #404040;
    font-size: 12px;
    gap:10px;
    position: relative;
    top:-7px;
  }
  .container_info_avatar img {
    height: 54px;
    width: 54px;
  }
  .info_avatar_text span {
    font-weight: bold;
      
  }
  .info_avatar_text p {
    font-weight: 500;
    font-size: 12px;
  }
  .container_center {
    width:310px;
    height:216px;
    margin: 0px auto;
    background-image: url('../../../../assets/assets/article/SubArticlesTex/contenidoArticuloOpen.png');
    background-repeat: no-repeat;
	  background-size: cover;
    color: #404040;
    overflow-y:scroll !important;
    position: relative;
    overflow-x: hidden !important;
    top:-4px;
  }
  .container_center::-webkit-scrollbar {
	  display:block;
    width: 25px;
  }
  .container_center::-webkit-scrollbar-track {
    background-image: url('../../../../assets/assets/article/SubArticlesTex/barraScroll.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  .container_center::-webkit-scrollbar-thumb {
    overflow:visible;
    background-image: url('../../../../assets/assets/article/SubArticlesTex/puntoScroll.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  .container_center p {
    display: inline-block;
    font-size: 12px;
    padding: 20px 20px 20px 20px;
  }
  .line{ 
    display: none;
    width:40%;
    height:1px;
    margin: 0 0 0 2%;
    background-image: url('../../../../assets/assets/article/web/SubArticleText/linePuntosArticulo.png');
    background-repeat: no-repeat;
	  background-size: cover;
    position: relative;
    top: -90%;
  }
  .container_bottom_single {
    display:flex;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
  .container_bottom_all {
    display:flex;
    width:95%;
    margin: 25px auto 0;
  }
  .container_bottom_img {
    width:52px ;
    height:64px;
    background-image: url('../../../../assets/assets/article/SubArticlesTex/btnReaccion.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .container_bottom_img:hover {
    background-image: url('../../../../assets/assets/article/SubArticlesTex/btnReaccionHover.png');
  }
  .container_bottom_img:hover > p {
    color:#ffff;
  }
  .container_bottom_img p {
    display: inline-block;
    margin:0 auto;
    position: relative;
    font-size: 10px;
    text-align: center;
    top:45px;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .container_addLink {
    width:282px;
    height:35px;
    margin:0 auto;
    background-image: url('../../../../assets/assets/article/web/SubArticleText/btnAd.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    top:13px;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .container_addLink:hover {
    background-image: url('../../../../assets/assets/article/SubArticlesTex/btnAdLinkHover.png');
  }
  .container_addLink span {
    display: inline-block;
    color: #5C3C0F;
    font-size: 13px;
    font-weight: bold;
    transition: 0.2s ;
  }
  .container_addLink span:hover {
    transform: scale(1.1)
  }
  .body_bg_icons{
    width:88%;
    height:75px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5%;
    top:18px;
    z-index: 5;
  }
  .bg_icons {
    width:100%;
    height:10px;
    margin: 0 0% 0 2.9%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .bg_points {
    width:96%;
    height:48px;
    margin: 0 auto;
    background-image: url('../../../../assets/assets/article/PublicationImg/fondoPuntajeArticulo@2x.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    position: relative;
    top:-20px;
  }
  .link_reaction {
    width:267px;
    height:35px;
    margin: 0 auto;
    background-image: url('../../../../assets/assets/article/SubArticlesTex/btnLink.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .link_reaction:hover {
    background-image: url('../../../../assets/assets/article/SubArticlesTex/btnLinkHover.png');
    background-size: auto;
    position: relative;
    left:3px;
  }
  .link_reaction span {
    font-size: 12px;
    color: #404040;
  }
  .link_reaction:hover > u,.link_reaction:hover > u span {
    color:#ffff;
  }
  @media only screen and (max-width:1920px) and (min-width:1024px) {
    .container {
      max-width: 1000px;
      overflow: hidden;
      }  
    .container_all {
      width:852px;
      height:331px;
      margin: 40px auto 0 auto;
      background-image: url('../../../../assets/assets/article/web/SubArticleText/fondoCarticulo.png');
    }
    .container_info_avatar {
      display: flex;
      height: 60px;
      width: 40%;
      margin: 0 0 0 2%;
      color: #404040;
      font-size: 14px;
      gap:10px;
      position: relative;
      top:-5px
    }
    .container_info_avatar img {
      height: 64px;
      width: 64px;
    }
    .info_avatar_text span {
      display: inline-block;
      padding-top:10px;
    }
    .container_center {
      width:447px;
      height:310px;
      margin: 0% 11px 0 auto;
      background-image: url('../../../../assets/assets/article/web/SubArticleText/fondoOarticulo.png');
      background-repeat: no-repeat;
      background-size: cover;
      color: #404040;
      position: relative;
      overflow:scroll;
      top:-20%;
    }
    .container_center p {
      display: inline-block;
      font-size: 14px;
      padding: 10px 50px 20px 30px;
    }
    .container_center::-webkit-scrollbar-thumb {
    background-image: url('../../../../assets/assets/article/web/SubArticleText/puntoScroll.png');
    
    }
    .line {
      display: block;
      position:relative;
      top:-300px;
    }
    .container_bottom_single {
      display:flex;
      margin: 0 auto;
      align-items: center;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
    }
    .container_bottom_all {
      display:flex;
      width:45%;
      margin: 0px 0 0 0;
    }
    .container_bottom_img {
      width:82px ;
      height: 92px;
      margin: 0 0 0 10px;
      background-image: url('../../../../assets/assets/article/SubArticlesTex/btnReaccion.png');
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      top: -240px;
    }
    .container_addLink {
      width:337px;
      height:42px;
      margin: 0 auto 0 25px;
      background-image: url('../../../../assets/assets/article/web/SubArticleText/btnAd.png');
      position: relative;
      top: -270px;
      display: flex;
      justify-content:center;
      align-items: center;
    }
    .container_addLink span {
      display: inline-block;
      color: #5C3C0F;
      font-size: 16px;
      font-weight: bold;
      padding: 0 0 0 10%;
    }
    .container_bottom_img p {
      display: inline-block;
      margin:0 auto;
      font-weight: bold;
      position: relative;
      font-size: 14px;
      
      text-align: center;
      top:65px;
      display: flex;
      color:#646F6F;
      justify-content:center;
      align-items: center;
    }
    .body_bg_icons{
      width:88%;
      height:75px;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5%;
      top:18px;
      z-index: 5;
    }
    .bg_icons {
      width:50%;
      height:10px;
      margin: 0 0 0 -6%;
      position: relative;
      top:-295px;
    }
    .bg_points {
      width:366px;
      height:58px;
      margin: 0 0 0 13px ;
      background-image: url('../../../../assets/assets/article/PublicationImg/fondoPuntajeArticulo@2x.png');
      position: relative;
      top:-310px;
    }
    .link_reaction {
      width:267px;
      height:35px;
      margin: 0 0 0 12px;
      background-image: url('../../../../assets/assets/article/SubArticlesTex/btnLink.png');
      display: flex;
      justify-content:center;
      align-items: center;
      position: relative;
      top:-300px;
    }
  }
  @media only screen and (max-width:1023px) and (min-width:768px) {
    .container_all {
      width:384px;
      height:450px;
      margin: 40px auto 0 auto;
      background-image: url('../../../../assets/assets/article/SubArticlesTex/fondoArticuloOpen.png');
      box-shadow: 4px 4px 4px 4px #00000040;
      border-radius: 20px;
      font-family: 'Montserrat';
    }
    .container_long {
      height:575px;
    }
    .container_info_avatar {
      display: flex;
      height: 60px;
      width: 90%;
      margin: 0 auto;
      color: #404040;
      font-size: 12pt;
      gap:0px
    }
    .info_avatar_text {
      margin-left: 10px;
    }
    .container_center {
      width:92%;
      height:245px;
      margin: 0px auto;
      background-image: url('../../../../assets/assets/article/SubArticlesTex/contenidoArticuloOpen.png');
    }
    .container_center p {
      display: inline-block;
      font-size: 12pt;
      padding: 20px 20px 20px 20px;
    }  
    .container_bottom_img {
      width:60px ;
      height: 65px;
      background-image: url('../../../../assets/assets/article/SubArticlesTex/btnReaccion.png');
    }
    .body_bg_icons{
      width:50%;
      height:75px;
      margin: 0 5.3%;
      gap: 5%;
      top:25px;
      z-index: 5;
    }
    .bg_icons {
      width:20%;
      height:10px;
      margin: 0 2px;
      position: relative;
      top:0px;
    }
    .bg_points {
      width:366px;
      height:58px;
      margin: 0 auto ;
      background-image: url('../../../../assets/assets/article/PublicationImg/fondoPuntajeArticulo@2x.png');
      position: relative;
      top:-10px;
    }
  }
</style>

