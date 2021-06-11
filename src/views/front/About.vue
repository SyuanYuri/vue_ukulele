<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 my-40 mx-6 xl:mx-40 text-grayish-dark" data-aos="fade-up" data-aos-duration="1000">
      <div class="place-self-center px-6 mx-3 md:mx-6 lg:px-8">
        <h3 class="font-bold pb-3 mb-3 my-4 md:mx-8 lg:mx-20 border-b-2 text-center">
          關於音樂<br />
          <span class="text-choco">ABOUT MUSIC</span>
        </h3>
        <p class="mb-5 sm:mb-1 text-justify leading-10">
          音樂是一種符號，一種聲音符號。表達人的所思所想，是人們思想的載體之一。其中隱含了生活體驗，思想情懷。音樂從聲波上分析它介於雜訊和頻率不變的純音之間，從效果上它可以帶給人美的享受和表達人的情感，甚至是抒發、反映現實的一種管道，與生活息息相關。「音樂」與「生活」密不可分，而「音樂生活化」是我們的終極目標。希望能將彈唱、彈奏變成生活的一部份，開心時有音樂相襯、難過時有音樂發洩、孤單時有音樂陪伴，與您共同寫下回憶。
        </p>
      </div>
      <div class="grid grid-cols-2 place-self-center gap-10">
        <img src="https://upload.cc/i1/2021/05/11/3Z5f9q.jpg" alt="ukulele" class="object-cover" />
        <img src="https://upload.cc/i1/2021/05/11/rEoj7L.jpg" alt="ukulele" class="object-cover" />
      </div>
    </div>
    <div class="flex justify-center mb-60">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.329720129316!2d121.53262959999999!3d25.056811399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a95e691c5223%3A0x6a7e9f13ff602f50!2zYU51ZU51ZeWTgeeJjOW9ouixoemkqA!5e0!3m2!1szh-TW!2stw!4v1620555280586!5m2!1szh-TW!2stw"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 24px;
  letter-spacing: 4px;
  span {
    font-size: 16px;
    letter-spacing: 10px;
  }
}
@media (max-width: 768px) {
  h3 {
    font-size: 22px;
  }
}
img {
  height: 60vh;
}
</style>
