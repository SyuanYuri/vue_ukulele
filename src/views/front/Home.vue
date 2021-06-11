<template>
  <div>
    <div class="banner bg-cover bg-top bg-fixed text-center flex flex-col justify-center items-center">
      <div class="text-white text-item" data-aos="fade-down" data-aos-duration="1500">
        <h1 class="font-bold">UKULELE</h1>
        <p class="tracking-widest">
          All good music is for the sake of the heartstrings.
        </p>
        <router-link :to="{ name: 'Store' }">
          <button type="button" class="px-5 py-2 mt-5 mb-5 tracking-widest border-2">
            Shop Now
          </button> 
        </router-link>
      </div>
    </div>
    <div class="content-one px-3 flex flex-col md:flex-row justify-center items-center">
      <div class="pic">
        <img src="https://upload.cc/i1/2021/05/05/zu8SP6.jpg" alt="ukulele" class="object-cover" />
      </div>
      <div class="text-box pr-35 pl-4 py-10 border md:border-4 border-white text-left text-white shadow" data-aos="fade-down" data-aos-duration="1000">
        <p class="mb-2 font-bold">Where words fail<br />music speaks<br /></p>
        <span>— Hans Christian Andersen<br /></span>
        <div class="flex justify-end mr-5">
          <a href="#" @click.prevent class="inline-block text-grayish-dark mt-4 hover:no-underline hover:opacity-70 animate-bounce">More</a>
        </div>
      </div>
    </div>

    <div class="content-two grid grid-cols-1 md:grid-cols-2 place-items-center shadow tracking-wider text-center">
      <div class="text-grayish-dark py-5 md:py-0" data-aos="fade-down" data-aos-duration="1000">
        <h3>關於烏克麗麗</h3>
        <span class="font-bold text-3xl text-orange">–</span>
        <p class="text-justify px-5 leading-8">
          烏克麗麗又稱「夏威夷吉他」，原意為「來到這裡的禮物」，是夏威夷代代相傳的民族樂器。體積小、易攜帶，僅有四弦，音域有限，但聲音清亮柔和，易學易彈。「烏克麗麗」也是夏威夷最具代表性的樂器，小小的身軀乘載著島嶼和海洋的故事，一個人、四條弦，音樂洋流的起點，真摯地傳遞人與人之間的溫柔與善意。
        </p>
      </div>
      <div class="px-0 md:px-16">
        <img src="https://upload.cc/i1/2021/05/06/zZ1lPA.jpg" alt="ukulele" style="height: 400px" class="object-cover w-full" />
      </div>
    </div>
    <div class="py-40 mx-4 lg:px-20 text-center">
      <h4 class="text-grayish-dark pb-3 mb-10 inline-block border-b-2 border-orange">影片欣賞</h4>
      <div class="embed-responsive embed-responsive-21by9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vY79ybb2saw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="store py-40 flex flex-col justify-center bg-cover bg-bottom bg-fixed text-white tracking-widest">
      <div class="title text-center">
        <h5>挑選適合的烏克麗麗</h5>
      </div>
      <div class="self-center px-4 leading-8" data-aos="fade-up" data-aos-duration="1000">
        <ul class="py-4">
          <li class="text-left">
            21吋：彈奏出來的音色最為明亮，有方便攜帶的優勢，符合一般彈唱的需求。
          </li>
          <li class="text-left">
            23吋：音階多且廣，同時是最多人拿的尺寸，彈唱演奏兩相宜。
          </li>
          <li class="text-left">
            26吋：聲音厚實有餘韻，適合進階者及演奏曲彈奏。
          </li>
          <li class="text-center mt-4">
            <router-link :to="{ name: 'Store' }" class="hover:text-white">
              <button type="button" class="border rounded-md px-8 py-2 hover:bg-white hover:text-choco tracking-widest">
                前往線上商店
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url(https://upload.cc/i1/2021/05/04/BJHRvo.jpg);
  height: 550px;
}
.text-item {
  text-shadow: 2px 2px 4px #4e4a40;
  h1 {
    font-size: 50px;
    letter-spacing: 10px;
  }
  p {
    font-size: 20px;
  }
  button {
    font-size: 17px;
    background-color: transparent;
    text-shadow: 1px 1px 2px #4e4a40;
  }
  button:hover {
    color: #4e4a40;
    background-color: #d9d5ca;
    text-shadow: none;
  }
}
.content-one {
  height: 100vh;
  background: linear-gradient(to right, #d9d5ca 50%, white 0%);
  img {
    width: 100%;
    height: 500px;
    vertical-align: middle;
  }
  .pic {
    width: 50%;
    margin-right: -50px;
  }
  .text-box {
    width: 40%;
    flex-shrink: 0;
    letter-spacing: 2px;
    font-family: "Zilla Slab", serif;
    text-shadow: 2px 2px 4px #bbb7ae;
    background: linear-gradient(-45deg, #e9e7e1, #7d776c);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    p {
      font-size: 35px;
      letter-spacing: 4px;
    }
    span {
      font-size: 22px;
    }
    a {
      font-size: 18px;
      text-shadow: 1px 1px 2px #d9d5ca;
    }
  }
  @media (max-width: 768px) {
    .content-one {
      height: auto;
    }
    img {
      width: 100%;
      height: 300px;
    }
    .pic {
      width: 80%;
      margin-left: -80px;
    }
    .text-box {
      flex-shrink: 1;
      width: 80%;
      margin: -30px -50px 0 0;
      p {
        font-size: 25px;
      }
      span {
        font-size: 18px;
      }
    }
  }
}

.content-two {
  background: linear-gradient(to right, white 50%, #d9d5ca 0%);
}
@media (max-width: 768px) {
  .content-two {
    background: none;
  }
}
h3,
h4 {
  font-size: 25px;
  letter-spacing: 4px;
}
.store {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("https://upload.cc/i1/2021/05/07/2BXCIA.jpg");
  .title {
    display: block;
    position: relative;
    h5 {
      font-size: 25px;
    }
    h5::before,
    h5::after {
      content: "";
      position: absolute;
      top: 50%;
      background: #fff;
      width: 8%;
      height: 1px;
    }
    h5::before {
      left: 33%;
    }
    h5::after {
      right: 33%;
    }
    @media (max-width: 1280px) {
      h5::before {
        left: 25%;
      }
      h5::after {
        right: 25%;
      }
    }
    @media (max-width: 768px) {
      h5::before {
        left: 15%;
      }
      h5::after {
        right: 15%;
      }
    }
    @media (max-width: 475px) {
      h5::before,
      h5::after {
        height: 0px;
      }
    }
  }
}
</style>
